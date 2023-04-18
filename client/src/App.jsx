import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Cart, Category, Main, Order, OrderComplete, Products, SignIn, SignUp, WishList } from './pages';
import { PATH } from './constants';

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
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
    element: <Cart />,
  },
  {
    path: PATH.WISHLIST,
    element: <WishList />,
  },
  {
    path: PATH.CATEGORY,
    element: <Category />,
  },
  {
    path: PATH.PRODUCTS,
    element: <Products />,
  },
  {
    path: PATH.ORDER,
    element: <Order />,
  },
  {
    path: PATH.ORDER_COMPLETE,
    element: <OrderComplete />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
