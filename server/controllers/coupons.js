const defaultUser = {
  email: '',
  coupons: [],
  histories: [{ id: null, count: 0 }],
};

let users = [
  {
    email: 'test@test.com',
    coupons: [],
    histories: [],
  },
];

const createUser = email => {
  users = [...users, { ...defaultUser, email }];
};

const hasCoupon = (email, id) =>
  users.some(user => user.email === email && user.coupons.some(coupon => coupon.id === id));

const hasHistory = (email, historyId) =>
  users.find(user => user.email === email).histories.some(history => history.id === historyId);

const getHistory = (email, historyId) =>
  users.find(user => user.email === email).histories.find(history => history.id === historyId);

const addHistory = (email, historyId) =>
  (users = users.map(user =>
    user.email === email
      ? {
          ...user,
          histories: user.histories.some(history => history.id === historyId)
            ? user.histories.map(history =>
                history.id === historyId ? { ...history, count: history.count + 1 } : history
              )
            : [{ id: historyId, count: 1 }, ...user.histories],
        }
      : user
  ));

const addCoupon = (email, coupon) =>
  (users = users.map(user => (user.email === email ? { ...user, coupons: [coupon, ...user.coupons] } : user)));

const getCoupons = email => users.find(user => user.email === email).coupons;

const getCoupon = (email, couponId) =>
  users.find(user => user.email === email).coupons.find(coupon => coupon.id === couponId);

const removeCoupon = (email, id) => {
  users = users.map(user =>
    user.email === email ? { ...user, coupons: user.coupons.filter(coupon => coupon.id !== id) } : user
  );
};

const removeExpireCoupon = email => {
  users = users.map(user =>
    user.email === email
      ? { ...user, coupons: user.coupons.filter(coupon => new Date().getTime() < coupon.endTime.getTime()) }
      : user
  );
};

module.exports = {
  createUser,
  addCoupon,
  addHistory,
  getCoupons,
  getCoupon,
  getHistory,
  hasCoupon,
  hasHistory,
  removeCoupon,
  removeExpireCoupon,
};
