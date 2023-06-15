import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import {
  ActionIcon,
  Avatar,
  Flex,
  Group,
  Image,
  Menu,
  Navbar,
  Stack,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { BiPackage } from 'react-icons/bi';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { IoReceiptOutline, IoSettingsSharp } from 'react-icons/io5';
import { SlHandbag } from 'react-icons/sl';

import { SearchBar, DarkMode } from 'components/NavigationBar';
import { signOut } from 'api/fetch';
import { userState } from 'recoil/atoms';
import { useMediaQuery } from 'hooks';
import { getDecodeSearch } from 'utils';
import { QUERY_KEY, MEDIAQUERY_WIDTH, PATH } from 'constants';

const Main = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  const navigate = useNavigate();
  const { search: rawSearch, pathname, state } = useLocation();
  const { search } = getDecodeSearch(rawSearch);

  const queryClient = useQueryClient();

  const [user, setUser] = useRecoilState(userState);

  const handleSignOutClick = async () => {
    await signOut();

    setUser(null);
    queryClient.removeQueries(QUERY_KEY.AUTH);

    navigate(PATH.MAIN);
  };

  const redirectTo = pathname === PATH.SIGNIN || pathname === PATH.SIGNUP ? state : `${pathname}${search}`;

  return (
    <Group position="apart">
      <Logo />
      {matches ? (
        <SimpleUtilArea handleSignOutClick={handleSignOutClick} redirectTo={redirectTo} user={user} />
      ) : (
        <UtilArea handleSignOutClick={handleSignOutClick} redirectTo={redirectTo} user={user} />
      )}
    </Group>
  );
};

const Logo = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Link to={PATH.MAIN}>
      <Image
        alt="486"
        pl="1rem"
        src={`images/logo/${colorScheme === 'dark' ? 'darkMain' : 'main'}.svg`}
        width="10rem"
      />
    </Link>
  );
};

const SimpleUtilArea = ({ user, handleSignOutClick, redirectTo }) => {
  const theme = useMantineTheme();

  return (
    <Stack>
      <Navbar.Section pt="xs">
        <Flex align="center" color="gray.9" fz="1.3rem" gap="lg" justify="flex-end">
          {user ? (
            <>
              <Text sx={{ cursor: 'pointer' }} onClick={handleSignOutClick}>
                로그아웃
              </Text>
              <Text>{user.username}님 환영합니다.</Text>
            </>
          ) : (
            <>
              <Link key="signup" state={redirectTo} to={PATH.SIGNUP}>
                회원가입
              </Link>
              <Link key="signin" state={redirectTo} to={PATH.SIGNIN}>
                로그인
              </Link>
            </>
          )}
          <DarkMode />
        </Flex>
      </Navbar.Section>
      <Navbar.Section>
        <Flex align="center" gap="xl" justify="flex-end">
          <SearchBar />
          <Link state={redirectTo} to={PATH.WISHLIST}>
            <Tooltip label="관심상품">
              <ActionIcon size="xl">
                <BsFillSuitHeartFill color={theme.colors.red[6]} size="2.8rem" />
              </ActionIcon>
            </Tooltip>
          </Link>
          <Link state={redirectTo} to={PATH.CART}>
            <Tooltip label="장바구니">
              <ActionIcon size="xl">
                <SlHandbag size="2.8rem" />
              </ActionIcon>
            </Tooltip>
          </Link>
          <Menu shadow="md" transitionProps={{ transition: 'rotate-right', duration: 150 }} width="20rem">
            <Menu.Target>
              <Avatar radius="xl" size="5rem" sx={{ cursor: 'pointer' }} />
            </Menu.Target>

            <Menu.Dropdown>
              <Link state={redirectTo} to={PATH.HISTORY}>
                <Menu.Item fw="bold" fz="1.6rem" icon={<IoReceiptOutline size="2rem" />}>
                  구매내역
                </Menu.Item>
              </Link>
              <Link state={redirectTo} to={PATH.ADDRESS}>
                <Menu.Item fw="bold" fz="1.6rem" icon={<BiPackage size="2rem" />}>
                  배송지
                </Menu.Item>
              </Link>
              <Link state={redirectTo} to={PATH.ACCOUNT}>
                <Menu.Item fw="bold" fz="1.6rem" icon={<IoSettingsSharp size="2rem" />}>
                  계정정보
                </Menu.Item>
              </Link>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Navbar.Section>
    </Stack>
  );
};

const UtilArea = ({ user, handleSignOutClick, redirectTo }) => {
  const theme = useMantineTheme();

  const navigate = useNavigate();

  const handleMoveToWishListClick = () => {
    navigate(PATH.WISHLIST);
  };

  const handleMoveToCartClick = () => {
    navigate(PATH.CART);
  };

  const handleMoveToHistoryClick = () => {
    navigate(PATH.HISTORY);
  };

  const handleMoveToAddressClick = () => {
    navigate(PATH.ADDRESS);
  };

  const handleMoveToAccountClick = () => {
    navigate(PATH.ACCOUNT);
  };

  return (
    <Group>
      <SearchBar />
      <Menu shadow="md" transitionProps={{ transition: 'rotate-right', duration: 150 }} width="20rem">
        <Menu.Target>
          <Avatar radius="xl" size="5rem" sx={{ cursor: 'pointer' }} />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label fw="bold" fz="1.6rem">
            {user ? `${user.username}님 환영합니다.` : '로그인이 필요합니다.'}
          </Menu.Label>
          <Menu.Divider />
          <Menu.Item
            disabled={!user}
            fw="bold"
            fz="1.6rem"
            icon={<BsFillSuitHeartFill color={theme.colors.red[6]} size="2rem" />}
            onClick={handleMoveToWishListClick}>
            관심상품
          </Menu.Item>
          <Menu.Item
            disabled={!user}
            fw="bold"
            fz="1.6rem"
            icon={<SlHandbag size="2rem" />}
            onClick={handleMoveToCartClick}>
            장바구니
          </Menu.Item>
          <Menu.Item
            disabled={!user}
            fw="bold"
            fz="1.6rem"
            icon={<IoReceiptOutline size="2rem" />}
            onClick={handleMoveToHistoryClick}>
            구매내역
          </Menu.Item>
          <Menu.Item
            disabled={!user}
            fw="bold"
            fz="1.6rem"
            icon={<BiPackage size="2rem" />}
            onClick={handleMoveToAddressClick}>
            배송지
          </Menu.Item>
          <Menu.Item
            disabled={!user}
            fw="bold"
            fz="1.6rem"
            icon={<IoSettingsSharp size="2rem" />}
            onClick={handleMoveToAccountClick}>
            계정정보
          </Menu.Item>
          <Menu.Divider />
          {user ? (
            <Menu.Item color="red" fw="bold" fz="1.6rem" onClick={handleSignOutClick}>
              로그아웃
            </Menu.Item>
          ) : (
            <>
              <Menu.Item key="signup" component={Link} fw="bold" fz="1.6rem" state={redirectTo} to={PATH.SIGNUP}>
                회원가입
              </Menu.Item>
              <Menu.Item key="signin" component={Link} fw="bold" fz="1.6rem" state={redirectTo} to={PATH.SIGNIN}>
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

export default Main;
