const router = require('express').Router();

const COUPONS = require('../constants/coupons');
const { getSlides } = require('../controllers/slides');

router.get('/', (req, res) => {
  const slides = getSlides().map((slide, idx) => ({
    couponId: COUPONS[idx].id,
    ...slide,
  }));

  res.send(slides);
});

module.exports = router;
