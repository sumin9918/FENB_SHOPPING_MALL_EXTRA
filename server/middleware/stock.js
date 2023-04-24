const jwt = require('jsonwebtoken');

const { findDetailStock } = require('../controllers/stocks');
const { getUserCart } = require('../controllers/carts');

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

module.exports = { cartStockCheck };
