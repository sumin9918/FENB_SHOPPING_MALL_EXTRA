import { Container, Group } from '@mantine/core';
import { CartList, OrderHistory } from '../components/Carts';

const Cart = () => (
  <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
    <Group mih="5rem" justify="center" align="flex-start" spacing={0}>
      <CartList />
      <OrderHistory />
    </Group>
  </Container>
);

export default Cart;
