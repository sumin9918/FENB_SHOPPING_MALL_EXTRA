import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Button, Container, Stack, Title, useMantineTheme } from '@mantine/core';

import { OrderInfo, OrderProducts } from 'components/OrderComplete';
import { historyQuery } from 'api/query';
import { PATH } from 'constants';

const OrderComplete = () => {
  const { colorScheme } = useMantineTheme();

  const navigate = useNavigate();

  const { data: history } = useQuery(historyQuery());

  const handleMainClick = () => navigate(PATH.MAIN);

  return (
    <Container fz="1.6rem" size="1200px" w="100%">
      <Title p="4.8rem" ta="center">
        결제가 정상적으로 완료되었습니다
      </Title>
      <Stack align="center" justify="center" mih="5rem" px="0.8rem" spacing={0}>
        <OrderInfo history={history} />
        <OrderProducts products={history.products} />
        <Button
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          fz="1.6rem"
          h="6rem"
          hw="bold"
          mt="2rem"
          p="1.8rem 2.4rem"
          w="20rem"
          sx={{
            borderRadius: '30px',
          }}
          onClick={handleMainClick}>
          확인
        </Button>
      </Stack>
    </Container>
  );
};

export default OrderComplete;
