const { v4: uuidv4 } = require('uuid');

const COUPONS = [
  {
    id: uuidv4(),
    title: '신규회원 15% 할인쿠폰',
    discountRate: 15,
    discountPrice: null,
    minimumPrice: 100000,
    endTime: null,
    limit: 1,
  },
  {
    id: uuidv4(),
    title: '상시제공 2만원 할인쿠폰',
    discountRate: null,
    discountPrice: 20000,
    minimumPrice: 100000,
    endTime: null,
    limit: Infinity,
  },
];

module.exports = COUPONS;
