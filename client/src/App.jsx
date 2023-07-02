import { createHashRouter, RouterProvider } from 'react-router-dom';

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
  userLoader,
} from './api/loader';
import PrivateRoute from './components/PrivateRoute';
import { PATH } from './constants';
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
  MyPage,
  History,
  Account,
  Address,
  Withdrawal,
  HistoryDetail,
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
        path: PATH.MYPAGE,
        element: <PrivateRoute element={<MyPage />} redirectTo={PATH.SIGNIN} />,
        children: [
          {
            path: PATH.ACCOUNT,
            loader: userLoader,
            element: <PrivateRoute element={<Account />} redirectTo={PATH.SIGNIN} />,
          },
          {
            path: PATH.WITHDRAWAL,
            element: <PrivateRoute element={<Withdrawal />} redirectTo={PATH.SIGNIN} />,
          },
          {
            path: PATH.ADDRESS,
            loader: addressesLoader,
            element: <PrivateRoute element={<Address />} redirectTo={PATH.SIGNIN} />,
          },
          {
            path: PATH.HISTORY,
            loader: historyLoader,
            element: <PrivateRoute element={<History />} redirectTo={PATH.SIGNIN} />,
          },
          {
            path: `${PATH.HISTORY}/:id`,
            loader: historyLoader,
            element: <PrivateRoute element={<HistoryDetail />} redirectTo={PATH.SIGNIN} />,
          },
        ],
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
