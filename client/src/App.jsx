import { createHashRouter, RouterProvider } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import {
  slidesLoader,
  cartsLoader,
  couponsLoader,
  favoritesLoader,
  filteredProductsLoader,
  historyLoader,
  pageProductsLoader,
  productsLoader,
  addressesLoader,
} from 'api/loader';
import { PATH } from 'constants';
import {
  Root,
  Cart,
  Category,
  Main,
  Order,
  OrderComplete,
  Products,
  SignIn,
  SignUp,
  WishList,
  NotFound,
} from './pages';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    loader: productsLoader,
    children: [
      {
        path: PATH.MAIN,
        loader: async () => ({
          slides: await slidesLoader(),
          pageProducts: await pageProductsLoader(),
        }),
        element: <Main />,
      },
      {
        path: PATH.SIGNIN,
        element: <SignIn />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignUp />,
      },
      {
        path: PATH.CART,
        loader: cartsLoader,
        element: <PrivateRoute element={<Cart />} redirectTo={PATH.SIGNIN} />,
        errorElement: <PrivateRoute element={<Cart />} redirectTo={PATH.SIGNIN} />,
      },
      {
        path: PATH.WISHLIST,
        loader: favoritesLoader,
        element: <PrivateRoute element={<WishList />} redirectTo={PATH.SIGNIN} />,
        errorElement: <PrivateRoute element={<WishList />} redirectTo={PATH.SIGNIN} />,
      },
      {
        path: PATH.CATEGORY,
        loader: filteredProductsLoader,
        element: <Category />,
      },
      {
        path: `${PATH.PRODUCTS}/:id`,
        loader: favoritesLoader,
        element: <Products />,
      },
      {
        path: PATH.ORDER,
        loader: async () => ({
          addresses: await addressesLoader(),
          carts: await cartsLoader(),
          coupons: await couponsLoader(),
        }),
        element: <PrivateRoute element={<Order />} redirectTo={PATH.SIGNIN} />,
      },
      {
        path: PATH.ORDER_COMPLETE,
        loader: historyLoader,
        element: <PrivateRoute element={<OrderComplete />} redirectTo={PATH.SIGNIN} />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
