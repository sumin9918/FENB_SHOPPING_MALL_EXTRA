import { Link, Outlet, useLocation } from 'react-router-dom';

import { Container, Stack, Title, Text, Flex } from '@mantine/core';

import { PATH } from 'constants';

const MyPage = () => {
  const { pathname } = useLocation();

  return (
    <Container c="gray.8" fz="1.6rem" size="150rem" w="100%">
      <Flex align="flex-start" direction="row" justify="center" spacing="1.6rem">
        <Stack maw="30rem" pl="2rem" spacing="2rem" w="100%">
          <Title fz="2.4rem" mb="4.4rem" pb="2rem">
            마이 페이지
          </Title>
          <Link to={PATH.ACCOUNT}>
            <Text c={pathname === PATH.ACCOUNT ? 'gray.9' : 'gray.6'} fw="bold" fz="2rem">
              계정 정보
            </Text>
          </Link>
          <Link to={PATH.HISTORY}>
            <Text c={pathname === PATH.HISTORY ? 'gray.9' : 'gray.6'} fw="bold" fz="2rem">
              구매 내역
            </Text>
          </Link>
          <Link to={PATH.ADDRESS}>
            <Text c={pathname === PATH.ADDRESS ? 'gray.9' : 'gray.6'} fw="bold" fz="2rem">
              배송지
            </Text>
          </Link>
        </Stack>
        <Outlet />
      </Flex>
    </Container>
  );
};

export default MyPage;
