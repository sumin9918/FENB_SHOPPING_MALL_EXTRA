const router = require('express').Router();
const products = require('./products');
const users = require('./users');
const auth = require('./auth');
const favorites = require('./favorites');
const carts = require('./carts');
const order = require('./order');
const slides = require('./slides');
const coupons = require('./coupons');

router.use('/products', products);
router.use('/users', users);
router.use('/auth', auth);
router.use('/favorites', favorites);
router.use('/carts', carts);
router.use('/order', order);
router.use('/slides', slides);
router.use('/coupons', coupons);

module.exports = router;
