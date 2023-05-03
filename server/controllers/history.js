const { v4: uuidv4 } = require('uuid');

const defaultHistory = {
  email: '',
  purchases: [],
  coupons: [],
};

let history = [
  {
    email: 'test@test.com',
    purchases: [],
    coupons: [],
  },
];

const createUser = email => {
  history = [{ ...defaultHistory, email }, ...history];
};

const addPurchaseHistory = (email, newHistory) => {
  history = history.map(user =>
    user.email === email
      ? { ...user, purchases: [{ id: uuidv4(), orderDate: new Date(), ...newHistory }, ...user.purchases] }
      : user
  );
};

const addCouponHistory = (email, historyId) =>
  (history = history.map(user =>
    user.email === email
      ? {
          ...user,
          coupons: user.coupons.some(history => history.id === historyId)
            ? user.coupons.map(history =>
                history.id === historyId ? { ...history, count: history.count + 1 } : history
              )
            : [{ id: historyId, count: 1 }, ...user.coupons],
        }
      : user
  ));

const getPurchasesHistory = email => history.find(user => user.email === email).purchases;

const getCouponHistory = (email, couponId) =>
  history.find(user => user.email === email).coupons.find(coupon => coupon.id === couponId);

module.exports = {
  createUser,
  addPurchaseHistory,
  addCouponHistory,
  getPurchasesHistory,
  getCouponHistory,
};
