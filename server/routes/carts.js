const router = require('express').Router();

const {
  addCart,
  getUserCart,
  changeCart,
  removeCart,
  getUserCartSelectProductStock,
  getUserCartProduct,
} = require('../controllers/carts');
const { getStock, getSelectedSizeStock } = require('../controllers/stocks');
const { cartStockCheck } = require('../middleware/stock');
const { authCheck } = require('../middleware/auth');
const { getProduct } = require('../controllers/products');

router.get('/me', authCheck, cartStockCheck, (req, res) => {
  const { email } = req.locals;

  const { products } = getUserCart(email);
  const addStockToUserCart = products.map(product => ({
    ...product,
    stocks: getStock(product.id),
  }));

  res.send(addStockToUserCart);
});

router.post('/me/:id', authCheck, (req, res) => {
  const { email } = req.locals;
  const id = +req.params.id;
  const { selectedSize } = req.body;
  const quantity = 1;

  // 이번에 요청한 상품의 재고 확인
  const { products } = getUserCart(email);
  const cartProduct = getUserCartSelectProductStock(products, id, selectedSize);
  const { stock } = getSelectedSizeStock(id, selectedSize);

  if (stock < quantity + (cartProduct.quantity ?? 0)) {
    return res.status(406).send({ message: '상품의 재고가 없습니다. 수량을 다시 선택해주세요' });
  }

  const product = getProduct(id);

  if (cartProduct.quantity) changeCart({ email, id, quantity: quantity + cartProduct.quantity });
  else addCart({ email, selectedSize, quantity, ...product });

  res.send({ message: '장바구니에 상품이 정상적으로 추가되었습니다.' });
});

// cart 변경
router.patch('/me/:id', authCheck, cartStockCheck, (req, res) => {
  const { email } = req.locals;
  const id = +req.params.id;
  const { quantity } = req.body;

  // 이번에 요청한 상품의 재고 확인
  const { products } = getUserCart(email);
  const { selectedSize } = getUserCartProduct(id, products);
  const { stock } = getSelectedSizeStock(id, selectedSize);

  if (stock < quantity) return res.status(406).send({ message: '상품의 재고가 없습니다. 수량을 다시 선택해주세요' });

  changeCart({ email, id, quantity });

  res.send({ message: '장바구니 상품이 변경되었습니다.' });
});

// 삭제
router.delete('/me/:id', authCheck, cartStockCheck, (req, res) => {
  const { email } = req.locals;
  const id = +req.params.id;

  removeCart({ email, id });
  res.send({ message: '장바구니 상품이 삭제되었습니다.' });
});

module.exports = router;
