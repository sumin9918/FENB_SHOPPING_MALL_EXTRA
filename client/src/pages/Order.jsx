import { Container, Title, Group, Stack, Text, useMantineTheme, Flex } from '@mantine/core';

import { Payment, CartHistory } from 'components/Order';
import { useMediaQuery } from 'hooks';
import { useTotalCartItems, useTotalPrice } from 'hooks/carts';
import { useCoupon } from 'hooks/order';
import { MEDIAQUERY_WIDTH } from 'constants';

const Order = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineTheme();

  const totalCartItems = useTotalCartItems();
  const totalPrice = useTotalPrice();

  const { discount, changeDiscount } = useCoupon(totalPrice);

  return (
    <Container fz="1.6rem" size="1200px">
      <Stack align="center" pb="4rem" spacing={0}>
        <Title fz="2.4rem" py="0.8rem">
          결제하기
        </Title>
        {!matches && (
          <Group c={colorScheme === 'dark' ? 'gray.5' : 'gray.7'} spacing="0.8rem">
            <Text>{totalCartItems} 개의 제품</Text>
            <Text>/</Text>
            <Text>{totalPrice.toLocaleString('ko-KR')} 원</Text>
          </Group>
        )}
      </Stack>

      <Flex direction={matches ? 'row' : 'column-reverse'} mih="5rem" spacing={0}>
        <Payment changeDiscount={changeDiscount} />
        <CartHistory discount={discount} />
      </Flex>
    </Container>
  );
};

export default Order;
