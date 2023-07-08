import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Group, Stack, Title } from '@mantine/core';

import { ChangeButton } from 'components/Account';
import { FormPhoneInput } from 'components/Sign';
import { useUpdateUserInfoMutation } from 'hooks/mutation';
import { phoneSchema } from 'schema';

const PhoneInput = ({ handleCloseModeClick, value }) => {
  const { handleSubmit, register, formState, setValue } = useForm({
    resolver: zodResolver(phoneSchema),
  });

  const { mutate: updateUserInfo } = useUpdateUserInfoMutation();

  const handlePhoneSubmit = data => {
    updateUserInfo(data);

    handleCloseModeClick('phone');
  };

  return (
    <Stack my="2rem">
      <Title fz="2rem">비밀번호 변경</Title>
      <form noValidate onSubmit={handleSubmit(handlePhoneSubmit)}>
        <FormPhoneInput
          formState={formState}
          id="phone"
          label="새 전화번호"
          placeholder="' - ' 없이 입력하세요."
          register={register}
          setValue={setValue}
          type="tel"
          value={value}
        />
        <Group position="center" w="100%">
          <ChangeButton handleClick={handleCloseModeClick} label="phone">
            취소
          </ChangeButton>
          <ChangeButton label="phone" type="submit">
            저장
          </ChangeButton>
        </Group>
      </form>
    </Stack>
  );
};

export default PhoneInput;
