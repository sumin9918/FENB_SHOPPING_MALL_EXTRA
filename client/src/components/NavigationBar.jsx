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
  Container,
  Menu,
  Avatar,
  Tooltip,
} from '@mantine/core';
import { BiSearch } from 'react-icons/bi';
import { SlHandbag } from 'react-icons/sl';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { forwardRef, useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks';
import { PATH } from '../constants';
import { signOut } from '../api';
import { productsQuery } from '../api/loader';
import { userState } from '../recoil/atoms';
import { authQueryKey } from '../constants/queryKey';
import { getDecodeSearch } from '../utils/location';

const topList = [
  { kr: '회원가입', en: 'signup' },
  { kr: '로그인', en: 'signin' },
];

const DarkMode = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Tooltip label="다크모드">
      <ActionIcon
        size="xl"
        onClick={() => toggleColorScheme()}
        sx={theme => ({
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[6],
        })}>
        {colorScheme === 'dark' ? <TbSunFilled size="2.8rem" /> : <TbMoonFilled size="2.8rem" />}
      </ActionIcon>
    </Tooltip>
  );
};

const SearchBar = () => {
  const { data: searchProducts } = useQuery(
    productsQuery({ select: products => products.map(({ id, name, brand }) => ({ id, value: name, brand })) })
  );
  const [filter, setFilter] = useState('');
  const [debounced] = useDebouncedValue(filter, 200);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    document.activeElement.blur();

    navigate(`${PATH.CATEGORY}?search=${filter}`);
  };

  useEffect(() => {
    if (!pathname.includes('category')) setFilter('');
  }, [pathname]);

  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        size="xl"
        icon={<BiSearch size="2rem" />}
        placeholder="제조사명, 상품명"
        data={searchProducts}
        radius="xl"
        itemComponent={AutoCompleteItem}
        name="searchInput"
        value={filter}
        onChange={value => setFilter(value)}
        filter={(_, item) =>
          item.value.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.brand.en.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.brand.kr.toLowerCase().includes(debounced.toLowerCase().trim())
        }
        nothingFound={<Text>검색결과가 없습니다.</Text>}
      />
    </form>
  );
};

const NavigationMenu = () => {
  const [user, setUser] = useRecoilState(userState);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { search: rawSearch, pathname } = useLocation();
  const { search } = getDecodeSearch(rawSearch);

  const handleSignOutClick = async () => {
    await signOut();
    queryClient.removeQueries(authQueryKey);
    setUser(null);
    navigate(PATH.MAIN);
  };

  const handleRedirectClick = (path, state) => {
    navigate(path, { state });
  };

  return (
    <Menu shadow="md" width="20rem" transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      <Menu.Target>
        <Avatar radius="xl" size="5rem" sx={{ cursor: 'pointer' }} />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label fz="1.6rem" fw="bold">
          {user ? `${user.username}님 환영합니다.` : '로그인이 필요합니다.'}
        </Menu.Label>
        <Menu.Divider />

        <Menu.Item
          fz="1.6rem"
          fw="bold"
          disabled={!user}
          icon={<BsFillSuitHeartFill size="2rem" color="tomato" />}
          onClick={() => handleRedirectClick(PATH.WISHLIST, pathname)}>
          관심상품
        </Menu.Item>
        <Menu.Item
          fz="1.6rem"
          fw="bold"
          disabled={!user}
          icon={<SlHandbag size="2rem" />}
          onClick={() => handleRedirectClick(PATH.CART, pathname)}>
          장바구니
        </Menu.Item>

        <Menu.Divider />

        {user ? (
          <Menu.Item fz="1.6rem" fw="bold" color="red" onClick={handleSignOutClick}>
            로그아웃
          </Menu.Item>
        ) : (
          topList.map(({ kr, en }) => (
            <Menu.Item
              key={en}
              fz="1.6rem"
              fw="bold"
              onClick={() => handleRedirectClick(PATH[en.toUpperCase()], `${pathname}${search}`)}>
              {kr}
            </Menu.Item>
          ))
        )}
      </Menu.Dropdown>
    </Menu>
  );
};

const TopList = () => {
  const [user, setUser] = useRecoilState(userState);

  const { search: rawSearch, pathname } = useLocation();
  const { search } = getDecodeSearch(rawSearch);
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
        {user ? (
          <>
            <Text onClick={handleSignOutClick} sx={{ cursor: 'pointer' }}>
              로그아웃
            </Text>
            <Text>{user.username}님 환영합니다.</Text>
          </>
        ) : (
          topList.map(({ kr, en }) => (
            <Link key={en} to={PATH[en.toUpperCase()]} state={`${pathname}${search}`}>
              {kr}
            </Link>
          ))
        )}
        <DarkMode />
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
  const { pathname } = useLocation();

  return (
    <Navbar.Section>
      <Flex justify="flex-end" align="center" gap="xl">
        <SearchBar />
        <Link to={PATH.WISHLIST} state={pathname}>
          <Tooltip label="관심상품">
            <ActionIcon size="xl">
              <BsFillSuitHeartFill size="2.8rem" color="tomato" />
            </ActionIcon>
          </Tooltip>
        </Link>
        <Link to={PATH.CART} state={pathname}>
          <Tooltip label="장바구니">
            <ActionIcon size="xl">
              <SlHandbag size="2.8rem" />
            </ActionIcon>
          </Tooltip>
        </Link>
      </Flex>
    </Navbar.Section>
  );
};

const MainNav = () => {
  const { colorScheme } = useMantineColorScheme();
  const matches = useMediaQuery('(min-width: 880px)');

  return (
    <Group position="apart">
      <Link to={PATH.MAIN}>
        <Image
          width="10rem"
          pl="1rem"
          src={colorScheme === 'dark' ? 'images/logo/darkmodeMainLogo.svg' : 'images/logo/main.svg'}
          alt="486"
        />
      </Link>
      {matches ? (
        <Stack>
          <TopList />
          <MainList />
        </Stack>
      ) : (
        <Group>
          <SearchBar />
          <NavigationMenu />
          <DarkMode />
        </Group>
      )}
    </Group>
  );
};

const CategoryNav = () => {
  const { data: categories } = useQuery(
    productsQuery({
      select: products =>
        products.reduce(
          (acc, product) =>
            acc.some(category => category.en === product.category.en) ? acc : [product.category, ...acc],
          []
        ),
    })
  );
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState('');
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setActiveTab(pathname.includes('category') ? activeTab : '');
  }, [pathname, activeTab]);

  return (
    <Navbar.Section grow mt="md" m="auto" h="auto">
      <Flex m="auto" justify="space-between">
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

const NavigationBar = () => (
  <Navbar height="auto" zIndex={9999} position={{ top: 0, left: 0, borderBottom: '1px solid #ced4da' }}>
    <Container w="100%" size="120rem" m="auto">
      <MainNav />
      <CategoryNav />
    </Container>
  </Navbar>
);

export default NavigationBar;
