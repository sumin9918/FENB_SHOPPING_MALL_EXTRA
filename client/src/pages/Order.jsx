import { Container, Title, Group } from '@mantine/core';
import { Payment, CartHistory } from '../components/Order';
import { useCoupon } from '../hooks/order';

const Order = () => {
  const { discount, totalPrice, changeDiscount } = useCoupon();

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
      <Title p="4.8rem" sx={{ textAlign: 'center' }}>
        결제하기
      </Title>
      <Group mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem">
        <Payment changeDiscount={changeDiscount} totalPrice={totalPrice} />
        <CartHistory discount={discount} totalPrice={totalPrice} />
      </Group>
    </Container>
  );
};

export default Order;
