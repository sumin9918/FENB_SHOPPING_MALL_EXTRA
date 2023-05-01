const router = require('express').Router();

const { BRANDS, CATEGORIES, GENDER, COLORS } = require('../constants/products');
const { getProducts, getPageProducts } = require('../controllers/products');
const { findStock } = require('../controllers/stocks');

router.get('/', (req, res) => {
  const { search = null, category = null } = req.query;
  const products = getProducts();

  const filteredProducts = products
    .map(({ id, brand, category, gender, color, ...rest }) => ({
      ...rest,
      id,
      brand: BRANDS[brand],
      category: CATEGORIES[category],
      gender: GENDER[gender],
      color: COLORS[color],
      stocks: findStock(id),
    }))
    .filter(product =>
      search
        ? product.name.includes(search) || product.brand.kr.includes(search) || product.brand.en.includes(search)
        : category
        ? product.category.en.includes(category)
        : true
    );

  res.send(filteredProducts);
});

router.get('/pages/:page', (req, res) => {
  const page = +req.params.page;
  const pageSize = +(req.query.pageSize ?? 5);
  const products = getProducts();
  const pageProducts = getPageProducts(page, pageSize).map(({ id, brand, category, gender, color, ...rest }) => ({
    ...rest,
    id,
    brand: BRANDS[brand],
    category: CATEGORIES[category],
    gender: GENDER[gender],
    color: COLORS[color],
    stocks: findStock(id),
  }));

  const pageInformation = {
    currentPage: page,
    totalPages: Math.ceil(products.length / pageSize),
    products: pageProducts,
    totalProducts: products.length,
  };

  res.send(pageInformation);
});

// router.post('/', (req, res) => {
//   const { product } = req.body;

//   products.createProduct(product);
// });

module.exports = router;
