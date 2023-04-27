const defaultCart = {
  email: '',
  products: [],
};

let carts = [
  {
    email: 'test@test.com',
    products: [
      {
        selectedSize: 265,
        quantity: 1,
        id: 1,
        favorites: 123,
        brand: 1,
        category: 0,
        gender: 0,
        name: '울트라 부스트 라이트1',
        price: 229000,
        color: 1,
        imgURL: 'https://via.placeholder.com/440x440',
        description:
          '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
        dateOfManufacture: '2022-12-01T00:00:00.000Z',
        features: {
          emphasize: '울트라다!',
          character: '신제품',
        },
      },
      {
        selectedSize: 230,
        quantity: 1,
        id: 3,
        favorites: 66,
        brand: 1,
        category: 0,
        gender: 0,
        name: '울트라 부스트 라이트3',
        price: 229000,
        color: 3,
        imgURL: 'https://via.placeholder.com/440x440',
        description:
          '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
        dateOfManufacture: '2020-12-01T00:00:00.000Z',
        features: {
          emphasize: '경재님',
          character: '멋져',
        },
      },
    ],
  },
];

const createUser = email => {
  carts = [...carts, { ...defaultCart, email }];
};

const addCart = ({ email, ...newProduct }) => {
  carts = carts.map(cart =>
    cart.email === email ? { ...cart, products: [{ ...newProduct }, ...cart.products] } : cart
  );
};

const getCarts = () => carts;

const getUserCart = email => carts.find(cart => cart.email === email);

const getUserCartProduct = (id, products) => products.find(product => product.id === id);

const getUserCartSelectProductStock = (products, id, selectedSize) =>
  products.reduce(
    (acc, cur) => {
      if (cur.id === id && cur.selectedSize === selectedSize) acc.quantity += cur.quantity;
      return acc;
    },
    { selectedSize, quantity: 0 }
  );

const changeCart = ({ email, id, quantity }) => {
  carts = carts.map(cart =>
    cart.email === email
      ? {
          ...cart,
          products: cart.products.map(product => (product.id === id ? { ...product, quantity } : product)),
        }
      : cart
  );
};

const removeCart = ({ email, id }) => {
  carts = carts.map(cart =>
    cart.email === email
      ? {
          ...cart,
          products: cart.products.filter(product => product.id !== id),
        }
      : cart
  );
};

const removeAllCart = email => {
  carts = carts.map(cart => (cart.email === email ? { ...cart, products: [] } : cart));
};

module.exports = {
  createUser,
  addCart,
  getCarts,
  changeCart,
  removeCart,
  getUserCart,
  getUserCartProduct,
  removeAllCart,
  getUserCartSelectProductStock,
};
