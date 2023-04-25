import {
  useMantineColorScheme,
  Navbar,
  Flex,
  Image,
  Tabs,
  Autocomplete,
  ActionIcon,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { BiSearch } from 'react-icons/bi';
import { SlHandbag } from 'react-icons/sl';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { PATH } from '../constants';
import { getUserInfo, signOut } from '../api';

const categoryList = [
  { kr: '운동화', en: 'sneakers' },
  { kr: '샌달', en: 'sandal' },
  { kr: '슬리퍼', en: 'slipper' },
  { kr: '런닝화', en: 'running' },
  { kr: '구두', en: 'boots' },
  { kr: '기타', en: 'etc' },
];

const topList = [
  { kr: '회원가입', en: 'signup' },
  { kr: '로그인', en: 'signin' },
];

const TopList = () => {
  // KKW darkmode Test
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { data, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
  });
  const { pathname } = useLocation();

  const handleSignOutClick = async () => {
    await signOut();
    await refetch();
  };

  return (
    <Navbar.Section pt="xs">
      <Flex gap="lg" align="center" justify="flex-end" fz="1.3rem" color="#222222">
        {data.email ? (
          <>
            <Text onClick={handleSignOutClick}>로그아웃</Text>
            <Text>{data.name}님 환영합니다.</Text>
          </>
        ) : (
          topList.map(({ kr, en }) => (
            <Link key={en} to={PATH[en.toUpperCase()]} state={pathname}>
              {kr}
            </Link>
          ))
        )}
        <ActionIcon
          size="xl"
          onClick={() => toggleColorScheme()}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[6],
          })}>
          {colorScheme === 'dark' ? <TbSunFilled size="2.8rem" /> : <TbMoonFilled size="2.8rem" />}
        </ActionIcon>
      </Flex>
    </Navbar.Section>
  );
};

const MainList = () => {
  const { pathname } = useLocation();

  return (
    <Navbar.Section>
      <Flex justify="flex-end" align="center" gap="xl">
        <Autocomplete
          size="xl"
          icon={<BiSearch size="2rem" />}
          placeholder="제조사명, 상품명"
          data={['서버데이터', '넣을', '예정', '입니다.']}
          radius="xl"
        />
        <Link to={PATH.WISHLIST} state={pathname}>
          <ActionIcon size="xl">
            <BsFillSuitHeartFill size="2.8rem" color="tomato" />
          </ActionIcon>
        </Link>
        <Link to={PATH.CART} state={pathname}>
          <ActionIcon size="xl">
            <SlHandbag size="2.8rem" />
          </ActionIcon>
        </Link>
      </Flex>
    </Navbar.Section>
  );
};

const BottomList = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Navbar.Section grow mt="md" w="1200px" maw="1200px" m="auto" h="auto">
      <Flex justify="space-between">
        <Tabs
          color={colorScheme === 'dark' ? 'gray.0' : 'dark'}
          sx={{
            'button[data-active]': {
              fontWeight: 'bold',
              borderWidth: '.2rem',
            },
          }}>
          <Tabs.List sx={{ border: 'none' }}>
            {categoryList.map(({ kr, en }) => (
              <Link to={PATH.CATEGORY} key={en}>
                <Tabs.Tab value={en} fz="1.6rem">
                  {kr}
                </Tabs.Tab>
              </Link>
            ))}
          </Tabs.List>
        </Tabs>
      </Flex>
    </Navbar.Section>
  );
};

const NavigationBar = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Navbar height="auto" position={{ top: 0, left: 0, borderBottom: '1px solid #ced4da' }}>
      <Group position="apart" spacing={0} w="120rem" m="auto">
        <Link to={PATH.MAIN}>
          {colorScheme === 'dark' ? (
            <Image width="10rem" pl="1rem" src="images/logo/darkmodeMainLogo.svg" alt="486" />
          ) : (
            <Image width="10rem" pl="1rem" src="images/logo/main.svg" alt="486" />
          )}
        </Link>
        <Stack>
          <TopList />
          <MainList />
        </Stack>
      </Group>
      <BottomList />
    </Navbar>
  );
};

export default NavigationBar;
