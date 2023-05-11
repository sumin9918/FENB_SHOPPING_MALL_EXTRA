import { Container, Title, Group, Stack, Text, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Payment, CartHistory, ResponsiveCartHistory } from '../components/Order';
import { useCoupon } from '../hooks/order';
import { useTotalCartItems, useTotalPrice } from '../hooks/carts';

const MEDIAQUERY_WIDTH = 768;

const Order = () => {
  const totalCartItems = useTotalCartItems();
  const totalPrice = useTotalPrice();

  const { discount, changeDiscount } = useCoupon(totalPrice);

  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineColorScheme();

  console.log('matches : ', matches);

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
      {matches ? (
        <Title fz="2.4rem" p="4.8rem" pt="2.4rem" sx={{ textAlign: 'center' }}>
          결제하기
        </Title>
      ) : (
        <Stack align="center" spacing={0} pb="4rem">
          <Title py="0.8rem">결제하기</Title>
          <Group spacing="0.8rem" c={colorScheme === 'dark' ? 'gray.5' : 'gray.7'}>
            <Text>{totalCartItems} 개의 제품</Text>
            <Text>l</Text>
            <Text>{totalPrice.toLocaleString()} 원</Text>
          </Group>
        </Stack>
      )}
      {matches ? (
        <Group mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem">
          <Payment changeDiscount={changeDiscount} />
          <CartHistory discount={discount} />
        </Group>
      ) : (
        <Stack justify="center" align="flex-start" spacing={0} px="0.8rem">
          <ResponsiveCartHistory discount={discount} />
          <Payment changeDiscount={changeDiscount} />
        </Stack>
      )}
    </Container>
  );
};

export default Order;
