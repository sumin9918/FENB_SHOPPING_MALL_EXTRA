const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { authCheck } = require('../middleware/auth');
const { expireCoupon } = require('../middleware/coupon');
const { getCoupons, addCoupon } = require('../controllers/coupons');
const { getUser } = require('../controllers/users');
const COUPONS = require('../constants/coupons');
const { getDateAfter } = require('../utils/date');
const { getCouponHistory, addCouponHistory } = require('../controllers/history');

router.get('/', authCheck, expireCoupon, (req, res) => {
  const { email } = req.locals;

  res.send(getCoupons(email));
});

router.post('/:id', authCheck, expireCoupon, (req, res) => {
  const { email } = req.locals;
  const { id: couponId } = req.params;

  const coupon = COUPONS.find(coupon => coupon.id === couponId);
  if (!coupon) return res.status(404).send({ message: '요청하신 쿠폰이 없습니다.' });

  const user = getUser(email);
  if (user.createAt.getTime() < getDateAfter(-7).getTime())
    return res.status(401).send({ message: '가입기간이 7일 넘어서 발급받을 수 없습니다.' });

  const couponsHistory = getCouponHistory(email, couponId);
  if (couponsHistory && couponsHistory.count === coupon.limit)
    return res.status(403).send({ message: '더이상 발급 받으실 수 없습니다.' });

  const newCoupon = { ...coupon, couponId: coupon.id, id: uuidv4(), endTime: getDateAfter(7) };

  addCoupon(email, newCoupon);
  addCouponHistory(email, couponId);

  res.send({ message: '쿠폰이 정상발급되었습니다.' });
});

module.exports = router;
