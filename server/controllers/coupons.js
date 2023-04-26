const defaultUser = {
  email: '',
  coupons: [],
};

let users = [
  {
    email: 'test@test.com',
    coupons: [
      {
        id: 2,
        title: '1주년 기념 2만원 할인쿠폰',
        discountRate: null,
        discountPrice: 20000,
        minimumPrice: 100000,
        endTime: new Date('2023-05-04'),
      },
    ],
  },
];

const createUser = (email) => {
  users = [...users, { ...defaultUser, email }];
};

const hasCoupon = (email, id) =>
  users.some((user) => user.email === email && user.coupons.some((coupon) => coupon.id === id));

const addCoupon = (email, coupon) =>
  (users = users.map((user) => (user.email === email ? { ...user, coupons: [coupon, ...user.coupons] } : user)));

const getCoupons = (email) => users.find((user) => user.email === email).coupons;

const removeCoupon = (email, id) => {
  users = users.map((user) =>
    user.email === email ? { ...user, coupons: user.coupons.filter((coupon) => coupon.id !== id) } : user
  );
};

const removeExpireCoupon = (email) => {
  users = users.map((user) =>
    user.email === email
      ? { ...user, coupons: user.coupons.filter((coupon) => new Date().getTime() < coupon.endTime.getTime()) }
      : user
  );
};

module.exports = { createUser, addCoupon, getCoupons, hasCoupon, removeCoupon, removeExpireCoupon };
