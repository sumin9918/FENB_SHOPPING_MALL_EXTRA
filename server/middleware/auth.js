const jwt = require('jsonwebtoken');
const { hasUser } = require('../controllers/users');

const authCheck = (req, res, next) => {
  /**
   * 토큰이 리퀘스트의 Authorization 헤더를 통해 전달되면 req.headers.authorization으로 전달받고
   * 토큰이 쿠키를 통해 전달되면 req.cookies.accessToken으로 전달받는다.
   */
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    next();
  } catch (e) {
    return res.redirect('/auth/signin');
  }
};

const signin = (req, res, next) => {
  if (!email || !password) return res.status(401).send({ error: '사용자 아이디 또는 패스워드가 전달되지 않았습니다.' });

  // 401 Unauthorized
  const user = hasUser(email, password);
  if (!user) return res.status(401).send({ error: '등록되지 않은 사용자입니다.' });

  const accessToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1d',
  });

  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7d
    httpOnly: true,
  });

  // 로그인 성공
  next();
};

module.exports = { authCheck, signin };
