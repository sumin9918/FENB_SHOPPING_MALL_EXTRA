import { useNavigate } from 'react-router-dom';
import { Stack, Title, Group, Text, useMantineColorScheme } from '@mantine/core';
import { PATH } from '../../constants';
import CustomButton from '../CustomButton';
import { useCountCarts, useTotalPrice } from '../../hooks/carts';

const OrderHistory = () => {
  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  const countCarts = useCountCarts();
  const totalPrice = useTotalPrice();

  return (
    <Stack
      w="33.333333%"
      px="0.8rem"
      py="0.8rem"
      mb="2.4rem"
      mx="auto"
      spacing={0}
      sx={{
        '@media (max-width: 768px)': {
          width: '90%',
        },
      }}>
      <Title
        mb="2.4rem"
        sx={{
          '@media (max-width: 768px)': {
            textAlign: 'center',
          },
        }}>
        주문 내역
      </Title>
      <Group position="apart" mb="0.8rem" py="0.4rem">
        <Text>상품 금액</Text>
        <Text>{totalPrice.toLocaleString()} 원</Text>
      </Group>
      <Group position="apart" mb="0.8rem" py="0.4rem">
        <Text>배송비</Text>
        <Text>무료</Text>
      </Group>
      <Group
        position="apart"
        my="1.2rem"
        py="2.4rem"
        style={{
          borderBottom: `1px solid ${colorScheme === 'dark' ? '#343a40' : '#dee2e6'}`,
          borderTop: `1px solid ${colorScheme === 'dark' ? '#343a40' : '#dee2e6'}`,
        }}>
        <Text>총 결제 금액</Text>
        <Text>{totalPrice.toLocaleString()} 원</Text>
      </Group>
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
