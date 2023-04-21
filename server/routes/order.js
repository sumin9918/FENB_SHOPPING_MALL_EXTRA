const router = require('express').Router();
const jwt = require('jsonwebtoken');

const { getUserCart, removeAllCart } = require('../controllers/carts');
const { getStocks, changeStock } = require('../controllers/stocks');
const { cartStockCheck } = require('../middleware/stock');

router.get('/', cartStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const isEmpty = getUserCart(email).products.length < 0;

  if (isEmpty) return res.send({ message: '장바구니가 비어있습니다. 상품을 장바구니에 추가해주세요' });

  res.send({ message: '결제 페이지로 이동합니다.' });
});

router.get('/pay', cartStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);

  // 상품 사이즈 별 수량 변경하기
  const userCart = getUserCart(email);
  userCart.products.forEach((product) => changeStock(product));

  // 유저 장바구니 비우기
  removeAllCart(email);
});

module.exports = router;
