const express = require('express');
const router = express.Router();

const products = require('../controllers/products');

router.get('/', (req, res) => {
  res.send(products.getProducts());
});

router.post('/', (req, res) => {
  const { product, sizes } = req.body;

  products.createProduct(product, sizes);

  res.send({ products: products.getProducts(), sizes: products.getProductSizes() });
});

// // PATCH '/todos/:id' {completed} or {content}
// router.patch('/todos/:id', (req, res) => {
//   const { id } = req.params;
//   const payload = req.body;

//   todos = todos.map((todo) => (todo.id === +id ? { ...todo, ...payload } : todo));
//   res.send(todos);
// });

// router.delete('/todos/:id', (req, res) => {
//   const { id } = req.params;

//   todos = todos.filter((todo) => todo.id !== +id);
//   res.send(todos);
// });

// router.delete('/todos', (req, res) => {
//   const completed = JSON.parse(req.query.completed);

//   todos = todos.filter((todo) => todo.completed !== completed);
//   res.send(todos);
// });

module.exports = router;
