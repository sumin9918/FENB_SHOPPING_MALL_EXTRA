let CarouselSlides = [
  {
    imgURL: 'http://localhost:8000/images/coupons/15percent.jpg',
    sideBackgroundColor: '#FECBCA',
    alt: '15% 쿠폰 슬라이드',
  },
  {
    imgURL: 'http://localhost:8000/images/coupons/20000Coupon.png',
    sideBackgroundColor: '#E1E1E1',
    alt: '20000원 쿠폰 슬라이드',
  },
];

const getCarousel = () => CarouselSlides;

module.exports = { getCarousel };
