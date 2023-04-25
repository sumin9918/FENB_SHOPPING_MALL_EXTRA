const defaultUser = {
  email: '',
  coupons: [],
};

let users = [
  {
    email: 'test@test.com',
    coupons: [
      {
        id: 1,
        title: '신규회원 15% 할인쿠폰',
        discountRate: 15,
        discountPrice: null,
        minimumPrice: 100000,
        endTime: new Date('2023-04-30'),
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

module.exports = { createUser, addCoupon, getCoupons, hasCoupon, removeCoupon };
