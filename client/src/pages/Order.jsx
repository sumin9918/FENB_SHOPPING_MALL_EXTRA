import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Container, Stack, Group, Title, Text, Button } from '@mantine/core';
import styled from '@emotion/styled';
import { BsCheck2 } from 'react-icons/bs';

// styled-component
const CheckIcon = styled(BsCheck2)`
  img {
    color: rgb(18, 138, 9);
    // vertical-al;
  }
`;

// init field
const initField = {
  info: false,
  edit: false,
  input: false,
};

const Order = () => {
  console.log('');

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem" c="rgb(17, 17, 17)" sx={{ border: '1px solid black' }}>
      <Title p="4.8rem" sx={{ textAlign: 'center', border: '1px solid black' }}>
        결제하기
      </Title>
      <Group mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem" sx={{ border: '1px solid blue' }}>
        <Stack w="66.66667%" px="0.8rem" sx={{ border: '1px solid red' }}>
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

  return (
    <Container w="100%" sx={{ border: '1px solid green' }}>
      <Group position="apart" p="1.2rem 2rem 2.8rem 2rem" sx={{ border: '1px solid blue' }}>
        <Title fz="2.4rem" fw={500} sx={{ lineHeight: '2.8rem', border: '1px solid blue' }}>
          배송 옵션{field.info && <CheckIcon />}
        </Title>
        {field.info && (
          <Text
            sx={{ border: '1px solid blue' }}
            onClick={() => {
              setFiled({ ...initField, edit: true });
            }}>
            편집
          </Text>
        )}
      </Group>

      {field.info && <AddressInfo />}
      {field.edit && <EditAddress setFiled={setFiled} />}
      {field.input && <InputAddress setFiled={setFiled} />}
    </Container>
  );
};

const AddressInfo = () => {
  console.log('address info component!!');

  return (
    <Container>
      <Text>배송지 정보란</Text>
    </Container>
  );
};

const InputAddress = ({ setFiled }) => {
  console.log('input address component!!');

  return (
    <Container>
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

const EditAddress = ({ setFiled }) => {
  console.log('edit address component!!');

  return (
    <Container>
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

const SelectPaymentMethod = () => {
  console.log('payment component!!');

  return (
    <Container w="100%" sx={{ border: '1px solid green' }}>
      <Title>결제 수단 선택</Title>
    </Container>
  );
};

const Receipt = () => {
  console.log('receipt component!!');

  return (
    <Stack w="33.33333%" px="0.8rem" sx={{ border: '1px solid red' }}>
      <Title>장바구니</Title>
      <Group>
        <Text>상품 금액</Text>
        <Text>-- 원</Text>
      </Group>
      <Text>쿠폰</Text>
      <Group>
        <Text>배송비</Text>
        <Text>0 원</Text>
      </Group>
      <Group>
        <Text>총 결제 금액</Text>
        <Text>-- 원</Text>
      </Group>
    </Stack>
  );
};

export default Order;
