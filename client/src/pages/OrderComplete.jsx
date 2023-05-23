import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Container, Stack, Title, useMantineColorScheme } from '@mantine/core';

import { CustomButton } from 'components';
import { OrderInfo, OrderProducts } from 'components/OrderComplete';
import { historyQuery } from 'api/query';
import { PATH } from 'constants';

const OrderComplete = () => {
  const { data: history } = useQuery(historyQuery());

  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  return (
    <Container fz="1.6rem" size="1200px" w="100%">
      <Title p="4.8rem" ta="center">
        결제가 정상적으로 완료되었습니다
      </Title>
      <Stack align="center" justify="center" mih="5rem" px="0.8rem" spacing={0}>
        <OrderInfo history={history} />
        <OrderProducts products={history.products} />
        <CustomButton color={colorScheme === 'dark' ? 'gray.6' : 'dark'} w="20rem" onClick={() => navigate(PATH.MAIN)}>
          확인
        </CustomButton>
      </Stack>
    </Container>
  );
};

export default OrderComplete;
