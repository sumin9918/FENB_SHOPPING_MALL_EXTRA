let carts = [
  {
    email: 'test@test.com',
    products: [
      {
        id: 3,
        selectedSize: 230,
        quantity: 2,
        // stocks: [
        // ...
        // ]
      },
    ],
  },
  {
    email: 'test1@test.com',
    products: [
      {
        id: 1,
        selectedSize: 240,
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
    cart.email === email ? { ...cart, products: [{ id, selectedSize, quantity }, ...cart.products] } : cart
  );
};

const getCarts = () => carts;

const getUserCart = (email) => carts.find((cart) => cart.email === email);

const getUserCartProduct = (id, products) => products.find((product) => product.id === id);

const changeCart = ({ email, id, payload }) => {
  carts = carts.map((cart) =>
    cart.email === email
      ? {
          ...cart,
          products: cart.products.map((product) => (product.id === id ? { ...product, ...payload } : product)),
        }
      : cart
  );
};

const removeCart = ({ email, id }) => {
  carts = carts.map((cart) =>
    cart.email === email ? { ...cart, products: cart.products.filter((product) => product.id !== id) } : cart
  );
};

const removeAllCart = (email) => {
  carts = carts.map((cart) => (cart.email === email ? { ...cart, products: [] } : cart));
};

module.exports = { addCart, getCarts, changeCart, removeCart, getUserCart, getUserCartProduct, removeAllCart };
