import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Stack, Group, Title, Text, Button, Image, useMantineColorScheme } from '@mantine/core';
import styled from '@emotion/styled';
import { historyQuery } from '../api/query';
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

// styled component
const CustomButton = styled(Button)`
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

const OrderComplete = () => {
  const { data: history } = useQuery(historyQuery());

  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
      <Title p="4.8rem" sx={{ textAlign: 'center' }}>
        결제가 정상적으로 완료되었습니다
      </Title>
      <Stack mih="5rem" justify="center" align="center" spacing={0} px="0.8rem">
        <OrderInfo history={history} />
        <OrderProducts products={history.products} />
        <CustomButton w="20rem" color={colorScheme === 'dark' ? 'gray.6' : 'dark'} onClick={() => navigate(PATH.MAIN)}>
          확인
        </CustomButton>
      </Stack>
    </Container>
  );
};

const OrderInfo = ({ history }) => {
  const { orderDate, paymentMethod, discountedTotalPrice, deliveryAddress } = history;

  const address = `(${deliveryAddress.postcode})${deliveryAddress.mainAddress} ${deliveryAddress.detailAddress}`;
  const orderedDate = new Date(orderDate);

  return (
    <Stack w="70%" p="2rem">
      <Title fz="2.4rem" mb="2rem" sx={{ textAlign: 'center' }}>
        주문 정보
      </Title>
      <Group py="1.6rem" px="3.2rem" spacing="3.2rem" sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <Stack>
          <Text>받는 사람</Text>
          <Text>주소</Text>
          <Text>전화번호</Text>
        </Stack>
        <Stack>
          <Text>{deliveryAddress.recipient}</Text>
          <Text>{address}</Text>
          <Text>{deliveryAddress.recipientPhone}</Text>
        </Stack>
      </Group>
      <Group py="1.6rem" px="3.2rem" spacing="3.2rem" sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <Stack>
          <Text>결제 금액</Text>
          <Text>결제 방식</Text>
          <Text>결제 시각</Text>
        </Stack>
        <Stack>
          <Text>{discountedTotalPrice.toLocaleString()} 원</Text>
          <Text>{paymentMethod}</Text>
          <Text>{orderedDate.toLocaleString('ko-KR')}</Text>
        </Stack>
      </Group>
    </Stack>
  );
};

const OrderProducts = ({ products }) => (
  <Stack w="70%" p="2rem">
    <Title fz="2.4rem" mb="2rem" sx={{ textAlign: 'center' }}>
      주문 상품
    </Title>
    <Stack py="1.6rem" px="3.2rem" sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
      {products.map(product => (
        <OrderProductsItem key={product.id} product={product} />
      ))}
    </Stack>
  </Stack>
);

const OrderProductsItem = ({ product }) => {
  const { colorScheme } = useMantineColorScheme();

  const { selectedSize, quantity, feature, name, price, color, imgURL } = product;

  return (
    <Group position="center" align="flex-start" fz="1.4rem">
      <div style={{ width: '20%', minWidth: '110px' }}>
        <Image src={imgURL} alt={name} withPlaceholder sx={{ img: { width: '110px' } }} />
      </div>
      <Group position="apart" align="flex-start" justify="center" w="70%" my="auto">
        <Stack spacing={0} maw="fit-content" justify="center">
          <Title fz="1.6rem" fw="bold" c={colorScheme === 'dark' ? 'gray.6' : '#111'}>
            {name}
          </Title>
          <Text pl="0.2rem">{feature}</Text>
          <Text pl="0.2rem">사이즈 {selectedSize}</Text>
          <Text pl="0.2rem">색상 {COLORS[color].kr}</Text>
          <Text pl="0.2rem">
            {quantity} / {price.toLocaleString()}
          </Text>
        </Stack>
        <Stack>
          <Text fz="1.6rem" fw="bold" c={colorScheme === 'dark' ? 'gray.6' : '#111'}>
            {(price * quantity).toLocaleString()} 원
          </Text>
        </Stack>
      </Group>
    </Group>
  );
};

export default OrderComplete;
