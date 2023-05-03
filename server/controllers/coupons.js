const defaultUser = {
  email: '',
  coupons: [],
};

let users = [
  {
    email: 'test@test.com',
    coupons: [],
  },
];

const createUser = email => {
  users = [...users, { ...defaultUser, email }];
};

const addCoupon = (email, coupon) =>
  (users = users.map(user => (user.email === email ? { ...user, coupons: [coupon, ...user.coupons] } : user)));

const getCoupons = email => users.find(user => user.email === email).coupons;

const getCoupon = (email, couponId) =>
  users.find(user => user.email === email).coupons.find(coupon => coupon.id === couponId);

const removeCoupon = (email, couponId) => {
  users = users.map(user =>
    user.email === email ? { ...user, coupons: user.coupons.filter(coupon => coupon.id !== couponId) } : user
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
  getCoupons,
  getCoupon,
  removeCoupon,
  removeExpireCoupon,
};
