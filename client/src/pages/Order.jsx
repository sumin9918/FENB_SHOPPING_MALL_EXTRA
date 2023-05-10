import { Container, Title, Group } from '@mantine/core';
import { Payment, CartHistory } from '../components/Order';
import { useCoupon } from '../hooks/order';
import { useTotalPrice } from '../hooks/carts';

const Order = () => {
  const totalPrice = useTotalPrice();

  const { discount, changeDiscount } = useCoupon(totalPrice);

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
      <Title fz="2.4rem" p="4.8rem" pt="2.4rem" sx={{ textAlign: 'center' }}>
        결제하기
      </Title>
      <Group mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem">
        <Payment changeDiscount={changeDiscount} />
        <CartHistory discount={discount} />
      </Group>
    </Container>
  );
};

export default Order;
