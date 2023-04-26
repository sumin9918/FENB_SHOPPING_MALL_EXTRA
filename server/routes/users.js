const router = require('express').Router();

const {
  getUser,
  addAddress,
  changeDefaultAddress,
  editAddress,
  deleteAddress,
  moveFrontDefaultAddress,
} = require('../controllers/users');
const { authCheck } = require('../middleware/auth');
const { checkAddress } = require('../middleware/address');

router.get('/me', authCheck, (req, res) => {
  const { email } = req.locals;

  const { email: myEmail, name, phone, addresses } = getUser(email);

  res.send({ email: myEmail, name, phone, addresses });
});

router.post('/me/address', authCheck, (req, res) => {
  const { email } = req.locals;
  const { recipient, recipientPhone, mainAddress, detailAddress, postcode, isDefault = null } = req.body;

  if (!recipient || !recipientPhone || !mainAddress || !detailAddress || !postcode)
    return res.status(406).send({ message: '모든 정보를 입력해주세요.' });

  const id = addAddress(email, {
    recipient,
    recipientPhone,
    mainAddress,
    detailAddress,
    postcode,
    isDefault,
  });
  moveFrontDefaultAddress(email);

  res.send({ id });
});

router.patch('/me/address/default/:id', authCheck, checkAddress, (req, res) => {
  const { email } = req.locals;
  const id = req.params.id;

  changeDefaultAddress(email, id);
  moveFrontDefaultAddress(email);
  res.send({ message: '기본 배송지가 변경되었습니다.' });
});

router.patch('/me/address/:id', authCheck, checkAddress, (req, res) => {
  const { email } = req.locals;
  const id = req.params.id;
  const newAddress = req.body;

  editAddress(email, id, newAddress);
  res.send({ message: '배송지가 수정되었습니다.' });
});

router.delete('/me/address/:id', authCheck, checkAddress, (req, res) => {
  const { email } = req.locals;
  const id = req.params.id;

  deleteAddress(email, id);
  res.send({ message: '배송지가 삭제되었습니다.' });
});

module.exports = router;
