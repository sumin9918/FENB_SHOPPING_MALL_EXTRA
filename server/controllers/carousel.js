let CarouselSlides = [
  {
    title: '15% 쿠폰을 제공하는 슬라이드입니다.',
    imgURL: 'https://via.placeholder.com/2560x960',
    sideBackgroundColor: '#cccccc',
    alt: '15% 쿠폰 슬라이드',
    feature: 'coupon',
    buttonColor: 'red',
  },
  {
    title: '1000원 쿠폰을 제공하는 슬라이드입니다.',
    imgURL: 'https://via.placeholder.com/2560x960',
    sideBackgroundColor: '#cccccc',
    alt: '10000원 쿠폰 슬라이드',
    feature: 'coupon',
    buttonColor: 'blue',
  },
  {
    title: '5000원 쿠폰을 제공하는 슬라이드입니다.',
    imgURL: 'https://via.placeholder.com/2560x960',
    sideBackgroundColor: '#cccccc',
    alt: '5000원 쿠폰 슬라이드',
    feature: 'coupon',
    buttonColor: 'white',
  },
  {
    title: '봄 특가 신발 세일',
    imgURL: 'https://via.placeholder.com/2560x960',
    sideBackgroundColor: '#cccccc',
    alt: '사진 슬라이드',
    feature: 'picture',
    buttonColor: 'purple',
  },
];

const getCarousel = () => CarouselSlides;

module.exports = { getCarousel };
