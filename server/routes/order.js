const router = require('express').Router();

const { getUserCart, removeAllCart } = require('../controllers/carts');
const { changeStock } = require('../controllers/stocks');
const { getHistory, addHistory } = require('../controllers/history');
const { getAddress } = require('../controllers/users');
const { getCoupon, removeCoupon } = require('../controllers/coupons');
const { cartStockCheck } = require('../middleware/stock');
const { authCheck } = require('../middleware/auth');
const { expireCoupon, checkCoupon } = require('../middleware/coupon');

// 결제 페이지 이동 전 check 용도
router.get('/', authCheck, cartStockCheck, expireCoupon, (req, res) => {
  const { email } = req.locals;
  const isEmpty = getUserCart(email).products.length < 0;

  if (isEmpty) return res.send({ message: '장바구니가 비어있습니다. 상품을 장바구니에 추가해주세요' });

  res.send({ message: '결제 페이지로 이동합니다.' });
});

// 쿠폰 적용시 확인 용도
router.get('/coupons/:id', authCheck, (req, res) => {
  const { email } = req.locals;
  const id = +req.params.id;
  const { products } = getUserCart(email);

  const { discountRate, discountPrice, minimumPrice } = getCoupon(email, id);

  const totalPrice = products.reduce((accumulate, product) => accumulate + product.price * product.quantity, 0);
  const discountedTotalPrice = discountPrice ? totalPrice - discountPrice : totalPrice * (1 - discountRate / 100);
  const discountAmount = totalPrice - discountedTotalPrice;

  if (totalPrice < minimumPrice)
    return res.status(403).send({ message: `쿠폰을 사용하기 위한 최소 주문 금액을 충족하지 않습니다.` });

  res.send({
    discountAmount,
    discountedTotalPrice,
  });
});

// 결제하기 버튼 클릭시 사용해주세요
router.post('/pay', authCheck, cartStockCheck, expireCoupon, checkCoupon, (req, res) => {
  const { email } = req.locals;
  const { addressId, paymentMethod, couponId = null } = req.body;

  const { products } = getUserCart(email);
  const { discountRate, discountPrice, minimumPrice } = getCoupon(email, couponId);

  const totalPrice = products.reduce((accumulate, product) => accumulate + product.price * product.quantity, 0);
  const discountedTotalPrice = discountPrice ? totalPrice - discountPrice : totalPrice * (1 - discountRate / 100);
  const discountAmount = totalPrice - discountedTotalPrice;

  if (totalPrice < minimumPrice)
    return res.status(403).send({ message: `쿠폰을 사용하기 위한 최소 주문 금액을 충족하지 않습니다.` });

  // address id로 주소 가져오기
  const deliveryAddress = getAddress(email, addressId);

  addHistory(email, { deliveryAddress, products, paymentMethod, totalPrice, discountedTotalPrice, discountAmount });

  removeCoupon(email, couponId);

  // 상품 사이즈 별 수량 변경하기
  const userCart = getUserCart(email);
  userCart.products.forEach(product => changeStock(product));

  // 유저 장바구니 비우기
  removeAllCart(email);
  res.send({ message: '결제가 완료되었습니다.' });
});

module.exports = router;
