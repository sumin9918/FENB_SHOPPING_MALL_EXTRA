import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Stack, Group, useMantineColorScheme } from '@mantine/core';
import { useDefaultAddress, useOrderInfo } from '../../hooks/order';
import { INIT_FIELD, PATH } from '../../constants';
import Address from './Address';
import Coupons from './Coupons';
import SelectPaymentMethod from './SelectPaymentMethod';
import CustomButton from '../CustomButton';

const Payment = ({ changeDiscount, totalPrice }) => {
  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  const { defaultAddress, isValidAddress } = useDefaultAddress();
  const { changeAddressId, changeCouponId, changePaymentMethod, getOrderInfo } = useOrderInfo(changeDiscount);

  const [field, setFiled] = useState({ ...INIT_FIELD, info: isValidAddress, input: !isValidAddress });
  const selectedAddress = useRef(defaultAddress);

  const changeSelectedAddress = newAddress => {
    selectedAddress.current = newAddress;

    changeAddressId(newAddress.id);
  };

  return (
    <Stack w="66.66667%" pr="5rem" spacing="5rem">
      <Address
        field={field}
        setFiled={setFiled}
        selectedAddress={selectedAddress}
        changeSelectedAddress={changeSelectedAddress}
      />
      <Coupons changeCouponId={changeCouponId} totalPrice={totalPrice} />
      <SelectPaymentMethod changePaymentMethod={changePaymentMethod} />
      <Container w="30rem">
        <CustomButton
          w="100%"
          disabled={!field.info}
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          onClick={async () => {
            await postOrder(getOrderInfo());

            navigate(PATH.ORDER_COMPLETE);
          }}>
          주문결제
        </CustomButton>
      </Container>
    </Stack>
  );
};

export default Payment;
