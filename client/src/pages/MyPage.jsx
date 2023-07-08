import { Link, Outlet, useLocation } from 'react-router-dom';

import { Container, Stack, Title, Text, Flex, useMantineTheme } from '@mantine/core';

import { PATH } from 'constants';

const MyPage = () => {
  const { colorScheme } = useMantineTheme();

  const { pathname } = useLocation();

  return (
    <Container c={colorScheme === 'dark' ? 'gray.5' : 'gray.8'} fz="1.6rem" size="150rem" w="100%">
      <Flex align="flex-start" direction="row" justify="center" spacing="1.6rem">
        <Stack maw="30rem" pl="2rem" spacing="2rem" w="100%">
          <Title fz="2.4rem" mb="4.4rem" pb="2rem">
            마이 페이지
          </Title>
          <Link to={PATH.ACCOUNT}>
            <Text
              fw="bold"
              fz="2rem"
              c={
                pathname === PATH.ACCOUNT
                  ? colorScheme === 'dark'
                    ? 'gray.5'
                    : 'gray.9'
                  : colorScheme === 'dark'
                  ? 'gray.7'
                  : 'gray.6'
              }>
              계정 정보
            </Text>
          </Link>
          <Link to={PATH.HISTORY}>
            <Text
              fw="bold"
              fz="2rem"
              c={
                pathname === PATH.HISTORY
                  ? colorScheme === 'dark'
                    ? 'gray.5'
                    : 'gray.9'
                  : colorScheme === 'dark'
                  ? 'gray.7'
                  : 'gray.6'
              }>
              구매 내역
            </Text>
          </Link>
          <Link to={PATH.ADDRESS}>
            <Text
              fw="bold"
              fz="2rem"
              c={
                pathname === PATH.ADDRESS
                  ? colorScheme === 'dark'
                    ? 'gray.5'
                    : 'gray.9'
                  : colorScheme === 'dark'
                  ? 'gray.7'
                  : 'gray.6'
              }>
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
