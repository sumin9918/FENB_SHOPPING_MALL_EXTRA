import { createHashRouter, RouterProvider } from 'react-router-dom';
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
import { PATH } from './constants';
import {
  carouselLoader,
  cartsLoader,
  categoryLoader,
  favoritesLoader,
  filteredProductsLoader,
  productsLoader,
} from './api/loader';
import PrivateRoute from './components/PrivateRoute';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    loader: async () => ({
      products: await productsLoader(),
      categories: await categoryLoader(),
    }),
    children: [
      {
        path: PATH.MAIN,
        loader: carouselLoader,
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
        element: <PrivateRoute redirectTo={PATH.SIGNIN} element={<Cart />} />,
        errorElement: <PrivateRoute redirectTo={PATH.SIGNIN} element={<Cart />} />,
      },
      {
        path: PATH.WISHLIST,
        loader: favoritesLoader,
        element: <PrivateRoute redirectTo={PATH.SIGNIN} element={<WishList />} />,
        errorElement: <PrivateRoute redirectTo={PATH.SIGNIN} element={<WishList />} />,
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
        // loader: user(+address) 데이터 prefetch
        element: <PrivateRoute redirectTo={PATH.SIGNIN} element={<Order />} />,
      },
      {
        path: PATH.ORDER_COMPLETE,
        element: <PrivateRoute redirectTo={PATH.SIGNIN} element={<OrderComplete />} />,
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
