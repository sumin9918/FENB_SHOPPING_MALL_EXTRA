import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import {
  Container,
  Stack,
  Group,
  Image,
  Space,
  Title,
  Text,
  Button,
  NumberInput,
  ActionIcon,
  rem,
} from '@mantine/core';
import styled from '@emotion/styled';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';
import { PATH } from '../constants';

// mock data
const products = [
  {
    id: 1,
    brand: 'adidas',
    category: 'snikers',
    name: 'ultra boost 21',
    price: 63900,
    description: 'adidas adidas adidas adidas adidas',
    imgURL: 'https://via.placeholder.com/150x150',
    dateOfManufacture: new Date('2021-4-15'),
    favorites: 123,
    gender: 'men',
    color: 'white',
    stocks: [
      { size: 230, stock: 19 },
      { size: 235, stock: 23 },
      { size: 240, stock: 30 },
      { size: 245, stock: 14 },
      { size: 250, stock: 20 },
      { size: 255, stock: 37 },
      { size: 260, stock: 0 },
      { size: 265, stock: 10 },
      { size: 270, stock: 2 },
      { size: 275, stock: 1 },
      { size: 280, stock: 16 },
      { size: 285, stock: 28 },
    ],
  },
  {
    id: 2,
    brand: 'nike',
    category: 'sandal',
    name: 'nike airmax coco',
    price: 138000,
    description: 'nike nike nike nike nike',
    imgURL: 'img/sneakers.jpg',
    dateOfManufacture: new Date('2022-7-29'),
    favorites: 234,
    gender: 'men',
    color: 'navy',
    stocks: [
      { size: 230, stock: 19 },
      { size: 235, stock: 23 },
      { size: 240, stock: 30 },
      { size: 245, stock: 14 },
      { size: 250, stock: 20 },
      { size: 255, stock: 37 },
      { size: 260, stock: 0 },
      { size: 265, stock: 10 },
      { size: 270, stock: 2 },
      { size: 275, stock: 1 },
      { size: 280, stock: 16 },
      { size: 285, stock: 28 },
    ],
  },
];

// 임시 데이터
const user = {
  email: 'test@test.com',
  password: 'test',
  name: '이동규',
  favoriteIds: [2, 3, 4],
  addresses: [],
  carts: [
    {
      id: 1,
      category: 'snikers',
      color: 'white',
      name: 'ultra boost 21',
      price: 63900,
      imgURL: 'https://via.placeholder.com/150x150',
      selectedSize: 230,
      quantity: 2,
    },
    {
      id: 2,
      category: 'sandal',
      color: 'navy',
      name: 'nike airmax coco',
      price: 138000,
      imgURL: 'https://via.placeholder.com/150x150',
      selectedSize: 250,
      quantity: 1,
    },
  ],
};

// 임시 atom
const cartState = atom({
  key: 'cartState',
  default: user,
});

// Styled Components
const QuantityInput = styled(NumberInput)`
  textalign: 'center';

  input {
    width: rem(54);
  }

  input:disabled {
    background: transparent;
    color: rgb(17, 17, 17);
    cursor: default;
  }
`;

const OrderButton = styled(Button)`
  display: block;
  margin-top: 2rem;
  padding: 1.8rem 2.4rem;
  border-radius: 30px;
  height: 6rem;
  background-color: #171717;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 'bold';

  :hover {
    background-color: #171717;
  }
`;

const Cart = () => (
  <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
    <Group mih="5rem" justify="center" align="flex-start" spacing={0}>
      <CartList />
      <Receipt />
    </Group>
  </Container>
);

const CartList = () => {
  // 전역상태
  // ------------------------------------------------------------------------------------
  const userInfo = useRecoilValue(cartState);
  const { carts } = userInfo;
  // ------------------------------------------------------------------------------------

  return (
    <Stack w="66.66667%" pl="0.8rem" pr="10rem" spacing={0} fluid="true">
      <Title py="0.8rem">장바구니</Title>
      {carts.length ? carts.map(cart => <CartItem key={cart.id} cart={cart} />) : <NoCartItem />}
    </Stack>
  );
};

const NoCartItem = () => (
  <Container py="4rem" c="rgb(17,17,17)">
    <Title>장바구니에 물건이 없습니다</Title>
    <Space h="xl" />
    <Link to={PATH.MAIN}>
      <Text style={{ color: 'rgba(117,117,117)', verticalAlign: 'bottom' }}>
        <FaAngleDoubleRight
          style={{ verticalAlign: 'middle', transform: 'transLate3d(0, -1px, 0)', marginRight: '4px' }}
        />
        <span style={{ fontWeight: 'bold', color: 'rgb(17,17,17)' }}>FENB</span>의 신발들을 둘러보세요
      </Text>
    </Link>
  </Container>
);

const CartItem = ({ cart }) => {
  const handlers = useRef(null);

  const { id, category, color, name, price, imgURL, selectedSize, quantity } = cart;

  const maxQuantity = products
    .find(products => products.id === id)
    .stocks.find(({ size }) => size === selectedSize).stock;

  // 전역상태
  // ------------------------------------------------------------------------------------
  const [userInfo, setUserInfo] = useRecoilState(cartState);
  const { carts } = userInfo;

  const handleQuantity = e => {
    const newCarts = carts.map(cart => (cart.id === id ? { ...cart, quantity: e } : cart));

    setUserInfo({ ...userInfo, carts: newCarts });
  };

  const handleRemove = id => () => {
    const newCarts = carts.filter(cart => cart.id !== id);

    setUserInfo({ ...userInfo, carts: newCarts });
  };

  // ------------------------------------------------------------------------------------

  return (
    <Stack w="100%" py="2.4rem" spacing={0} c="rgb(117,117,117)" sx={{ borderBottom: '1px solid rgb(117,117,117)' }}>
      <Group align="flex-start">
        <div
          style={{
            width: '180px',
            height: '180px',
            minWidth: '180px',
            paddingRight: '16px',
          }}>
          <Link to={`/products/:${id}`}>
            <Image src={imgURL} alt={name} withPlaceholder />
          </Link>
        </div>
        <Stack justify="space-between" grow="true" spacing={0} sx={{ flex: 1 }}>
          <Group position="apart" grow="true" spacing={0} align="flex-start">
            <Stack align="flex-start" justify="flex-start" spacing={0} maw="fit-content">
              <Title fz="1.6rem" fw={500} c="#111" sx={{ cursor: 'pointer' }}>
                <Link to={`/products/:${id}`}>{name}</Link>
              </Title>
              <Text>{category}</Text>
              <Text>{color}</Text>
              <Text>사이즈 {selectedSize}</Text>
              <Group spacing="0.4rem">
                <Text sx={{ verticalAlign: 'bottom' }}>수량</Text>
                <ActionIcon
                  size={rem(42)}
                  fz={rem(24)}
                  fw="bold"
                  variant="transparent"
                  onClick={() => handlers.current.decrement()}>
                  –
                </ActionIcon>
                <QuantityInput
                  hideControls
                  disabled={true}
                  value={quantity}
                  onChange={handleQuantity}
                  handlersRef={handlers}
                  max={maxQuantity}
                  min={1}
                  size="lg"
                  styles={{ input: { width: rem(54), textAlign: 'center', ':disabled': { bg: '#fff' } } }}
                />
                <ActionIcon
                  size={rem(42)}
                  fz={rem(24)}
                  fw="bold"
                  variant="transparent"
                  onClick={() => handlers.current.increment()}>
                  +
                </ActionIcon>
              </Group>
            </Stack>
            <Stack
              align="flex-start"
              justify="flex-start"
              py="0.2rem"
              spacing={0}
              maw="fit-content"
              c="#111"
              ta="right">
              <Title fz="1.8rem" fw={500} c="#111">
                {(price * quantity).toLocaleString()}
              </Title>
            </Stack>
          </Group>
          <div style={{ marginTop: '24px' }}>
            <BiTrash
              style={{ width: '24px', height: '24px', verticalAlign: 'top', cursor: 'pointer' }}
              onClick={handleRemove(id)}
            />
          </div>
        </Stack>
      </Group>
      <Text c="#111">무료 배송</Text>
    </Stack>
  );
};

const Receipt = () => {
  const navigate = useNavigate();

  // 전역 상태
  // ------------------------------------------------------------------------------------
  const userInfo = useRecoilValue(cartState);
  const { carts } = userInfo;

  const totalPrice = carts.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
  // ------------------------------------------------------------------------------------

  return (
    <Stack w="33.33333%" px="0.8rem" py="0.8rem" mb="2.4rem" spacing={0}>
      <Title mb="2.4rem">주문 내역</Title>
      <div>
        <Group position="apart" mb="0.8rem" py="0.4rem">
          <Text>상품 금액</Text>
          <Text>{totalPrice.toLocaleString()} 원</Text>
        </Group>
        <Group position="apart" mb="0.8rem" py="0.4rem">
          <Text>배송비</Text>
          <Text>무료</Text>
        </Group>
      </div>
      <div>
        <Group
          position="apart"
          my="1.2rem"
          py="2.4rem"
          style={{ borderBottom: '1px solid black', borderTop: '1px solid black' }}>
          <Text>총 결제 금액</Text>
          <Text>{totalPrice.toLocaleString()} 원</Text>
        </Group>
      </div>
      <OrderButton disabled={!carts.length} onClick={() => navigate(PATH.ORDER)}>
        주문결제
      </OrderButton>
    </Stack>
  );
};

export default Cart;
