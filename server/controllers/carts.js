let carts = [
  {
    email: "test@test.com",
    products: [
      {
        id: 3,

        category: 0,
        color: 3,
        name: "나이키 에어포스",
        price: 89300,
        imgURL: "https://via.placeholder.com/440x440",

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
        name: "울트라 부스트 라이트",
        price: 139000,
        imgURL: "https://via.placeholder.com/440x440",

        selectedSize: 265,
        quantity: 1,
        // stocks: [
        // ...
        // ]
      },
    ],
  },
  {
    email: "test1@test.com",
    products: [
      {
        id: 1,
        selectedSize: 265,
        quantity: 5,
        // stocks: [
        // ...
        // ]
      },
    ],
  },
];

const addCart = ({ email, id, selectedSize, quantity = 1 }) => {
  carts = carts.map((cart) =>
    cart.email === email
      ? {
          ...cart,
          products: [{ id, selectedSize, quantity }, ...cart.products],
        }
      : cart
  );
};

const getCarts = () => carts;

const getUserCart = (email) => carts.find((cart) => cart.email === email);

const getUserCartProduct = (id, products) =>
  products.find((product) => product.id === id);

const changeCart = ({ email, id, payload }) => {
  carts = carts.map((cart) =>
    cart.email === email
      ? {
          ...cart,
          products: cart.products.map((product) =>
            product.id === id ? { ...product, ...payload } : product
          ),
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
  carts = carts.map((cart) =>
    cart.email === email ? { ...cart, products: [] } : cart
  );
};

module.exports = {
  addCart,
  getCarts,
  changeCart,
  removeCart,
  getUserCart,
  getUserCartProduct,
  removeAllCart,
};
