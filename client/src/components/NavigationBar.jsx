import { Navbar, Flex, Image, Tabs, Autocomplete, ActionIcon, Group, Stack } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';
import { SlHandbag } from 'react-icons/sl';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { TbMoonFilled } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { PATH } from '../constants';

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
  const { pathname } = useLocation();

  return (
    <Navbar.Section pt="xs">
      <Flex gap="lg" align="center" justify="flex-end" fz="1.3rem" color="#222222">
        {topList.map(({ kr, en }) => (
          <Link key={en} to={PATH[en.toUpperCase()]} state={pathname}>
            {kr}
          </Link>
        ))}
        <ActionIcon size="xl">
          <TbMoonFilled size="2.8rem" color="black" />
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

const BottomList = () => (
  <Navbar.Section grow mt="md" w="1200px" maw="1200px" m="auto" h="auto">
    <Flex justify="space-between">
      <Tabs
        color="dark"
        sx={{
          'button[data-active]': {
            fontWeight: 'bold',
            borderWidth: '.2rem',
          },
        }}>
        <Tabs.List sx={{ border: 'none' }}>
          {categoryList.map(({ kr, en }) => (
            <Tabs.Tab key={en} value={en} fz="1.6rem">
              <Link to={PATH.CATEGORY}>{kr}</Link>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </Flex>
  </Navbar.Section>
);

const NavigationBar = () => (
  <Navbar height="auto" position={{ top: 0, left: 0, border: '1px solid #ced4da' }}>
    <Group position="apart" spacing={0} w="120rem" m="auto">
      <Link to={PATH.MAIN}>
        <Image width="10rem" pl="1rem" src="images/logo/main.svg" alt="486" />
      </Link>
      <Stack>
        <TopList />
        <MainList />
      </Stack>
    </Group>
    <BottomList />
  </Navbar>
);

export default NavigationBar;
