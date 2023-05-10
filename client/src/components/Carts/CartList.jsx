import { useQuery } from '@tanstack/react-query';
import { Group, Stack, Title, Text, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CartItem from './CartItem';
import NoProduct from '../NoProduct';
import { cartsQuery } from '../../api/query';
import { useTotalCartItems, useTotalPrice } from '../../hooks/carts';

const MEDIAQUERY_WIDTH = 768;

const CartList = () => {
  const { data: carts } = useQuery(cartsQuery());
  const totalCartItems = useTotalCartItems();
  const totalPrice = useTotalPrice();

  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack w={matches ? '66.66666%' : '90%'} pl="0.8rem" pr={matches ? '10rem' : '0.8rem'} mx="auto" spacing={0}>
      {matches ? (
        <Title py="0.8rem">장바구니</Title>
      ) : (
        <Stack
          align="center"
          spacing={0}
          pb="4rem"
          c={colorScheme === 'dark' ? 'gray.5' : 'gray.7'}
          sx={{ borderBottom: `1px solid ${colorScheme === 'dark' ? '#343a40' : '#dee2e6'}` }}>
          <Title py="0.8rem">장바구니</Title>
          <Group spacing="0.8rem">
            <Text>{totalCartItems} 개의 제품</Text>
            <Text>l</Text>
            <Text>{totalPrice.toLocaleString()} 원</Text>
          </Group>
        </Stack>
      )}

      {carts.length ? (
        carts.map(cart => <CartItem key={`${cart.id}-${cart.selectedSize}`} cart={cart} />)
      ) : (
        <NoProduct pageName="장바구니" />
      )}
    </Stack>
  );
};

export default CartList;
