const { v4: uuidv4 } = require('uuid');

const COUPONS = [
  {
    id: uuidv4(),
    title: '신규회원 15% 할인쿠폰',
    discountRate: 15,
    discountPrice: null,
    minimumPrice: 100000,
    endTime: new Date('2023-05-04'),
  },
  {
    id: uuidv4(),
    title: '1주년 기념 2만원 할인쿠폰',
    discountRate: null,
    discountPrice: 20000,
    minimumPrice: 100000,
    endTime: new Date('2023-05-04'),
  },
];

module.exports = COUPONS;
