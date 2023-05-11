import { Stack, Title, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { PAYMENT_METHODS } from '../../constants';

const MEDIAQUERY_WIDTH = 768;

const OrderInfo = ({ history }) => {
  const { orderDate, paymentMethod, discountedTotalPrice, deliveryAddress } = history;

  const address = `(${deliveryAddress.postcode})${deliveryAddress.mainAddress} ${deliveryAddress.detailAddress}`;
  const orderedDate = new Date(orderDate);
  const payment = PAYMENT_METHODS.find(methods => methods.value === paymentMethod).label;

  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  return (
    <Stack w={matches ? '70%' : '90%'} p="2rem">
      <Title fz="2.4rem" mb="2rem" sx={{ textAlign: 'center' }}>
        주문 정보
      </Title>
      <Group
        py="1.6rem"
        px={matches ? '3.2rem' : '1.6rem'}
        spacing={matches ? '3.2rem' : '1.6rem'}
        sx={{ border: '1px solid lightgray', borderRadius: '5px', flexWrap: 'nowrap' }}>
        <Stack miw="7rem" w="10%">
          <Text>받는 사람</Text>
          <Text>주소</Text>
          <Text>전화번호</Text>
        </Stack>
        <Stack miw="18rem" w="70%">
          <Text>{deliveryAddress.recipient}</Text>
          <Text>{address}</Text>
          <Text>{deliveryAddress.recipientPhone}</Text>
        </Stack>
      </Group>
      <Group
        py="1.6rem"
        px={matches ? '3.2rem' : '1.6rem'}
        spacing={matches ? '3.2rem' : '1.6rem'}
        sx={{ border: '1px solid lightgray', borderRadius: '5px', flexWrap: 'nowrap' }}>
        <Stack miw="7rem" w="10%">
          <Text>결제 금액</Text>
          <Text>결제 방식</Text>
          <Text>결제 시각</Text>
        </Stack>
        <Stack miw="18rem" w="70%">
          <Text>{discountedTotalPrice.toLocaleString()} 원</Text>
          <Text>{payment}</Text>
          <Text>{orderedDate.toLocaleString('ko-KR')}</Text>
        </Stack>
      </Group>
    </Stack>
  );
};

export default OrderInfo;
