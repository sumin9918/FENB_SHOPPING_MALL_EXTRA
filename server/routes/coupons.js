const router = require('express').Router();

const { authCheck } = require('../middleware/auth');
const { expireCoupon } = require('../middleware/coupon');
const { getCoupons, addCoupon, getHistory, addHistory } = require('../controllers/coupons');
const { getUser } = require('../controllers/users');
const COUPONS = require('../constants/coupons');
const { getDateAfter } = require('../utils/date');

router.get('/', authCheck, expireCoupon, (req, res) => {
  const { email } = req.locals;

  res.send(getCoupons(email));
});

router.post('/:id', authCheck, expireCoupon, (req, res) => {
  const { email } = req.locals;
  const { id } = req.params;

  const endTime = getDateAfter(7);
  const newCoupon = { ...COUPONS.find(coupon => coupon.id === id), endTime };
  if (!newCoupon.id) return res.status(404).send({ message: '요청하신 쿠폰이 없습니다.' });

  const user = getUser(email);
  // 회원가입 기간이 현재를 기준으로 7일 넘을 경우
  if (user.createAt.getTime() < getDateAfter(-7).getTime())
    return res.status(401).send({ message: '신규회원 가입기간이 7일 넘어서 발급받을 수 없습니다.' });

  const history = getHistory(email, id);
  if (history && history.count === newCoupon.limit)
    return res.status(403).send({ message: '더이상 발급 받으실 수 없습니다.' });

  addCoupon(email, newCoupon);
  addHistory(email, id);

  res.send({ message: '쿠폰이 정상발급되었습니다.' });
});

module.exports = router;
