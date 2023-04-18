const router = require('express').Router();

const favorite = require('../middleware/favorite');

const users = require('../controllers/users');

router.get('/', (req, res) => {
  res.send(users.getUsers());
});

router.patch('/:id', favorite, (req, res) => {
  res.send(users.getUsers());
});

module.exports = router;
