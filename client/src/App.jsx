import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { Loader } from '@mantine/core';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
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

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
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
        path: `${PATH.PRODUCTS}/:id`,
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
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Suspense
      fallback={
        <Loader
          size="6rem"
          color="pink"
          variant="dots"
          pos="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: 'translate3d(-3rem, -3rem, 0)',
          }}
        />
      }>
      <ErrorBoundary fallbackRender={NotFound} onReset={reset}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
