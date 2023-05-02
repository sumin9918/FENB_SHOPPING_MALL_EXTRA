const { removeExpireCoupon } = require('../controllers/coupons');

const expireCoupon = (req, res, next) => {
  const { email } = req.locals;

  removeExpireCoupon(email);

  next();
};

module.exports = { expireCoupon };
