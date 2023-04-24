const router = require('express').Router();

const { BRANDS, CATEGORIES, GENDER, COLORS } = require('../constants/products');
const { getProducts } = require('../controllers/products');
const { findStock } = require('../controllers/stocks');

router.get('/', (req, res) => {
  const products = getProducts();

  res.send(
    products.map(({ id, brand, category, gender, color, ...rest }) => ({
      ...rest,
      id,
      brand: BRANDS[brand],
      category: CATEGORIES[category],
      gender: GENDER[gender],
      color: COLORS[color],
      stocks: findStock(id),
    }))
  );
});

// router.post('/', (req, res) => {
//   const { product } = req.body;

//   products.createProduct(product);
// });

module.exports = router;
