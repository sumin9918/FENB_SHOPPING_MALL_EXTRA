const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { addCart, getUserCart, changeCart, removeCart, getUserCartProduct } = require('../controllers/carts');
const { findStock } = require('../controllers/stocks');
const { cartStockCheck, productStockCheck } = require('../middleware/stock');

router.get('/', cartStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);

  const { products } = getUserCart(email);
  const addStockToUserCart = products.map((product) => ({
    ...product,
    stocks: findStock(product.id),
  }));

  res.send(addStockToUserCart);
});

// cart 추가
router.post('/:id', productStockCheck, (req, res) => {
  // 기존 장바구니에 있던 상품의 수량과 내가 추가할 상품의 수량을 합친다.
  // 합친 수량이 서버의 상품의 수량보다 클경우 res.status(406) 에러를 발생시키고
  // 합친 수량이 서버의 상품의 수량보다 작은경우 장바구니를 추가한다.

  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.params.id;
  const { selectedSize, quantity } = req.body;

  // const { products } = getUserCart(email);
  // const { selectedSize: cartSelectedSize, quantity: cartQuantity } = getUserCartProduct(id, products);

  // const { stock } = findDetailStock({ id, selectedSize: selectedSize ?? cartSelectedSize });

  // if (stock < quantity + cartQuantity)
  //   return res.status(406).send({ message: '상품의 재고를 초과했습니다. 수량을 다시 선택해주세요' });

  addCart({ email, id, selectedSize, quantity });

  res.send({ message: '상품이 추가되었습니다.' });
});

// cart 변경
router.patch('/:id', cartStockCheck, productStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.params.id;
  const payload = req.body;

  changeCart({ email, id, payload });

  res.send({ message: '상품이 변경되었습니다.' });
});

router.delete('/:id', cartStockCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.params.id;

  removeCart({ email, id });
});

module.exports = router;
