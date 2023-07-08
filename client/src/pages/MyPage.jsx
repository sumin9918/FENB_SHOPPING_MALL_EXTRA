import { Link, Outlet, useLocation } from 'react-router-dom';

import { Container, Stack, Title, Text, Flex, Burger, useMantineTheme, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useMediaQuery } from 'hooks';
import { PATH, MEDIAQUERY_WIDTH } from 'constants';

const MyPage = () => {
  const match = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colors, colorScheme } = useMantineTheme();

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Container c={colorScheme === 'dark' ? 'gray.5' : 'gray.8'} fz="1.6rem" size="140rem" w="100%">
      <Flex align="flex-start" direction={match ? 'row' : 'column'} justify="center" spacing="1.6rem">
        {match ? (
          <Stack maw="25rem" pl="2rem" spacing="2rem" w="100%">
            <Title fz="2.4rem" mb="4.4rem" pb="2rem">
              마이 페이지
            </Title>
            <NavList />
          </Stack>
        ) : (
          <Group align="flex-start" mb="2rem" position="apart" px="1.2rem" py="1.2rem" w="100%">
            {opened ? (
              <Stack maw="25rem" spacing="0.8rem">
                <Title fz="2.4rem" mb="0.8rem" pb="2rem" sx={{ borderBottom: '2px solid #ddd' }}>
                  마이 페이지
                </Title>
                <NavList />
              </Stack>
            ) : (
              <div />
            )}
            <Burger
              color={colorScheme === 'dark' ? colors.gray[5] : colors.gray[8]}
              opened={opened}
              size="2.8rem"
              onClick={toggle}
            />
          </Group>
        )}

        <Outlet />
      </Flex>
    </Container>
  );
};

const NavList = () => {
  const { colorScheme } = useMantineTheme();

  const { pathname } = useLocation();

  return (
    <>
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
    </>
  );
};

export default MyPage;
