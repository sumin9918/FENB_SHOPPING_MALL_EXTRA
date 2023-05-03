import { Stack, Title, Group, Text, useMantineColorScheme } from '@mantine/core';
import CartHistoryItemList from './CartHistoryItemList';

const CartHistory = ({ discount, totalPrice }) => {
  const { colorScheme } = useMantineColorScheme();

  const { discountAmount, discountedTotalPrice } = discount;

  return (
    <Stack w="33.33333%" px="0.8rem" c={colorScheme === 'dark' ? 'gray.6' : 'dark'}>
      <Title>장바구니</Title>
      <Group position="apart">
        <Text>상품 금액</Text>
        <Text>{totalPrice.toLocaleString()} 원</Text>
      </Group>
      <Group position="apart">
        <Text>쿠폰 할인액</Text>
        <Text>{discountAmount.toLocaleString()} 원</Text>
      </Group>
      <Group position="apart">
        <Text>배송비</Text>
        <Text>0 원</Text>
      </Group>
      <Group position="apart">
        <Text>총 결제 금액</Text>
        <Text>{discountedTotalPrice.toLocaleString()} 원</Text>
      </Group>
      <CartHistoryItemList />
    </Stack>
  );
};

export default CartHistory;
