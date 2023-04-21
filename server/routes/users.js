const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { getUsers, getUser } = require('../controllers/users');

router.get('/', (req, res) => {
  res.send(getUsers());
});

router.get('/me', (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);

  const { email: myEmail, name, address, phoneNumber } = getUser(email);

  res.send({ email: myEmail, name, address, phoneNumber });
});

module.exports = router;
