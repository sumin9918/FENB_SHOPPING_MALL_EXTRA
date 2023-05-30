const router = require('express').Router();

const {
  getUser,
  getAddresses,
  addAddress,
  updateDefaultAddress,
  updateAddress,
  removeAddress,
  moveForwardDefaultAddress,
} = require('../controllers/users');
const { authCheck } = require('../middleware/auth');
const { checkAddress } = require('../middleware/address');

router.get('/me', authCheck, (req, res) => {
  const { email } = req.locals;

  const { email: myEmail, name, phone, addresses } = getUser(email);

  res.send({ email: myEmail, name, phone, addresses });
});

router.get('/me/addresses', authCheck, (req, res) => {
  const { email } = req.locals;

  res.send(getAddresses(email));
});

router.post('/me/address', authCheck, (req, res) => {
  const { email } = req.locals;
  const { recipient, recipientPhone, mainAddress, detailAddress, postcode, isDefault = null } = req.body;

  if (!recipient || !recipientPhone || !mainAddress || !postcode)
    return res.status(406).send({ message: '모든 정보를 입력해주세요.' });

  const id = addAddress(email, {
    recipient,
    recipientPhone,
    mainAddress,
    detailAddress,
    postcode,
    isDefault,
  });
  moveForwardDefaultAddress(email);

  res.send({ id });
});

router.patch('/me/address/default/:id', authCheck, checkAddress, (req, res) => {
  const { email } = req.locals;
  const id = req.params.id;

  updateDefaultAddress(email, id);
  moveForwardDefaultAddress(email);
  res.send({ message: '기본 배송지가 변경되었습니다.' });
});

router.patch('/me/address/:id', authCheck, checkAddress, (req, res) => {
  const { email } = req.locals;
  const id = req.params.id;
  const newAddress = req.body;

  updateAddress(email, id, newAddress);
  res.send({ message: '배송지가 수정되었습니다.' });
});

router.delete('/me/address/:id', authCheck, checkAddress, (req, res) => {
  const { email } = req.locals;
  const id = req.params.id;

  removeAddress(email, id);
  res.send({ message: '배송지가 삭제되었습니다.' });
});

module.exports = router;
