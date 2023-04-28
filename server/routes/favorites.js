const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { toggleProductFavorite, findProduct } = require('../controllers/products');
const { addFavoriteProduct, removeFavoriteProduct, hasFavorite, getMyFavorites } = require('../controllers/favorites');
const { authCheck } = require('../middleware/auth');
const { BRANDS, CATEGORIES, GENDER, COLORS } = require('../constants/products');

router.get('/me', (req, res) => {
  const accessToken = req.headers.authorization || req.cookies.accessToken;

  try {
    const { email } = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    res.send(
      getMyFavorites(email).products.map(({ id, brand, category, gender, color, ...rest }) => ({
        ...rest,
        id,
        brand: BRANDS[brand],
        category: CATEGORIES[category],
        gender: GENDER[gender],
        color: COLORS[color],
      }))
    );
  } catch (e) {
    return res.send(null);
  }
});

router.post('/me', authCheck, (req, res) => {
  const { email } = jwt.decode(req.cookies.accessToken);
  const id = +req.body.id;

  const isFavorite = hasFavorite({ email, id });

  if (isFavorite) removeFavoriteProduct({ email, id });
  else {
    const product = findProduct(id);
    addFavoriteProduct({ product, email });
  }
  toggleProductFavorite(id, isFavorite);
});

module.exports = router;
