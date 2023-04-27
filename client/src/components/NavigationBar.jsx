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
import { useRecoilState } from 'recoil';
import { forwardRef, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDebouncedValue } from '@mantine/hooks';
import { PATH } from '../constants';
import { signOut } from '../api';
import { categoryQuery, productsQuery } from '../api/loader';
import { userState } from '../recoil/atoms';
import { authQueryKey } from '../constants/queryKey';

const topList = [
  { kr: '회원가입', en: 'signup' },
  { kr: '로그인', en: 'signin' },
];

const TopList = () => {
  const [user, setUser] = useRecoilState(userState);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleSignOutClick = async () => {
    await signOut();
    queryClient.removeQueries(authQueryKey);
    setUser(null);
    navigate(PATH.MAIN);
  };

  return (
    <Navbar.Section pt="xs">
      <Flex gap="lg" align="center" justify="flex-end" fz="1.3rem" color="#222222">
        {user?.email ? (
          <>
            <Text onClick={handleSignOutClick} sx={{ cursor: 'pointer' }}>
              로그아웃
            </Text>
            <Text>{user?.username}님 환영합니다.</Text>
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

const AutoCompleteItem = forwardRef(({ value, id, onMouseDown, ...rest }, ref) => {
  const navigate = useNavigate();

  const handleMouseDown = e => {
    onMouseDown(e);
    navigate(`${PATH.PRODUCTS}/${id}`, { state: id });
  };

  return (
    <Text ref={ref} onMouseDown={handleMouseDown} value={value} {...rest}>
      {value}
    </Text>
  );
});

const MainList = () => {
  const [filter, setFilter] = useState('');
  const [debounced] = useDebouncedValue(filter, 200);
  const { data: products } = useQuery(productsQuery());
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dropDownProducts = products.map(({ id, name, brand }) => ({ id, value: name, brand }));

  const handleSubmit = e => {
    e.preventDefault();
    document.activeElement.blur();

    navigate(`${PATH.CATEGORY}?search=${filter}`);
  };

  const handleChange = value => {
    setFilter(value);
  };

  useEffect(() => {
    if (!pathname.includes('category')) setFilter('');
  }, [pathname]);

  return (
    <Navbar.Section>
      <Flex justify="flex-end" align="center" gap="xl">
        <form onSubmit={handleSubmit}>
          <Autocomplete
            size="xl"
            icon={<BiSearch size="2rem" />}
            placeholder="제조사명, 상품명"
            data={dropDownProducts}
            radius="xl"
            itemComponent={AutoCompleteItem}
            name="searchInput"
            value={filter}
            onChange={handleChange}
            filter={(_, item) =>
              item.value.toLowerCase().includes(debounced.toLowerCase().trim()) ||
              item.brand.en.toLowerCase().includes(debounced.toLowerCase().trim()) ||
              item.brand.kr.toLowerCase().includes(debounced.toLowerCase().trim())
            }
            nothingFound={<Text>검색결과가 없습니다.</Text>}
          />
        </form>
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
  const { data: categories } = useQuery(categoryQuery());
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState('');
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setActiveTab(pathname.includes('category') ? activeTab : '');
  }, [pathname, activeTab]);

  return (
    <Navbar.Section grow mt="md" w="120rem" maw="120rem" m="auto" h="auto">
      <Flex justify="space-between">
        <Tabs
          color={colorScheme === 'dark' ? 'gray.0' : 'dark'}
          sx={{
            'button[data-active]': {
              fontWeight: 'bold',
              borderWidth: '.2rem',
            },
          }}
          value={activeTab}
          onTabChange={setActiveTab}>
          <Tabs.List sx={{ border: 'none' }}>
            {categories.map(({ kr, en }) => (
              <Link key={en} to={`${PATH.CATEGORY}?category=${en}`}>
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
