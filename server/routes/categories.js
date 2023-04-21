const router = require('express').Router();

const { CATEGORIES } = require('../constants/products');

router.get('/', (req, res) => {
  res.send(CATEGORIES);
});

module.exports = router;
