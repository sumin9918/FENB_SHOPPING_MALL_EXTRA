let CarouselSlides = [
  {
    imgURL: 'http://localhost:8000/images/coupons/10Coupon.png',
    sideBackgroundColor: '#FCEAD9',
    alt: '10% 쿠폰 슬라이드',
  },
  {
    imgURL: 'http://localhost:8000/images/coupons/20000Coupon.png',
    sideBackgroundColor: '#FCEAD9',
    alt: '20000원 쿠폰 슬라이드',
  },
];

const getCarousel = () => CarouselSlides;

module.exports = { getCarousel };
