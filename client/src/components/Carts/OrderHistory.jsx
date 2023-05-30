import { useNavigate } from 'react-router-dom';

import { Stack, Title, Group, Text, useMantineTheme, Button, Center } from '@mantine/core';

import { MEDIAQUERY_WIDTH, PATH } from '../../constants';
import { useMediaQuery } from '../../hooks';
import { useCountCarts, useTotalPrice } from '../../hooks/carts';

// Link 사용? navigate() 사용?

const OrderHistory = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colors, colorScheme } = useMantineTheme();

  const navigate = useNavigate();
  const countCarts = useCountCarts();
  const totalPrice = useTotalPrice();

  const handleOrderButtonClick = () => navigate(PATH.ORDER);

  return (
    <Stack mb="2.4rem" mx="auto" px="0.8rem" py="0.8rem" spacing={0} w={matches ? '50%' : '100%'}>
      <Title mb="2.4rem" ta={!matches && 'center'}>
        주문 내역
      </Title>
      <Group mb="0.8rem" position="apart" py="0.4rem">
        <Text>상품 금액</Text>
        <Text>{totalPrice.toLocaleString('ko-KR')} 원</Text>
      </Group>
      <Group mb="0.8rem" position="apart" py="0.4rem">
        <Text>배송비</Text>
        <Text>무료</Text>
      </Group>
      <Group
        my="1.2rem"
        position="apart"
        py="2.4rem"
        style={{
          borderBottom: `1px solid ${colorScheme === 'dark' ? colors.gray[8] : colors.gray[3]}`,
          borderTop: `1px solid ${colorScheme === 'dark' ? colors.gray[8] : colors.gray[3]}`,
        }}>
        <Text>총 결제 금액</Text>
        <Text>{totalPrice.toLocaleString('ko-KR')} 원</Text>
      </Group>
      <Center>
        <Button
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          disabled={!countCarts}
          fz="1.6rem"
          h="6rem"
          hw="bold"
          mt="2rem"
          p="1.8rem 2.4rem"
          w={matches ? '100%' : '30rem'}
          sx={{
            borderRadius: '30px',
          }}
          onClick={handleOrderButtonClick}>
          확인
        </Button>
      </Center>
    </Stack>
  );
};

export default OrderHistory;
