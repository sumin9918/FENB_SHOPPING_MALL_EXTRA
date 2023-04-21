const router = require('express').Router();
const { getCarousel } = require('../controllers/carousel');

router.get('/', (req, res) => {
  res.send(getCarousel());
});

module.exports = router;
