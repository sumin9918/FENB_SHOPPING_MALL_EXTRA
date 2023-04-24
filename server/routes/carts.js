const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { addCart, getUserCart, changeCart, removeCart, getUserCartProduct } = require('../controllers/carts');
const { findStock } = require('../controllers/stocks');
const { cartStockCheck, productStockCheck } = require('../middleware/stock');
const { authCheck } = require('../middleware/auth');

router.get('/me', authCheck, cartStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);

  const { products } = getUserCart(email);
  const addStockToUserCart = products.map((product) => ({
    ...product,
    stocks: findStock(product.id),
  }));

  res.send(addStockToUserCart);
});

router.post('/me/:id', authCheck, productStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.params.id;
  const { selectedSize, quantity } = req.body;

  addCart({ email, id, selectedSize, quantity });

  res.send({ message: '장바구니에 상품이 정상적으로 추가되었습니다.' });
});

// cart 변경
router.patch('/me/:id', authCheck, cartStockCheck, productStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.params.id;
  const payload = req.body;

  changeCart({ email, id, payload });

  res.send({ message: '장바구니 상품이 변경되었습니다.' });
});

router.delete('/:id', cartStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.params.id;

  removeCart({ email, id });
});

module.exports = router;
