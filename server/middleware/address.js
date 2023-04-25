const { hasAddress } = require('../controllers/users');

const checkAddress = (req, res, next) => {
  const { email } = req.locals;
  const id = req.params.id;

  const isAddress = hasAddress(email, id);
  if (!isAddress) return res.status(404).send({ message: '요청하신 배송지가 없습니다.' });

  next();
};

module.exports = { checkAddress };
