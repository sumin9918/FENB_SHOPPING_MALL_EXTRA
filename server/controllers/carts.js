const defaultCart = {
  email: '',
  products: [],
};

let carts = [
  {
    email: 'test@test.com',
    products: [],
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

const changeCart = ({ email, id, selectedSize, quantity }) => {
  carts = carts.map(cart =>
    cart.email === email
      ? {
          ...cart,
          products: cart.products.map(product =>
            product.id === id && product.selectedSize === selectedSize ? { ...product, quantity } : product
          ),
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
