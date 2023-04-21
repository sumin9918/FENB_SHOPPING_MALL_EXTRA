const jwt = require('jsonwebtoken');

const { findDetailStock } = require('../controllers/stocks');
const { getUserCart, getUserCartProduct } = require('../controllers/carts');

const cartStockCheck = (req, res, next) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const { products } = getUserCart(email);

  const isSoldOut = products.some(
    ({ id, selectedSize, quantity }) => findDetailStock({ id, selectedSize }).stock < quantity
  );

  // 기존에 저장된 장바구니의 모든 상품 재고 확인
  if (isSoldOut)
    return res.status(406).send({ message: '기존 장바구니에 재고가 없는 상품이 있습니다. 수량을 다시 선택해주세요' });

  next();
};

const productStockCheck = (req, res, next) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.params.id;
  const { selectedSize, quantity } = req.body;

  // 이번에 요청한 상품의 재고 확인
  const { products } = getUserCart(email);
  // const userCartProduct = getUserCartProduct(id, products);

  const { selectedSize: cartSelectedSize, quantity: cartQuantity } = products.reduce(
    (acc, cur) => {
      if (cur.id === id) {
        acc.selectedSize = cur.selectedSize;
        acc.quantity += cur.quantity;
      }
      return acc;
    },
    { selectedSize: null, quantity: 0 }
  );

  // 장바구니에 없는 상품을 추가한 경우
  if (cartSelectedSize === null) return next();

  // const { selectedSize: cartSelectedSize, quantity: cartQuantity } = userCartProduct;
  const { stock } = findDetailStock({ id, selectedSize: selectedSize ?? cartSelectedSize });

  if (stock < quantity + cartQuantity)
    return res.status(406).send({ message: '상품의 재고가 없습니다. 수량을 다시 선택해주세요' });

  next();
};

module.exports = { cartStockCheck, productStockCheck };
