const { addCoupon, addPurchase } = require('../controllers/history');

const addCouponHistory = (req, res, next) => {
  const { email } = req.locals;

  addCoupon(email, historyId);
  next();
};

const addPurchaseHistory = (req, res, next) => {
  const { email } = req.locals;

  addPurchase(email, historyId);
  next();
};

module.exports = { addPurchaseHistory, addCouponHistory };
