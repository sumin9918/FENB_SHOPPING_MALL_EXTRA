import {
  useMantineColorScheme,
  Navbar,
  Flex,
  Image,
  Autocomplete,
  ActionIcon,
  Group,
  Stack,
  Text,
  Menu,
  Avatar,
  Tooltip,
} from '@mantine/core';
import { BiSearch } from 'react-icons/bi';
import { SlHandbag } from 'react-icons/sl';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { forwardRef, useEffect, useState } from 'react';
import { useDebouncedValue, useMediaQuery } from '@mantine/hooks';
import { DarkMode } from '../index';
import { userState } from '../../recoil/atoms';
import { getDecodeSearch } from '../../utils/location';
import { signOut } from '../../api';
import { PATH } from '../../constants';
import { useSearchProducts } from '../../hooks/products';

const AutoCompleteItem = forwardRef(({ value, id, onMouseDown, ...rest }, ref) => {
  const navigate = useNavigate();

  const handleMouseDown = e => {
    onMouseDown(e);
    navigate(`${PATH.PRODUCTS}/${id}`);
  };

  return (
    <Text ref={ref} onMouseDown={handleMouseDown} value={value} {...rest}>
      {value}
    </Text>
  );
});

const SearchBar = () => {
  const { searchProducts } = useSearchProducts();
  const [searchInput, setSearchInput] = useState('');
  const [debounced] = useDebouncedValue(searchInput, 200);
  const { search: rawSearch, pathname } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    document.activeElement.blur();

    navigate(`${PATH.CATEGORY}?search=${searchInput}`);
  };

  useEffect(() => {
    const { search, searchValue } = getDecodeSearch(rawSearch);
    setSearchInput(pathname.includes('category') && search.includes('search') ? searchValue : '');
  }, [rawSearch, setSearchInput, pathname]);

  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        size="xl"
        icon={<BiSearch size="2rem" />}
        placeholder="상품 검색"
        data={searchProducts}
        radius="xl"
        itemComponent={AutoCompleteItem}
        value={searchInput}
        onChange={setSearchInput}
        filter={(_, item) =>
          item.value.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.brand.en.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.brand.kr.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.category.kr.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.category.en.toLowerCase().includes(debounced.toLowerCase().trim())
        }
        nothingFound={<Text>검색결과가 없습니다.</Text>}
      />
    </form>
  );
};

const Logo = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Link to={PATH.MAIN}>
      <Image
        width="10rem"
        pl="1rem"
        src={`images/logo/${colorScheme === 'dark' ? 'darkMain' : 'main'}.svg`}
        alt="486"
      />
    </Link>
  );
};

const SimpleUtilArea = () => {
  const [user, setUser] = useRecoilState(userState);
  const { search: rawSearch, pathname } = useLocation();
  const { search } = getDecodeSearch(rawSearch);
  const navigate = useNavigate();

  const handleSignOutClick = async () => {
    await signOut();
    setUser(null);
    navigate(PATH.MAIN);
  };

  return (
    <Stack>
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
            <>
              <Link key="signup" to={PATH.SIGNUP} state={`${pathname}${search}`}>
                회원가입
              </Link>
              <Link key="signin" to={PATH.SIGNIN} state={`${pathname}${search}`}>
                로그인
              </Link>
            </>
          )}
          <DarkMode />
        </Flex>
      </Navbar.Section>
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
    </Stack>
  );
};

const UtilArea = () => {
  const [user, setUser] = useRecoilState(userState);
  const { search: rawSearch, pathname } = useLocation();
  const { search } = getDecodeSearch(rawSearch);
  const navigate = useNavigate();

  const handleSignOutClick = async () => {
    await signOut();
    setUser(null);
    navigate(PATH.MAIN);
  };

  return (
    <Group>
      <SearchBar />
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
            onClick={() => navigate(PATH.WISHLIST)}>
            관심상품
          </Menu.Item>
          <Menu.Item
            fz="1.6rem"
            fw="bold"
            disabled={!user}
            icon={<SlHandbag size="2rem" />}
            onClick={() => navigate(PATH.CART)}>
            장바구니
          </Menu.Item>

          <Menu.Divider />

          {user ? (
            <Menu.Item fz="1.6rem" fw="bold" color="red" onClick={handleSignOutClick}>
              로그아웃
            </Menu.Item>
          ) : (
            <>
              <Menu.Item
                key="signup"
                fz="1.6rem"
                fw="bold"
                onClick={() => navigate(PATH.SIGNUP, { state: `${pathname}${search}` })}>
                회원가입
              </Menu.Item>
              <Menu.Item
                key="signin"
                fz="1.6rem"
                fw="bold"
                onClick={() => navigate(PATH.SIGNIN, { state: `${pathname}${search}` })}>
                로그인
              </Menu.Item>
            </>
          )}
        </Menu.Dropdown>
      </Menu>
      <DarkMode />
    </Group>
  );
};

const Main = () => {
  const matches = useMediaQuery('(min-width: 880px)');

  return (
    <Group position="apart">
      <Logo />
      {matches ? <SimpleUtilArea /> : <UtilArea />}
    </Group>
  );
};

export default Main;
