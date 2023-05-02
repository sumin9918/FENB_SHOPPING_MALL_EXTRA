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

const addFavorite = (email, product) => {
  favorites = favorites.map(favorite =>
    favorite.email === email ? { ...favorite, products: [product, ...favorite.products] } : favorite
  );
};

const getFavorites = email => favorites.find(favorite => favorite.email === email);

const getFavorite = (email, productId) =>
  favorites.find(favorite => favorite.email === email).products.find(product => product.id === productId);

const removeFavoriteProduct = (email, productId) => {
  favorites = favorites.map(favorite =>
    favorite.email === email
      ? {
          ...favorite,
          products: favorite.products.filter(product => product.id !== productId),
        }
      : favorite
  );
};

module.exports = {
  createUser,
  addFavorite,
  getFavorites,
  getFavorite,
  removeFavoriteProduct,
};
