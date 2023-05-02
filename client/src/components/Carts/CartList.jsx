import { useQuery } from '@tanstack/react-query';
import { Stack, Title } from '@mantine/core';
import CartItem from './CartItem';
import NoProduct from '../NoProduct';
import { cartsQuery } from '../../api/query';

const CartList = () => {
  const { data: carts } = useQuery(cartsQuery());

  return (
    <Stack w="66.66667%" pl="0.8rem" pr="10rem" spacing={0} fluid="true">
      <Title py="0.8rem">장바구니</Title>
      {carts.length ? (
        carts.map(cart => <CartItem key={`${cart.id}-${cart.selectedSize}`} cart={cart} />)
      ) : (
        <NoProduct pageName="장바구니" />
      )}
    </Stack>
  );
};

export default CartList;
