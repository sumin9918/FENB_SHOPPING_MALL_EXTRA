const defaultCart = {
  email: '',
  products: [],
};

let carts = [
  {
    email: 'test@test.com',
    products: [
      {
        id: 3,

        category: 0,
        color: 3,
        name: '나이키 에어포스',
        price: 89300,
        imgURL: 'https://via.placeholder.com/440x440',

        selectedSize: 230,
        quantity: 2,
        // stocks: [
        // ...
        // ]
      },
      {
        id: 1,

        category: 0,
        color: 1,
        name: '울트라 부스트 라이트',
        price: 139000,
        imgURL: 'https://via.placeholder.com/440x440',

        selectedSize: 265,
        quantity: 1,
        // stocks: [
        // ...
        // ]
      },
    ],
  },
];

const createUser = (email) => {
  carts = [...carts, { ...defaultCart, email }];
};

const addCart = (newProduct) => {
  carts = carts.map((cart) =>
    cart.email === email ? { ...cart, products: [{ ...newProduct }, ...cart.products] } : cart
  );
};

const getCarts = () => carts;

const getUserCart = (email) => carts.find((cart) => cart.email === email);

const getUserCartProduct = (id, products) => products.find((product) => product.id === id);

const getUserCartSelectProductStock = (products, id) =>
  products.reduce(
    (acc, cur) => {
      if (cur.id === id) {
        acc.selectedSize = cur.selectedSize;
        acc.quantity += cur.quantity;
      }
      return acc;
    },
    { selectedSize: null, quantity: 0 }
  );

const changeCart = ({ email, id, quantity }) => {
  carts = carts.map((cart) =>
    cart.email === email
      ? {
          ...cart,
          products: cart.products.map((product) => (product.id === id ? { ...product, quantity } : product)),
        }
      : cart
  );
};

const removeCart = ({ email, id }) => {
  carts = carts.map((cart) =>
    cart.email === email
      ? {
          ...cart,
          products: cart.products.filter((product) => product.id !== id),
        }
      : cart
  );
};

const removeAllCart = (email) => {
  carts = carts.map((cart) => (cart.email === email ? { ...cart, products: [] } : cart));
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
