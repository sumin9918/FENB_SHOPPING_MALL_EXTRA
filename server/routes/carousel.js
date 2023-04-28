const router = require('express').Router();
const COUPONS = require('../constants/coupons');
const { getCarousel } = require('../controllers/carousel');

router.get('/', (req, res) => {
  const carouselContainCoupon = getCarousel().map((slide, idx) => ({
    id: COUPONS[idx].id,
    ...slide,
  }));

  res.send(carouselContainCoupon);
});

module.exports = router;
