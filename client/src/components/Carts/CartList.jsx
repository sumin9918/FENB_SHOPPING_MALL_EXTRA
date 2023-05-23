import { useQuery } from '@tanstack/react-query';

import { Stack, Title, useMantineTheme, Group, Text } from '@mantine/core';

import { NoProduct } from 'components/common';
import { cartsQuery } from 'api/query';
import { useMediaQuery } from 'hooks';
import { useTotalCartItems, useTotalPrice } from 'hooks/carts';
import { MEDIAQUERY_WIDTH } from 'constants';
import CartItem from './CartItem';

const CartList = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colors, colorScheme } = useMantineTheme();

  const totalCartItems = useTotalCartItems();
  const totalPrice = useTotalPrice();
  const { data: carts } = useQuery(cartsQuery());

  return (
    <Stack mx="auto" pl="0.8rem" pr={matches ? '5rem' : '0.8rem'} spacing={0} w="100%">
      {matches ? (
        <Title py="0.8rem">장바구니</Title>
      ) : (
        <Stack
          align="center"
          pb="4rem"
          spacing={0}
          sx={{ borderBottom: `1px solid ${colorScheme === 'dark' ? colors.gray[8] : colors.gray[3]}` }}>
          <Title py="0.8rem">장바구니</Title>
          <Group c={colorScheme === 'dark' ? 'gray.5' : 'gray.7'} spacing="0.8rem">
            <Text>{totalCartItems} 개의 제품</Text>
            <Text>l</Text>
            <Text>{totalPrice.toLocaleString('ko-KR')} 원</Text>
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
