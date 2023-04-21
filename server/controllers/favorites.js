let favorites = [
  {
    email: 'test@test.com',
    products: [
      {
        id: 1,
        category: 0,
        color: 1,
        name: '울트라 부스트 라이트',
        price: 2290000,
        imgURL: 'https://via.placeholder.com/440x440',
        selectedSize: 230,
        quantity: 2,
      },
    ],
  },
];

const addFavoriteProduct = ({ email, product }) => {
  favorites = favorites.map((favorite) =>
    favorite.email === email ? { ...favorite, products: [product, ...favorite.products] } : favorite
  );
};

const getFavorites = () => favorites;
const getMyFavorites = (email) => favorites.find((favorite) => favorite.email === email);

const removeFavoriteProduct = ({ email, id }) => {
  favorites = favorites.map((favorite) =>
    favorite.email === email
      ? { ...favorite, products: favorite.products.filter((product) => product.id !== id) }
      : favorite
  );
};

const findUserFavorites = (email) => favorites.find((favorite) => favorite.email === email);

const hasFavorite = ({ email, id }) => {
  const { products } = findUserFavorites(email);

  return products.some((product) => product.id === id);
};

module.exports = { addFavoriteProduct, getMyFavorites, getFavorites, hasFavorite, removeFavoriteProduct };
