import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  useMantineColorScheme,
} from '@mantine/core';
import styled from '@emotion/styled';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BiTrash } from 'react-icons/bi';
import { useCartsQuery, useChangeQuantityMutation, useRemoveCartMutation } from '../hooks/carts';
import { PATH } from '../constants';

const CATEGORIES = [
  { en: 'sneakers', kr: '운동화' },
  { en: 'sandal', kr: '샌달' },
  { en: 'slipper', kr: '슬리퍼' },
  { en: 'walking', kr: '워킹화' },
  { en: 'shoes', kr: '구두' },
  { en: 'etc', kr: '기타' },
];

const COLORS = [
  { color: '#8D429F', en: 'purple', kr: '보라색' },
  { color: '#000', en: 'black', kr: '검정색' },
  { color: '#E7352B', en: 'red', kr: '빨간색' },
  { color: '#F36B26', en: 'orange', kr: '주황색' },
  { color: '#1790C8', en: 'blue', kr: '파란색' },
  { color: '#ffffff', en: 'white', kr: '흰색' },
  { color: '#825D41', en: 'brown', kr: '갈색' },
  { color: '#7BBA3C', en: 'green', kr: '초록색' },
  { color: '#FED533', en: 'yellow', kr: '노란색' },
  { color: 'navy', en: 'navy', kr: '남색' },
  { color: 'beige', en: 'beige', kr: '베이지' },
  { color: '#808080', en: 'gray', kr: '회색' },
  { color: '#F0728F', en: 'pink', kr: '분홍색' },
];

// Styled Components
const QuantityInput = styled(NumberInput)`
  text-align: 'center';

  input {
    width: ${rem(54)};
  }

  input:disabled {
    background: transparent;
    color: #868e96;
    cursor: default;
  }
`;

const OrderButton = styled(Button)`
  display: block;
  margin-top: 2rem;
  padding: 1.8rem 2.4rem;
  border-radius: 30px;
  height: 6rem;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 'bold';

  :hover {
    background-color: #228be6;
  }
`;

const Cart = () => (
  <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
    <Group mih="5rem" justify="center" align="flex-start" spacing={0}>
      <CartList />
      <OrderHistory />
    </Group>
  </Container>
);

const CartList = () => {
  const { data: carts } = useCartsQuery();

  return (
    <Stack w="66.66667%" pl="0.8rem" pr="10rem" spacing={0} fluid="true">
      <Title py="0.8rem">장바구니</Title>
      {carts.length ? (
        carts.map(cart => <CartItem key={`${cart.id}-${cart.selectedSize}`} cart={cart} />)
      ) : (
        <NoCartItem />
      )}
    </Stack>
  );
};

const NoCartItem = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container py="4rem" c={colorScheme === 'dark' ? 'gray.6' : 'rgb(17,17,17)'}>
      <Title>장바구니에 물건이 없습니다</Title>
      <Space h="xl" />
      <Link to={PATH.MAIN}>
        <Text color={colorScheme === 'dark' ? 'gray.6' : 'rgba(117,117,117)'} style={{ verticalAlign: 'bottom' }}>
          <FaAngleDoubleRight
            style={{ verticalAlign: 'middle', transform: 'transLate3d(0, -1px, 0)', marginRight: '4px' }}
          />
          <Text span weight="bold" color={colorScheme === 'dark' ? 'gray.6' : 'rgb(17,17,17)'}>
            FENB
          </Text>
          의 신발들을 둘러보세요
        </Text>
      </Link>
    </Container>
  );
};

const CartItem = ({ cart }) => {
  const { colorScheme } = useMantineColorScheme();

  const { id, category, color, name, price, imgURL, selectedSize, quantity, stocks } = cart;

  const handlers = useRef();

  const { mutate: changeQuantity } = useChangeQuantityMutation();
  const { mutate: removeCart } = useRemoveCartMutation();

  const maxQuantity = stocks?.find(({ size }) => size === selectedSize).stock;

  return (
    <Stack
      w="100%"
      py="2.4rem"
      spacing={0}
      c={colorScheme === 'dark' ? 'gray.6' : 'rgb(117,117,117)'}
      sx={{ borderBottom: '1px solid rgb(117,117,117)' }}>
      <Group align="flex-start">
        <div
          style={{
            width: '180px',
            height: '180px',
            minWidth: '180px',
            paddingRight: '16px',
          }}>
          <Link to={`${PATH.PRODUCTS}/${id}`} state={id}>
            <Image src={imgURL} alt={name} withPlaceholder />
          </Link>
        </div>
        <Stack justify="space-between" grow="true" spacing={0} sx={{ flex: 1 }}>
          <Group position="apart" grow="true" spacing={0} align="flex-start">
            <Stack align="flex-start" justify="flex-start" spacing={0} maw="fit-content">
              <Title fz="1.6rem" fw={500} c={colorScheme === 'dark' ? 'gray.6' : '#111'} sx={{ cursor: 'pointer' }}>
                <Link to={`${PATH.PRODUCTS}/${id}`} state={id}>
                  {name}
                </Link>
              </Title>
              <Text>{CATEGORIES[category].kr}</Text>
              <Text>{COLORS[color].kr}</Text>
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
                  size="lg"
                  max={maxQuantity}
                  min={1}
                  disabled={true}
                  handlersRef={handlers}
                  value={quantity}
                  onChange={e => changeQuantity({ id, quantity: e })}
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
              c={colorScheme === 'dark' ? 'gray.6' : '#111'}
              ta="right">
              <Title fz="1.8rem" fw={500} c={colorScheme === 'dark' ? 'gray.6' : '#111'}>
                {(price * quantity).toLocaleString()}
              </Title>
            </Stack>
          </Group>
          <div style={{ marginTop: '24px' }}>
            <BiTrash
              style={{ width: '24px', height: '24px', verticalAlign: 'top', cursor: 'pointer' }}
              onClick={() => removeCart(id)}
            />
          </div>
        </Stack>
      </Group>
      <Text c={colorScheme === 'dark' ? 'gray.6' : '#111'}>무료 배송</Text>
    </Stack>
  );
};

const OrderHistory = () => {
  const { colorScheme } = useMantineColorScheme();
  const navigate = useNavigate();

  const { data: countCarts } = useCartsQuery({ select: carts => carts.length });
  const { data: totalPrice } = useCartsQuery({
    select: carts => carts.reduce((acc, cart) => acc + cart.quantity * cart.price, 0),
  });

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
          style={{ borderBottom: '1px solid rgb(117,117,117)', borderTop: '1px solid rgb(117,117,117)' }}>
          <Text>총 결제 금액</Text>
          <Text>{totalPrice.toLocaleString()} 원</Text>
        </Group>
      </div>
      <OrderButton
        disabled={!countCarts}
        color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
        onClick={() => navigate(PATH.ORDER)}>
        주문결제
      </OrderButton>
    </Stack>
  );
};

export default Cart;
