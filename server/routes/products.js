const router = require('express').Router();

const { getProducts } = require('../controllers/products');

router.get('/', (req, res) => {
  res.send(getProducts());
});

// router.post('/', (req, res) => {
//   const { product } = req.body;

//   products.createProduct(product);
// });

module.exports = router;
