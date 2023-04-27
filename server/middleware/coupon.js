const { removeExpireCoupon, hasCoupon } = require('../controllers/coupons');

const checkCoupon = (req, res, next) => {
  const { email } = req.locals;
  const { couponId = null } = req.body;

  const isCoupon = hasCoupon(email, couponId);
  if (couponId && !isCoupon)
    return res.status(404).send({ message: '존재하지 않은 쿠폰입니다. 쿠폰을 다시 설정해주세요' });

  next();
};

const expireCoupon = (req, res, next) => {
  const { email } = req.locals;

  removeExpireCoupon(email);

  next();
};

module.exports = { checkCoupon, expireCoupon };
