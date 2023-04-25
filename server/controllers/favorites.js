const defaultFavorite = {
  email: '',
  products: [],
};

let favorites = [
  {
    email: 'test@test.com',
    products: [
      {
        id: 1,
        favorites: 123,
        brand: 1,
        category: 0,
        gender: 0,
        name: '울트라 부스트 라이트',
        price: 229000,
        color: 1,
        imgURL: 'https://via.placeholder.com/440x440',
        description:
          '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
        dateOfManufacture: new Date('2022-12'),
        features: { emphasize: '울트라다!', character: '신제품' },
      },
    ],
  },
];

const createUser = (email) => {
  favorites = [...favorites, { ...defaultFavorite, email }];
};

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

module.exports = { createUser, addFavoriteProduct, getMyFavorites, getFavorites, hasFavorite, removeFavoriteProduct };
