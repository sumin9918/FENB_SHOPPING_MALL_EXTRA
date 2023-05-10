import { Stack, Title, Group, Text } from '@mantine/core';
import { useTotalPrice } from '../../hooks/carts';
import CartHistoryItemList from './CartHistoryItemList';

const CartHistory = ({ discount }) => {
  const totalPrice = useTotalPrice();

  const { discountAmount, discountedTotalPrice } = discount;

  return (
    <Stack w="33.33333%" px="0.8rem">
      <Title py="1.2rem">장바구니</Title>
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
      <Group
        position="apart"
        my="1.2rem"
        py="2.4rem"
        style={{ borderBottom: '1px solid rgb(117,117,117)', borderTop: '1px solid rgb(117,117,117)' }}>
        <Text>총 결제 금액</Text>
        <Text>{discountedTotalPrice.toLocaleString()} 원</Text>
      </Group>
      <CartHistoryItemList />
    </Stack>
  );
};

export default CartHistory;
