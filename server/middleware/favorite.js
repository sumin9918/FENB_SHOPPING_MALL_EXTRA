const jwt = require('jsonwebtoken');

const users = require('../controllers/users');
const products = require('../controllers/products');

const userFavorite = (req, res, next) => {
  const id = +req.params.id;
  const { favorite } = req.body;
  const accessToken = req.cookies.accessToken;
  const decode = jwt.decode(accessToken);

  users.addFavoriteId(id, favorite, decode);

  next();
};

const productFavorite = (req, res, next) => {
  const id = +req.params.id;
  const { favorite } = req.body;

  products.changeFavorite(id, favorite);

  next();
};

module.exports = [userFavorite, productFavorite];
