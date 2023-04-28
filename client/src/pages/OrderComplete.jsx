import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Stack, Group, Title, Text, Button, Image, useMantineColorScheme } from '@mantine/core';
import { historyQuery } from '../api/loader';
import { PATH } from '../constants';

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

const OrderComplete = () => {
  const { data: history } = useQuery(historyQuery());

  const navigate = useNavigate();

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
      <Title p="4.8rem" sx={{ textAlign: 'center' }}>
        결제가 완료되었습니다
      </Title>
      <Stack mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem">
        <OrderInfo history={history} />
        <OrderProducts products={history.products} />
        <Button onClick={() => navigate(PATH.MAIN)}>확인</Button>
      </Stack>
    </Container>
  );
};

const OrderInfo = ({ history }) => {
  const { orderDate, paymentMethod, totalPrice, discountedTotalPrice, discountAmount, deliveryAddress } = history;

  const address = `(${deliveryAddress.postcode})${deliveryAddress.mainAddress} ${deliveryAddress.detailAddress}`;

  return (
    <Stack w="100%" p="2rem" sx={{ border: '1px solid black' }}>
      <Title fz="2.4rem">주문 정보</Title>
      <Container>
        <Text>받는 사람 : {deliveryAddress.recipient}</Text>
        <Text>주소 : {address}</Text>
        <Text>전화번호 : {deliveryAddress.recipientPhone}</Text>
      </Container>
      <Container>
        <Text>상품 금액 : {totalPrice.toLocaleString()}원</Text>
        <Text>쿠폰 할인액 : {discountAmount.toLocaleString()}원</Text>
        <Text>배송비 : 0원</Text>
        <Text>총액 : {discountedTotalPrice.toLocaleString()} 원</Text>
      </Container>
      <Container>
        <Text>결제 방식 : {paymentMethod}</Text>
        <Text>결제 시각 : {orderDate}</Text>
      </Container>
    </Stack>
  );
};

const OrderProducts = ({ products }) => (
  <Stack w="100%" p="2rem" sx={{ border: '1px solid black' }}>
    <Title fz="2.4rem">주문 상품</Title>
    {products.map(product => (
      <OrderProductsItem key={product.id} product={product} />
    ))}
  </Stack>
);

const OrderProductsItem = ({ product }) => {
  const { colorScheme } = useMantineColorScheme();

  const { selectedSize, quantity, feature, name, price, color, imgURL } = product;

  return (
    <Group align="flex-start" fz="1.4rem">
      <div style={{ width: '60px', minWidth: '60px' }}>
        <Image src={imgURL} alt={name} withPlaceholder sx={{ img: { width: '60px' } }} />
      </div>
      <Stack pl="2rem" align="flex-start" justify="flex-start" spacing={0} maw="fit-content">
        <Title fz="1.4rem" fw="bold" c={colorScheme === 'dark' ? 'gray.6' : '#111'} sx={{ cursor: 'pointer' }}>
          {name}
        </Title>
        <Text mb="-0.4rem">설명 : {feature}</Text>
        <Text mb="-0.4rem">사이즈 : {selectedSize}</Text>
        <Text mb="-0.4rem">색상 : {COLORS[color].kr}</Text>
        <Text mb="-0.4rem">
          수량 : {quantity} / {price.toLocaleString()}
        </Text>
        <Text mb="-0.4rem">가격 {(price * quantity).toLocaleString()}</Text>
      </Stack>
    </Group>
  );
};

export default OrderComplete;
