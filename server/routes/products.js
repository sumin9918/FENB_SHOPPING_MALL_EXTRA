const router = require('express').Router();

const { BRANDS, CATEGORIES, GENDER, COLORS } = require('../constants/products');
const { getAllProducts, getPageProducts } = require('../controllers/products');
const { getStock } = require('../controllers/stocks');

router.get('/', (req, res) => {
  const { search: searchQuery = null, category: categoryQuery = null } = req.query;

  const filteredProducts = getAllProducts()
    .map(({ id, brand, category, gender, color, ...rest }) => ({
      ...rest,
      id,
      brand: BRANDS[brand],
      category: CATEGORIES[category],
      gender: GENDER[gender],
      color: COLORS[color],
      stocks: getStock(id),
    }))
    .filter(({ name, brand, category }) =>
      searchQuery
        ? name.includes(searchQuery) ||
          brand.kr.includes(searchQuery) ||
          brand.en.includes(searchQuery) ||
          category.en.includes(searchQuery) ||
          category.kr.includes(searchQuery)
        : categoryQuery
        ? category.en.includes(categoryQuery)
        : true
    );

  res.send(filteredProducts);
});

router.get('/pages/:page', (req, res) => {
  const page = +req.params.page;
  const pageSize = +(req.query.pageSize ?? 5);
  const products = getAllProducts();
  const pageProducts = getPageProducts(page, pageSize).map(({ id, brand, category, gender, color, ...rest }) => ({
    ...rest,
    id,
    brand: BRANDS[brand],
    category: CATEGORIES[category],
    gender: GENDER[gender],
    color: COLORS[color],
    stocks: getStock(id),
  }));

  const pageInformation = {
    currentPage: page,
    totalPages: Math.ceil(products.length / pageSize),
    products: pageProducts,
    totalProducts: products.length,
  };

  res.send(pageInformation);
});

module.exports = router;
