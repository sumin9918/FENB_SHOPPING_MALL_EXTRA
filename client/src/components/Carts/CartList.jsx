import { useQuery } from '@tanstack/react-query';
import { Group, Stack, Title, Text, useMantineColorScheme } from '@mantine/core';
import CartItem from './CartItem';
import NoProduct from '../NoProduct';
import { cartsQuery } from '../../api/query';
import { useMediaQuery } from '../../hooks';
import { useTotalCartItems, useTotalPrice } from '../../hooks/carts';
import { MEDIAQUERY_WIDTH } from '../../constants';

const CartList = () => {
  const { data: carts } = useQuery(cartsQuery());
  const totalCartItems = useTotalCartItems();
  const totalPrice = useTotalPrice();

  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack
      w="66.66666%"
      pl="0.8rem"
      pr="10rem"
      mx="auto"
      spacing={0}
      sx={{
        '@media (max-width: 768px)': {
          width: '90%',
          paddingRight: '0.8rem',
        },
      }}>
      {matches ? (
        <Title py="0.8rem">장바구니</Title>
      ) : (
        <Stack
          align="center"
          spacing={0}
          pb="4rem"
          sx={{ borderBottom: `1px solid ${colorScheme === 'dark' ? '#343a40' : '#dee2e6'}` }}>
          <Title py="0.8rem">장바구니</Title>
          <Group spacing="0.8rem" c={colorScheme === 'dark' ? 'gray.5' : 'gray.7'}>
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
