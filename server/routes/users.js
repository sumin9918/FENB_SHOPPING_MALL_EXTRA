const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { getUsers, getUser } = require('../controllers/users');
const { authCheck } = require('../middleware/auth');

router.get('/', (req, res) => {
  res.send(getUsers());
});

router.get('/me', authCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);

  const { email: myEmail, name, address, phoneNumber } = getUser(email);

  res.send({ email: myEmail, name, address, phoneNumber });
});

module.exports = router;
