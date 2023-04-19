import { Navbar, Flex, Image, Tabs, Autocomplete, ActionIcon } from '@mantine/core';
import { BiSearch } from 'react-icons/bi';
import { SlHandbag } from 'react-icons/sl';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { TbMoonFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
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

const TopList = () => (
  <Navbar.Section>
    <Flex justify="space-between" align="center">
      <Link to={PATH.MAIN}>
        <Image width={100} pl="1rem" src="images/logo/main.svg" alt="486" />
      </Link>
      <Flex gap="lg" align="center" direction="row" wrap="nowrap" fz="1.5rem">
        {topList.map(({ kr, en }) => (
          <Link key={en} to={PATH[en.toUpperCase()]}>
            {kr}
          </Link>
        ))}
        <ActionIcon size="xl">
          <TbMoonFilled size="2.8rem" color="black" />
        </ActionIcon>
      </Flex>
    </Flex>
  </Navbar.Section>
);

const BottomList = () => (
  <Navbar.Section grow mt="md">
    <Flex justify="space-between">
      <Tabs>
        <Tabs.List sx={{ border: 'none' }}>
          {categoryList.map(({ kr, en }) => (
            <Tabs.Tab key={en} value={en} fz="1.6rem">
              <Link to={PATH.CATEGORY}>{kr}</Link>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      <Flex align="center" gap="md">
        <Autocomplete
          icon={<BiSearch />}
          placeholder="제조사명, 상품명"
          data={['서버데이터', '넣을', '예정', '입니다.']}
        />
        <Link to={PATH.WISHLIST}>
          <ActionIcon size="xl">
            <BsFillSuitHeartFill size="2.8rem" color="red" />
          </ActionIcon>
        </Link>
        <Link to={PATH.CART}>
          <ActionIcon size="xl">
            <SlHandbag size="2.8rem" />
          </ActionIcon>
        </Link>
      </Flex>
    </Flex>
  </Navbar.Section>
);

const NavigationBar = ({ isBottomShow = true }) => (
  <Navbar maw={1200} h="auto" m="auto" fz="1.2rem" sx={{ border: 'none' }}>
    <TopList />
    {isBottomShow && <BottomList />}
  </Navbar>
);

export default NavigationBar;
