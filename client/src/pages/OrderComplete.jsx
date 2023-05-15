import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Stack, Title, useMantineColorScheme } from '@mantine/core';
import { OrderInfo, OrderProducts } from '../components/OrderComplete';
import { CustomButton } from '../components';
import { historyQuery } from '../api/query';
import { PATH } from '../constants';

const OrderComplete = () => {
  const { data: history } = useQuery(historyQuery());

  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  return (
    <Container size="1200px" w="100%" fz="1.6rem">
      <Title p="4.8rem" sx={{ textAlign: 'center' }}>
        결제가 정상적으로 완료되었습니다
      </Title>
      <Stack mih="5rem" justify="center" align="center" spacing={0} px="0.8rem">
        <OrderInfo history={history} />
        <OrderProducts products={history.products} />
        <CustomButton w="20rem" color={colorScheme === 'dark' ? 'gray.6' : 'dark'} onClick={() => navigate(PATH.MAIN)}>
          확인
        </CustomButton>
      </Stack>
    </Container>
  );
};

export default OrderComplete;
