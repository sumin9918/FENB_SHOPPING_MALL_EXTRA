const router = require('express').Router();
const COUPONS = require('../constants/coupons');
const { getCarousel } = require('../controllers/carousel');

router.get('/', (req, res) => {
  const carouselContainCoupon = getCarousel().map((slide) => ({
    ...slide,
    ...COUPONS.find((coupon) => coupon.id === slide.id),
  }));

  res.send(carouselContainCoupon);
});

module.exports = router;
