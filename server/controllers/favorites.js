const defaultFavorite = {
  email: '',
  products: [],
};

let favorites = [
  {
    email: 'test@test.com',
    products: [],
  },
];

const createUser = email => {
  favorites = [...favorites, { ...defaultFavorite, email }];
};

const addFavoriteProduct = ({ email, product }) => {
  favorites = favorites.map(favorite =>
    favorite.email === email ? { ...favorite, products: [product, ...favorite.products] } : favorite
  );
};

const getFavorites = () => favorites;
const getMyFavorites = email => favorites.find(favorite => favorite.email === email);

const removeFavoriteProduct = ({ email, id }) => {
  favorites = favorites.map(favorite =>
    favorite.email === email
      ? {
          ...favorite,
          products: favorite.products.filter(product => product.id !== id),
        }
      : favorite
  );
};

const findUserFavorites = email => favorites.find(favorite => favorite.email === email);

const hasFavorite = ({ email, id }) => {
  const { products } = findUserFavorites(email);

  return products.some(product => product.id === id);
};

module.exports = {
  createUser,
  addFavoriteProduct,
  getMyFavorites,
  getFavorites,
  hasFavorite,
  removeFavoriteProduct,
};
