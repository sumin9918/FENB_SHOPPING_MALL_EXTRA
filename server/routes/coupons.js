const router = require('express').Router();

const { authCheck } = require('../middleware/auth');
const { getCoupons, addCoupon, hasCoupon } = require('../controllers/coupons');
const { expireCoupon } = require('../middleware/coupon');
const COUPONS = require('../constants/coupons');

router.get('/', authCheck, expireCoupon, (req, res) => {
  const { email } = req.locals;

  res.send(getCoupons(email));
});

router.post('/:id', authCheck, expireCoupon, (req, res) => {
  const { email } = req.locals;
  const id = +req.params.id;

  const newCoupon = COUPONS.find(coupon => coupon.id === id);

  if (!newCoupon) return res.status(404).send({ message: '요청하신 쿠폰이 없습니다.' });

  const isCoupon = hasCoupon(email, id);
  if (isCoupon) return res.status(403).send({ message: '이미 발급받은 쿠폰입니다.' });

  addCoupon(email, newCoupon);

  res.send({ message: '쿠폰이 정상발급되었습니다.' });
});

module.exports = router;
