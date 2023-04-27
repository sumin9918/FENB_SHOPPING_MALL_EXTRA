let CarouselSlides = [
  {
    id: 1,
    imgURL: 'https://via.placeholder.com/2560x960',
    sideBackgroundColor: '#cccccc',
    alt: '15% 쿠폰 슬라이드',
  },
  {
    id: 2,
    imgURL: 'http://localhost:8000/images/coupons/20000Coupon.png',
    sideBackgroundColor: '#E1E1E1',
    alt: '20000원 쿠폰 슬라이드',
  },
];

const getCarousel = () => CarouselSlides;

module.exports = { getCarousel };
