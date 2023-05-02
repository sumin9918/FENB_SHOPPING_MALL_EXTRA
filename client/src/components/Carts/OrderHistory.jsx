import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button, Stack, Title, Group, Text, useMantineColorScheme } from '@mantine/core';
import styled from '@emotion/styled';
import { cartsQuery } from '../../api/query';
import { PATH } from '../../constants';

const CustomButton = styled(Button)`
  display: block;
  margin-top: 2rem;
  padding: 1.8rem 2.4rem;
  border-radius: 30px;
  height: 6rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 'bold';

  :hover {
    background-color: #228be6;
  }
`;

const OrderHistory = () => {
  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  const { data: countCarts } = useQuery(cartsQuery({ select: carts => carts.length }));
  const { data: totalPrice } = useQuery(
    cartsQuery({
      select: carts => carts.reduce((acc, cart) => acc + cart.quantity * cart.price, 0),
    })
  );

  return (
    <Stack w="33.33333%" px="0.8rem" py="0.8rem" mb="2.4rem" spacing={0}>
      <Title mb="2.4rem">주문 내역</Title>
      <div>
        <Group position="apart" mb="0.8rem" py="0.4rem">
          <Text>상품 금액</Text>
          <Text>{totalPrice.toLocaleString()} 원</Text>
        </Group>
        <Group position="apart" mb="0.8rem" py="0.4rem">
          <Text>배송비</Text>
          <Text>무료</Text>
        </Group>
      </div>
      <div>
        <Group
          position="apart"
          my="1.2rem"
          py="2.4rem"
          style={{ borderBottom: '1px solid rgb(117,117,117)', borderTop: '1px solid rgb(117,117,117)' }}>
          <Text>총 결제 금액</Text>
          <Text>{totalPrice.toLocaleString()} 원</Text>
        </Group>
      </div>
      <CustomButton
        disabled={!countCarts}
        color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
        onClick={() => navigate(PATH.ORDER)}>
        주문결제
      </CustomButton>
    </Stack>
  );
};

export default OrderHistory;
