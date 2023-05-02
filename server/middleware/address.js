const { getAddress } = require('../controllers/users');

const checkAddress = (req, res, next) => {
  const { email } = req.locals;
  const id = req.params.id;

  const address = getAddress(email, id);
  if (!address) return res.status(404).send({ message: '요청하신 배송지가 없습니다.' });

  next();
};

module.exports = { checkAddress };
