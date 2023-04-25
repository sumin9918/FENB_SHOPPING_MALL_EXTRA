const jwt = require("jsonwebtoken");
const router = require("express").Router();

const users = require("../controllers/users");
const carts = require("../controllers/carts");
const favorites = require("../controllers/favorites");
const coupons = require("../controllers/coupons");
const { authCheck } = require("../middleware/auth");

router.get("/signout", (req, res) => {
  res.cookie("accessToken", "", { maxAge: 0, httpOnly: true });
  res.send({ isSignIn: false });
});

router.get("/verify", authCheck, (req, res) => {
  res.send({ isSignIn: true });
});

router.post("/signin", (req, res) => {
  // 401 Unauthorized
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(401)
      .send({ message: "사용자 아이디 또는 패스워드가 전달되지 않았습니다." });

  // 401 Unauthorized
  const user = users.confirmUser(email, password);
  if (!user)
    return res.status(401).send({ message: "등록되지 않은 사용자입니다." });

  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.cookie("accessToken", accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7d
    httpOnly: true,
  });

  // 로그인 성공
  res.send({ email, username: user.name });
});

router.post("/signup", (req, res, next) => {
  // 401 Unauthorized
  const { email, name, phone, password, mainAddress, detailAddress, postcode } =
    req.body;
  req.locals = email;

  if (!email || !password || !name || !phone)
    return res
      .status(401)
      .send({ message: "필수 정보가 전달되지 않았습니다." });

  const isDuplicate = users.checkDuplicateEmail(email);

  if (isDuplicate)
    return res.status(400).send({ message: "이메일이 중복입니다." });

  users.createUser({
    email,
    name,
    phone,
    password,
    mainAddress,
    detailAddress,
    postcode,
  });
  carts.createUser(email);
  coupons.createUser(email);
  favorites.createUser(email);

  res.send({ message: "회원가입이 완료되었습니다." });
});

router.post("/signup/email", (req, res) => {
  const { email } = req.body;

  const isDuplicate = users.checkDuplicateEmail(email);

  res.send({ isDuplicate });
});

module.exports = router;
