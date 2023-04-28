import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Container,
  Stack,
  Group,
  Title,
  Text,
  Button,
  Radio,
  Image,
  Space,
  Center,
  Accordion,
  useMantineColorScheme,
} from '@mantine/core';
import styled from '@emotion/styled';
import { BsCheck2 } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { FormAddressInput, FormInput, FormPhoneInput, FormZoneCodeInput } from '../components';
import { cartsQuery, couponsQuery, userQuery } from '../api/loader';
import { addAddress } from '../api/address';
import { useChangeDefaultAddressMutation, useRemoveAddressMutation } from '../hooks/address';
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
  color: #fff;
  font-size: 1.6rem;
  font-weight: 'bold';

  :hover {
    background-color: #228be6;
  }
`;

// api --------------------------------------

const postOrder = async paymentInfo => {
  await axios.post('/api/order/pay', { ...paymentInfo });
};

const checkCoupon = async id => {
  const { data } = await axios.get(`/api/order/coupons/${id}`);

  return data;
};

const Order = () => {
  const { data: totalPrice } = useQuery(
    cartsQuery({
      select: carts => carts.reduce((acc, cart) => acc + cart.quantity * cart.price, 0),
    })
  );

  const [discount, setDiscount] = useState({ discountAmount: 0, discountedTotalPrice: totalPrice });

  const couponId = useRef(null);

  const changeCouponId = async newCouponId => {
    couponId.current = newCouponId;

    const data = await checkCoupon(newCouponId);

    setDiscount(data);
  };

  return (
    <Container size="1200px" w="100%" py="4rem" fz="1.6rem">
      <Title p="4.8rem" sx={{ textAlign: 'center' }}>
        결제하기
      </Title>
      <Group mih="5rem" justify="center" align="flex-start" spacing={0} px="0.8rem">
        <Payment couponId={couponId} changeCouponId={changeCouponId} totalPrice={totalPrice} />
        <CartHistory discount={discount} totalPrice={totalPrice} />
      </Group>
    </Container>
  );
};

const Payment = ({ couponId, changeCouponId, totalPrice }) => {
  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);

  const addressId = useRef(null);
  const paymentMethod = useRef('kakaoPay');

  const changeAddressId = newAddressId => {
    addressId.current = newAddressId;
  };

  const changePaymentMethod = newPaymentMethod => {
    paymentMethod.current = newPaymentMethod;
  };

  return (
    <Stack w="66.66667%" pr="5rem" spacing="5rem">
      <Address changeAddressId={changeAddressId} setDisabled={setDisabled} />
      <Coupons changeCouponId={changeCouponId} totalPrice={totalPrice} />
      <SelectPaymentMethod changePaymentMethod={changePaymentMethod} />
      <Container w="30rem">
        <CustomButton
          w="100%"
          disabled={disabled}
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          onClick={async () => {
            console.log({
              addressId: addressId.current,
              couponId: couponId.current,
              paymentMethod: paymentMethod.current,
            });

            await postOrder({
              addressId: addressId.current,
              couponId: couponId.current,
              paymentMethod: paymentMethod.current,
            });

            navigate(PATH.ORDER_COMPLETE);
          }}>
          주문결제
        </CustomButton>
      </Container>
    </Stack>
  );
};

const Address = ({ changeAddressId, setDisabled }) => {
  const { data: addresses } = useQuery(userQuery({ select: user => user.addresses }));

  const defaultAddress = !addresses.length ? {} : addresses.find(address => address.isDefault) ?? addresses[0];
  const isValidAddress = defaultAddress?.postcode !== '' ?? false;

  // TODO : 더 나은 방식 생각하기
  const [field, setFiled] = useState({ ...initField, info: isValidAddress, input: !isValidAddress });
  const selectedAddress = useRef(defaultAddress);
  changeAddressId(selectedAddress.current.id);

  const changeSelectedAddress = newAddress => {
    selectedAddress.current = newAddress;
  };

  setDisabled(!field.info);

  return (
    <Stack w="100%" p="2rem">
      <Group position="apart" pt="1.2rem" pb="2.8rem">
        <Title fz="2.4rem" fw={500} sx={{ lineHeight: '2.8rem' }}>
          배송 옵션{field.info && <BsCheck2 color="rgb(18, 138, 9)" />}
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
      {field.edit && (
        <EditAddress
          setFiled={setFiled}
          selectedAddress={selectedAddress}
          changeSelectedAddress={changeSelectedAddress}
        />
      )}
      {field.input && <InputAddress setFiled={setFiled} changeSelectedAddress={changeSelectedAddress} />}
    </Stack>
  );
};

const AddressInfo = ({ selectedAddress }) => {
  const { recipient, mainAddress, detailAddress, postcode, recipientPhone } = selectedAddress.current;

  return (
    <Stack w="100%" spacing={0}>
      <Title fz="1.6rem">배송 주소</Title>
      <Text>{recipient}</Text>
      <Text>{mainAddress}</Text>
      <Text>{detailAddress}</Text>
      <Text>{postcode}</Text>
      <Text>{recipientPhone}</Text>
      <Space h="xl" />
      <Title>배송 방법</Title>
      <Text fz="1.6rem">무료</Text>
    </Stack>
  );
};

const InputAddress = ({ setFiled, changeSelectedAddress }) => {
  const { handleSubmit, register, formState, trigger, setValue } = useForm({
    resolver: zodResolver(addAdressSchema),
  });

  const handleAddAddress = async data => {
    const newAddress = {
      recipient: data.name,
      recipientPhone: data.phone,
      mainAddress: data.mainAddress,
      detailAddress: data.detailAddress,
      postcode: data.postcode,
    };

    const res = await addAddress(newAddress);

    changeSelectedAddress({ ...newAddress, id: res.data.id });
    setFiled({ ...initField, info: true });
  };

  return (
    <Stack
      w="100%"
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
        <Group position="right">
          <CustomButton type="submit" sx={{ width: '20rem' }}>
            배송지 추가
          </CustomButton>
        </Group>
      </form>
    </Stack>
  );
};

const EditAddress = ({ setFiled, selectedAddress, changeSelectedAddress }) => {
  const { data: addresses } = useQuery(userQuery({ select: user => user.addresses }));

  return (
    <Stack w="100%" px="2rem">
      {addresses.length ? (
        addresses.map(address => (
          <EditAddressItem
            key={address.id}
            address={address}
            setFiled={setFiled}
            changeSelectedAddress={changeSelectedAddress}
            selectedAddress={selectedAddress}
          />
        ))
      ) : (
        <Center>
          <Text>배송지를 입력해 주세요</Text>
        </Center>
      )}
      <Group position="right">
        <CustomButton sx={{ width: '20rem' }} onClick={() => setFiled({ ...initField, input: true })}>
          새 배송지 추가
        </CustomButton>
      </Group>
    </Stack>
  );
};

const EditAddressItem = ({ address, setFiled, selectedAddress, changeSelectedAddress }) => {
  const { id, recipient, mainAddress, detailAddress, postcode, recipientPhone, isDefault } = address;

  const { mutate: removeAddress } = useRemoveAddressMutation();
  const { mutate: changeDefaultAddress } = useChangeDefaultAddressMutation();

  return (
    <Container
      key={id}
      p="0.8rem"
      size="content-fit"
      sx={{
        width: '100%',
        border: `1px solid ${selectedAddress.current.id === id ? 'black' : 'lightgray'}`,
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={() => {
        changeSelectedAddress(address);
        setFiled({ ...initField, info: true });
      }}>
      <Group position="apart" align="flex-start">
        <Stack spacing={0}>
          <Group spacing="1.2rem">
            <Text>{recipient}</Text>
            {isDefault && <Text>[기본 배송지]</Text>}
          </Group>
          <Text>{mainAddress}</Text>
          <Text>{detailAddress}</Text>
          <Text>{postcode}</Text>
          <Text>{recipientPhone}</Text>
        </Stack>
        <Stack align="flex-end" justify="space-between" h="12.4rem">
          <Button
            variant="subtle"
            color="dark"
            p="0.4rem"
            w="3.2rem"
            h="3.2rem"
            sx={{ zIndex: '9999', ':hover': { background: 'transparent' } }}
            onClick={e => {
              e.stopPropagation();
              removeAddress(id);
            }}>
            <Text fz="1.6rem">X</Text>
          </Button>
          <Button
            variant="subtle"
            color="dark"
            sx={{ zIndex: '9999', ':hover': { background: 'transparent' } }}
            onClick={e => {
              e.stopPropagation();
              changeDefaultAddress(id);
            }}>
            <Text fz="1.2rem" fw="normal" sx={{ textDecoration: 'underline' }}>
              기본 배송지로 변경
            </Text>
          </Button>
        </Stack>
      </Group>
    </Container>
  );
};

const Coupons = ({ changeCouponId, totalPrice }) => {
  const { data: filteredCoupons } = useQuery(
    couponsQuery({
      select: coupons => coupons.filter(coupon => coupon.minimumPrice < totalPrice),
    })
  );

  return (
    <Stack w="100%" px="2rem">
      <Title fz="2.4rem" fw={500}>
        쿠폰
      </Title>
      <Accordion variant="separated">
        <Accordion.Item value="coupons">
          <Accordion.Control fz="1.6rem">쿠폰을 선택하세요</Accordion.Control>
          <Accordion.Panel>
            <Radio.Group name="coupons" onChange={changeCouponId}>
              <Stack mt="xs" spacing="0.8rem">
                {filteredCoupons.map(({ id, title, endTime }) => (
                  <Radio
                    key={id}
                    size="lg"
                    value={`${id}`}
                    label={<CouponName title={title} endTime={endTime} />}
                    sx={{ '.mantine-Radio-labelWrapper': { width: '100%' } }}
                  />
                ))}
              </Stack>
            </Radio.Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

const ONE_DAY = 1000 * 60 * 60 * 24;

const CouponName = ({ title, endTime }) => {
  const currentTime = new Date();
  const leftDay = Math.floor((Date.parse(endTime) - Date.parse(currentTime)) / ONE_DAY);

  return (
    <Group position="apart" px="0.4rem" fz="1.6rem">
      <Text>{title}</Text>
      <Text c="crimson">{leftDay}일 남음</Text>
    </Group>
  );
};

const paymentMethods = [
  { value: 'kakaoPay', label: '카카오페이' },
  { value: 'creditCard', label: '신용카드' },
  { value: 'naverPay', label: '네이버페이' },
  { value: 'applePay', label: '애플페이' },
  { value: 'accountTransfer', label: '실시간 계좌이체' },
];

const SelectPaymentMethod = ({ changePaymentMethod }) => (
  <Stack w="100%" px="2rem">
    <Title fz="2.4rem" fw={500}>
      결제
    </Title>
    <Radio.Group
      defaultValue={paymentMethods[0].value}
      name="paymentMethods"
      onChange={e => {
        changePaymentMethod(e);
      }}>
      <Stack mt="xs" spacing="0.8rem">
        {paymentMethods.map(({ value, label }) => (
          <Radio key={value} value={value} label={label} size="xl" />
        ))}
      </Stack>
    </Radio.Group>
  </Stack>
);

// const SelectPaymentMethodLabel = ({ value, label }) => (
//   <Group px="0.4rem" fz="1.6rem">
//     <Image src={`images/products/${value}`} />
//     <Text span>{label}</Text>
//   </Group>
// );

const CartHistory = ({ discount, totalPrice }) => {
  const { colorScheme } = useMantineColorScheme();

  const { discountAmount, discountedTotalPrice } = discount;

  return (
    <Stack w="33.33333%" px="0.8rem" c={colorScheme === 'dark' ? 'gray.6' : 'dark'}>
      <Title>장바구니</Title>
      <Group position="apart">
        <Text>상품 금액</Text>
        <Text>{totalPrice.toLocaleString()} 원</Text>
      </Group>
      <Group position="apart">
        <Text>쿠폰 할인액</Text>
        <Text>{discountAmount.toLocaleString()} 원</Text>
      </Group>
      <Group position="apart">
        <Text>배송비</Text>
        <Text>0 원</Text>
      </Group>
      <Group position="apart">
        <Text>총 결제 금액</Text>
        <Text>{discountedTotalPrice.toLocaleString()} 원</Text>
      </Group>
      <CartHistoryItemList />
    </Stack>
  );
};

const CartHistoryItemList = () => {
  const { data: carts } = useQuery(cartsQuery());

  return (
    <Stack mx="0.8rem" mb="2rem" pt="2.4rem">
      <Title fz="1.6rem" fw="bold" mb="0.8rem">
        주문 상품
      </Title>
      {carts.map(cart => (
        <CartHistoryItem key={`${cart.id}-${cart.selectedSize}`} cart={cart} />
      ))}
    </Stack>
  );
};

const CartHistoryItem = ({ cart }) => {
  const { colorScheme } = useMantineColorScheme();

  const { color, name, price, imgURL, selectedSize, quantity } = cart;

  return (
    <Group align="flex-start" fz="1.4rem">
      <div style={{ width: '70px', minWidth: '70px' }}>
        <Image src={imgURL} alt={name} withPlaceholder sx={{ img: { width: '70px' } }} />
      </div>
      <Stack pl="2rem" align="flex-start" justify="flex-start" spacing={0} maw="fit-content">
        <Title fz="1.4rem" fw="bold" c={colorScheme === 'dark' ? 'gray.6' : '#111'} sx={{ cursor: 'pointer' }}>
          {name}
        </Title>
        <Text>사이즈 : {selectedSize}</Text>
        <Text>색상 : {COLORS[color].kr}</Text>
        <Text>
          수량 : {quantity} / {price.toLocaleString()}
        </Text>
        <Text>가격 {(price * quantity).toLocaleString()}</Text>
      </Stack>
    </Group>
  );
};

export default Order;
