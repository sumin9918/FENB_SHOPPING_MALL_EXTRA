import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Center, Stack, useMantineColorScheme } from '@mantine/core';
import { addAddressSchema } from '../../schema';
import { addAddress } from '../../api/fetch';
import { INIT_FIELD } from '../../constants';
import FormInput from '../Sign/FormInput';
import FormPhoneInput from '../Sign/FormPhoneInput';
import FormZoneCodeInput from '../Sign/FormZoneCodeInput';
import FormMainAddressInput from '../Sign/FormMainAddressInput';
import CustomButton from '../CustomButton';

const InputAddress = ({ setFiled, changeSelectedAddress }) => {
  const { handleSubmit, register, formState, trigger, setValue } = useForm({
    resolver: zodResolver(addAddressSchema),
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
    setFiled({ ...INIT_FIELD, info: true });
  };

  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack
      w="100%"
      align="center"
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
        <FormMainAddressInput
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
        <Center>
          <CustomButton
            variant="outline"
            color={colorScheme ? 'gray' : 'dark'}
            type="submit"
            sx={{ width: '20rem', ':hover': { borderColor: '#228be6', color: '#228be6' } }}>
            배송지 추가
          </CustomButton>
        </Center>
      </form>
    </Stack>
  );
};

export default InputAddress;
