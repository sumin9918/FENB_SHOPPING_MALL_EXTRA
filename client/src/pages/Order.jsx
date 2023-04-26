import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Stack, Group, Title, Text, Button, Radio, Image, Space } from '@mantine/core';
import styled from '@emotion/styled';
import { BsCheck2, BsXLg } from 'react-icons/bs';
import { FormAddressInput, FormInput, FormPhoneInput, FormZoneCodeInput } from '../components';
import { useAddressQuery, useRemoveAddressMutation } from '../hooks/address';
import { useCartsQuery } from '../hooks/carts';
import { addAddress } from '../api/address';
import { PATH } from '../constants';
import { addAdressSchema } from '../schema';

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

// init field
const initField = {
  info: false,
  edit: false,
  input: false,
};

// styled component
const CustomButton = styled(Button)`
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

const Order = () => {
  const navigate = useNavigate();

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem" c="rgb(17, 17, 17)">
      <Title p="4.8rem" sx={{ textAlign: 'center' }}>
        결제하기
      </Title>
      <Group mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem">
        <Stack w="66.66667%" pr="5rem" spacing={0}>
          <Address />
          <SelectPaymentMethod />
          <Container w="30rem">
            <CustomButton w="100%" disabled={false} onClick={() => navigate(PATH.ORDER_COMPLETE)}>
              주문결제
            </CustomButton>
          </Container>
        </Stack>
        <CartHistory />
      </Group>
    </Container>
  );
};

const Address = () => {
  const { data: addresses } = useAddressQuery();
  // const addresses = [];

  const defaultAddress = !addresses.length ? null : addresses.find(address => address.isDefault) ?? addresses[0];
  const isValidAddress = !!defaultAddress?.postcode !== '';

  // TODO : 더 나은 방식 생각하기
  const [field, setFiled] = useState({ ...initField, info: isValidAddress, input: !isValidAddress });
  const selectedAddress = useRef(defaultAddress);

  const changeSelectedAddress = newAddress => {
    selectedAddress.current = newAddress;
  };

  return (
    <Stack w="100%">
      <Group position="apart" p="1.2rem 2rem 2.8rem 2rem">
        <Title fz="2.4rem" fw={500} sx={{ lineHeight: '2.8rem' }}>
          배송 옵션{field.info && <BsCheck2 color="rgb(18, 138, 9)" style={{ verticalAlign: 'baseline' }} />}
        </Title>
        {field.info && (
          <Button
            variant="subtle"
            color="dark"
            size="lg"
            fz="1.4rem"
            sx={{ ':hover': { background: 'transparent', textDecoration: 'underilne' } }}
            onClick={() => {
              setFiled({ ...initField, edit: true });
            }}>
            편집
          </Button>
        )}
      </Group>

      {field.info && <AddressInfo selectedAddress={selectedAddress} />}
      {field.edit && <EditAddress setFiled={setFiled} changeSelectedAddress={changeSelectedAddress} />}
      {field.input && <InputAddress setFiled={setFiled} changeSelectedAddress={changeSelectedAddress} />}
    </Stack>
  );
};

const AddressInfo = ({ selectedAddress }) => {
  const { recipient, mainAddress, detailAddress, postcode, recipientPhone } = selectedAddress.current;

  return (
    <Stack w="100%" px="2rem">
      <Title>배송 주소</Title>
      <Text>{recipient}</Text>
      <Text>{mainAddress}</Text>
      <Text>{detailAddress}</Text>
      <Text>{postcode}</Text>
      <Text>{recipientPhone}</Text>
      <Space />
      <Title>배송 방법</Title>
      <Text>무료</Text>
    </Stack>
  );
};

const InputAddress = ({ setFiled, changeSelectedAddress }) => {
  const { handleSubmit, register, formState, trigger, setValue } = useForm({
    resolver: zodResolver(addAdressSchema),
  });

  const handleAddAddress = data => {
    const newAddress = {
      recipient: data.name,
      recipientPhone: data.phone,
      mainAddress: data.mainAddress,
      detailAddress: data.detailAddress,
      postcode: data.postcode,
    };

    addAddress(newAddress);

    changeSelectedAddress(newAddress);
    setFiled({ ...initField, info: true });
  };

  return (
    <Stack
      w="100%"
      h="500px"
      px="2rem"
      sx={{
        input: {
          fontSize: '1.6rem',
          border: 'none',
          borderBottomStyle: 'solid',
          borderBottomWidth: '0.07rem',
          borderBottomColor: '#ced4da',
        },
        label: {
          fontSize: '1.6rem',
        },
        div: {
          padding: '0',
          fontSize: '1.6rem',
        },
      }}>
      <Text>배송지 입력란</Text>
      <form noValidate onSubmit={handleSubmit(handleAddAddress)}>
        <FormInput
          inputType="text"
          withAsterisk
          id="name"
          name="이름"
          placeholder="예) 김펜비"
          register={register}
          formState={formState}
        />
        <FormPhoneInput
          inputType="tel"
          withAsterisk
          id="phone"
          name="휴대전화번호"
          placeholder="예) 01012345678"
          trigger={trigger}
          setValue={setValue}
          register={register}
          formState={formState}
        />
        <FormZoneCodeInput
          inputType="text"
          withAsterisk
          id="postcode"
          name="우편번호"
          placeholder="주소찾기 버튼을 클릭주세요"
          setValue={setValue}
          register={register}
          formState={formState}
        />
        <FormAddressInput
          inputType="text"
          withAsterisk
          id="mainAddress"
          name="주소"
          placeholder="주소를 선택하시면 자동으로 입력됩니다."
          register={register}
          formState={formState}
        />
        <FormInput
          inputType="text"
          id="detailAddress"
          name="상세주소"
          placeholder="상세 주소를 입력하세요."
          register={register}
          formState={formState}
        />
        <Button type="submit" sx={{ width: '40rem' }}>
          배송지 추가
        </Button>
      </form>
    </Stack>
  );
};

const EditAddress = ({ setFiled, changeSelectedAddress }) => {
  const { data: addresses } = useAddressQuery();

  return (
    <Stack w="100%" px="2rem">
      {addresses.map(address => (
        <EditAddressItem
          key={address.id}
          address={address}
          setFiled={setFiled}
          changeSelectedAddress={changeSelectedAddress}
        />
      ))}
      <CustomButton sx={{ width: '40rem' }} onClick={() => setFiled({ ...initField, input: true })}>
        새 배송지 추가
      </CustomButton>
    </Stack>
  );
};

const EditAddressItem = ({ address, setFiled, changeSelectedAddress }) => {
  const { id, recipient, mainAddress, detailAddress, postcode, recipientPhone, isDefault } = address;

  const { mutate: removeAddress } = useRemoveAddressMutation();

  return (
    <Container
      key={id}
      sx={{ width: '100%', border: '1px solid black' }}
      onClick={() => {
        changeSelectedAddress(address);
        setFiled({ ...initField, info: true });
      }}>
      <Group position="apart" align="flex-start">
        <Stack>
          {isDefault && <Text>[기본 배송지]</Text>}
          <Text>{recipient}</Text>
          <Text>{mainAddress}</Text>
          <Text>{detailAddress}</Text>
          <Text>{postcode}</Text>
          <Text>{recipientPhone}</Text>
        </Stack>
        <Button
          style={{ zIndex: '9999' }}
          onClick={e => {
            e.stopPropagation();
            removeAddress(id);
          }}>
          <BsXLg w="5rem" h="5rem" color="#000" />
        </Button>
      </Group>
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

const SelectPaymentMethod = () => (
  <Stack w="100%">
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

const CartHistory = () => {
  const { data: totalPrice } = useCartsQuery({
    select: carts => carts.reduce((acc, cart) => acc + cart.quantity * cart.price, 0),
  });

  return (
    <Stack w="33.33333%" px="0.8rem">
      <Title>장바구니</Title>
      <Group position="apart">
        <Text>상품 금액</Text>
        <Text>{totalPrice} 원</Text>
      </Group>
      <Text>쿠폰</Text>
      <Group position="apart">
        <Text>배송비</Text>
        <Text>0 원</Text>
      </Group>
      <Group position="apart">
        <Text>총 결제 금액</Text>
        <Text>{totalPrice} 원</Text>
      </Group>
      <CartHistoryItemList />
    </Stack>
  );
};

const CartHistoryItemList = () => {
  const { data: carts } = useCartsQuery();

  return (
    <Stack mx="0.8rem" mb="2rem" pt="2.4rem">
      <Title fz="1.6rem" fw="bold" mb="0.8rem">
        주문 상품
      </Title>
      {carts.map(cart => (
        <CartHistoryItem key={cart.id} cart={cart} />
      ))}
    </Stack>
  );
};

const CartHistoryItem = ({ cart }) => {
  const { color, name, price, imgURL, selectedSize, quantity } = cart;

  return (
    <Group align="flex-start" fz="1.4rem">
      <div style={{ width: '60px', minWidth: '60px' }}>
        <Image src={imgURL} alt={name} withPlaceholder sx={{ img: { width: '60px' } }} />
      </div>
      <Stack pl="2rem" align="flex-start" justify="flex-start" spacing={0} maw="fit-content">
        <Title fz="1.4rem" fw="bold" c="#111" sx={{ cursor: 'pointer' }}>
          {name}
        </Title>
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

export default Order;
