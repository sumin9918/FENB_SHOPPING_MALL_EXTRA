const router = require('express').Router();
const products = require('./products');
const users = require('./users');
const auth = require('./auth');

router.use('/products', products);
router.use('/users', users);
router.use('/auth', auth);

module.exports = router;
