import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Center, Container, useMantineTheme } from '@mantine/core';

import { CustomButton } from 'components';
import { FormInput, FormAddressInput } from 'components/Sign';
import { addAddress } from 'api/fetch';
import { addressSchema } from 'schema';
import { INIT_FIELD } from 'constants';

const InputAddress = ({ setFiled, changeSelectedAddress }) => {
  const { colors } = useMantineTheme();
  const { handleSubmit, register, formState, trigger, setValue } = useForm({
    resolver: zodResolver(addressSchema),
  });

  const handleAddAddress = async data => {
    const newAddress = {
      recipient: data.name,
      recipientPhone: data.phone,
      mainAddress: data.mainAddress,
      detailAddress: data.detailAddress,
      postcode: data.postcode,
    };

    const { id } = await addAddress(newAddress);

    changeSelectedAddress({ ...newAddress, id });
    setFiled({ ...INIT_FIELD, info: true });
  };

  return (
    <Container miw="45rem">
      <form noValidate onSubmit={handleSubmit(handleAddAddress)}>
        <FormInput
          formState={formState}
          id="name"
          label="이름"
          placeholder="김펜비"
          register={register}
          type="text"
          withAsterisk
        />
        <FormInput
          formState={formState}
          id="phone"
          label="휴대전화번호"
          placeholder="'-' 없이 입력"
          register={register}
          setValue={setValue}
          trigger={trigger}
          type="tel"
          withAsterisk
        />
        <FormAddressInput
          formState={formState}
          id="postcode"
          label="우편번호"
          placeholder="주소찾기 버튼을 클릭주세요."
          register={register}
          setValue={setValue}
          type="text"
          readOnly
          withAsterisk
        />
        <FormInput
          formState={formState}
          id="mainAddress"
          label="주소"
          placeholder="주소를 선택하시면 자동으로 입력됩니다."
          register={register}
          type="text"
          withAsterisk
        />
        <FormInput
          formState={formState}
          id="detailAddress"
          label="상세주소"
          placeholder="상세 주소를 입력하세요."
          register={register}
          type="text"
        />
        <Center>
          <CustomButton
            color="gray"
            type="submit"
            variant="outline"
            sx={{
              width: '20rem',
              ':hover': { backgroundColor: 'transparent', borderColor: colors.blue[6], color: colors.blue[6] },
            }}>
            배송지 추가
          </CustomButton>
        </Center>
      </form>
    </Container>
  );
};

export default InputAddress;
