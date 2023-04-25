import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Container, Stack, Group, Title, Text, Button, Radio } from '@mantine/core';
import { BsCheck2 } from 'react-icons/bs';
import { useCartsQuery } from '../hooks/carts';

// init field
const initField = {
  info: false,
  edit: false,
  input: false,
};

const Order = () => {
  console.log('');

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem" c="rgb(17, 17, 17)">
      <Title p="4.8rem" sx={{ textAlign: 'center', border: '1px solid black' }}>
        결제하기
      </Title>
      <Group mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem" sx={{ border: '1px solid blue' }}>
        <Stack w="66.66667%" spacing={0} sx={{ border: '1px solid red' }}>
          <Address />
          <SelectPaymentMethod />
          <Button w="20rem" sx={{ border: '1px solid green' }}>
            주문하기
          </Button>
        </Stack>
        <Receipt></Receipt>
      </Group>
    </Container>
  );
};

const Address = () => {
  console.log('address component!!');

  // TODO : 더 나은 방식 생각하기
  // info와 input은 address의 postcode가 빈 문자열인지 아닌지로 나뉜다
  const [field, setFiled] = useState({ ...initField, info: true, input: false });

  const [selectedAddressId, setSelectedAddressId] = useState(1);

  return (
    <Stack w="100%" sx={{ border: '1px solid green' }}>
      <Group position="apart" p="1.2rem 2rem 2.8rem 2rem" sx={{ border: '1px solid blue' }}>
        <Title fz="2.4rem" fw={500} sx={{ lineHeight: '2.8rem', border: '1px solid blue' }}>
          배송 옵션{field.info && <BsCheck2 color="rgb(18, 138, 9)" style={{ verticalAlign: 'baseline' }} />}
        </Title>
        {field.info && (
          <Button
            variant="subtle"
            color="dark"
            size="lg"
            fz="1.4rem"
            sx={{ border: '1px solid blue', ':hover': { background: 'transparent', textDecoration: 'underilne' } }}
            onClick={() => {
              setFiled({ ...initField, edit: true });
            }}>
            편집
          </Button>
        )}
      </Group>

      {field.info && <AddressInfo selectedAddressId={selectedAddressId} />}
      {field.edit && <EditAddress setFiled={setFiled} setSelectedAddressId={setSelectedAddressId} />}
      {field.input && <InputAddress setFiled={setFiled} setSelectedAddressId={setSelectedAddressId} />}
    </Stack>
  );
};

const AddressInfo = ({ selectedAddressId }) => {
  console.log('address info component!!');

  // selectedAddressId의 id값에 해당하는 address를 렌더링

  return (
    <Container w="100%" h="500px" sx={{ border: '1px solid black' }}>
      <Text>배송지 정보란</Text>
    </Container>
  );
};

const InputAddress = ({ setFiled, setSelectedAddressId }) => {
  console.log('input address component!!');

  // 새 주소를 추가하고
  // 현재 id 값으로 selectedAddressId를 update 한다

  return (
    <Container w="100%" h="500px" sx={{ border: '1px solid black' }}>
      <Text>배송지 입력란</Text>
      <Button
        onClick={() => {
          setFiled({ ...initField, info: true });
        }}>
        배송지 정보란으로 이동
      </Button>
    </Container>
  );
};

const EditAddress = ({ setFiled, setSelectedAddressId }) => {
  console.log('edit address component!!');

  // 클릭된 id 값으로 selectedAddressId를 update 한다

  return (
    <Container w="100%" h="500px" sx={{ border: '1px solid black' }}>
      <Text>배송지 선택란</Text>
      <Button
        onClick={() => {
          setFiled({ ...initField, info: true });
        }}>
        배송지 정보란으로 이동
      </Button>
      <Button
        onClick={() => {
          setFiled({ ...initField, input: true });
        }}>
        배송지 입력란으로 이동
      </Button>
    </Container>
  );
};

const paymentMethods = [
  { value: 'kakaoPay', label: '카카오페이' },
  { value: 'creditCard', label: '신용카드' },
  { value: 'naverPay', label: '네이버페이' },
  { value: 'payco', label: '페이코' },
  { value: 'accountTransfer', label: '실시간 계좌이체' },
];

const SelectPaymentMethod = () => {
  console.log('payment component!!');

  return (
    <Stack w="100%" sx={{ border: '1px solid green' }}>
      <Title>결제 수단 선택</Title>
      <Radio.Group>
        <Stack>
          {paymentMethods.map(({ value, label }) => (
            <Radio vaule={value} label={label} key={value} />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
};

const Receipt = () => {
  const { data: totalPrice } = useCartsQuery({
    select: carts => carts.reduce((acc, cart) => acc + cart.quantity * cart.price, 0),
  });

  return (
    <Stack w="33.33333%" px="0.8rem" sx={{ border: '1px solid red' }}>
      <Title>장바구니</Title>
      <Group>
        <Text>상품 금액</Text>
        <Text>{totalPrice} 원</Text>
      </Group>
      <Text>쿠폰</Text>
      <Group>
        <Text>배송비</Text>
        <Text>0 원</Text>
      </Group>
      <Group>
        <Text>총 결제 금액</Text>
        <Text>{totalPrice} 원</Text>
      </Group>
    </Stack>
  );
};

export default Order;
