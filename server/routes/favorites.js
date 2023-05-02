const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { authCheck } = require('../middleware/auth');
const { toggleProductFavorite, getProduct } = require('../controllers/products');
const { addFavorite, removeFavoriteProduct, getFavorites, getFavorite } = require('../controllers/favorites');
const { BRANDS, CATEGORIES, GENDER, COLORS } = require('../constants/products');

router.get('/me', (req, res) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  try {
    const { email } = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    res.send(
      getFavorites(email).products.map(({ id, brand, category, gender, color, ...rest }) => ({
        ...rest,
        id,
        brand: BRANDS[brand],
        category: CATEGORIES[category],
        gender: GENDER[gender],
        color: COLORS[color],
      }))
    );
  } catch (e) {
    return res.send([]);
  }
});

router.post('/me', authCheck, (req, res) => {
  const { email } = req.locals;
  const id = +req.body.id;

  const isFavorite = !!getFavorite(email, id);

  isFavorite ? removeFavoriteProduct(email, id) : addFavorite(email, getProduct(id));
  toggleProductFavorite(id, isFavorite);

  res.send({ message: '위시리스트에 추가되었습니다.' });
});

module.exports = router;
