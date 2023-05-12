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
      <Stack py="1.6rem" px={matches ? '3.2rem' : '1.6rem'} sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <Group spacing={matches ? '3.2rem' : '1.6rem'} sx={{ flexWrap: 'nowrap' }}>
          <Text miw="7rem" w="10%">
            수령인
          </Text>
          <Text miw="18rem" w="70%">
            {deliveryAddress.recipient}
          </Text>
        </Group>
        <Group spacing={matches ? '3.2rem' : '1.6rem'} sx={{ flexWrap: 'nowrap' }}>
          <Text miw="7rem" w="10%">
            주소
          </Text>
          <Text miw="18rem" w="70%">
            {address}
          </Text>
        </Group>
        <Group spacing={matches ? '3.2rem' : '1.6rem'} sx={{ flexWrap: 'nowrap' }}>
          <Text miw="7rem" w="10%">
            전화번호
          </Text>
          <Text miw="18rem" w="70%">
            {deliveryAddress.recipientPhone}
          </Text>
        </Group>
      </Stack>
      <Stack py="1.6rem" px={matches ? '3.2rem' : '1.6rem'} sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        <Group spacing={matches ? '3.2rem' : '1.6rem'} sx={{ flexWrap: 'nowrap' }}>
          <Text miw="7rem" w="10%">
            결제 금액
          </Text>
          <Text miw="18rem" w="70%">
            {discountedTotalPrice.toLocaleString()} 원
          </Text>
        </Group>
        <Group spacing={matches ? '3.2rem' : '1.6rem'} sx={{ flexWrap: 'nowrap' }}>
          <Text miw="7rem" w="10%">
            결제 방식
          </Text>
          <Text miw="18rem" w="70%">
            {payment}
          </Text>
        </Group>
        <Group spacing={matches ? '3.2rem' : '1.6rem'} sx={{ flexWrap: 'nowrap' }}>
          <Text miw="7rem" w="10%">
            결제 시각
          </Text>
          <Text miw="18rem" w="70%">
            {orderedDate.toLocaleString('ko-KR')}
          </Text>
        </Group>
      </Stack>
    </Stack>
  );
};

export default OrderInfo;
