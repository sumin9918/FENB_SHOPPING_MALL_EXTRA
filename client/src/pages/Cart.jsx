import { Container, Group, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { CartList, OrderHistory } from '../components/Carts';

const MEDIAQUERY_WIDTH = 768;

const Cart = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
      {matches ? (
        <Group mih="5rem" justify="center" align="flex-start" spacing={0}>
          <CartList />
          <OrderHistory />
        </Group>
      ) : (
        <Stack justify="center" align="flex-start" spacing="6rem">
          <CartList />
          <OrderHistory />
        </Stack>
      )}
    </Container>
  );
};

export default Cart;
