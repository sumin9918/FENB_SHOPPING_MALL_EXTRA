import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Group, Stack, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { ChangeButton } from 'components/Account';
import { FormInput } from 'components/Sign';
import { checkCorrespondPassword } from 'api/fetch';
import { useUpdateUserInfoMutation } from 'hooks/mutation';
import { passwordSchema } from 'schema';

const PasswordInput = ({ handleCloseModeClick }) => {
  const { handleSubmit, register, formState, setError } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const { mutateAsync: updateUserInfo } = useUpdateUserInfoMutation();

  const handleCorrespondBlur = async e => {
    try {
      const data = await checkCorrespondPassword({ currentPassword: e.target.value });

      setError('currentPassword', {
        type: 'custom',
        message: data.isCorrespond ? '' : '현재 비밀번호와 일치하지 않습니다.',
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleNameSubmit = async ({ newPassword, currentPassword }) => {
    try {
      await updateUserInfo({ password: newPassword, currentPassword });

      handleCloseModeClick('password');
    } catch (e) {
      notifications.show({
        color: 'red',
        autoClose: 5000,
        title: '경고',
        message: '현재 비밀번호를 다시 입력해 주세요.',
        sx: { div: { fontSize: '1.6rem' } },
      });
    }
  };

  return (
    <Stack my="2rem">
      <Title>비밀번호 변경</Title>
      <form noValidate onSubmit={handleSubmit(handleNameSubmit)}>
        <FormInput
          formState={formState}
          id="currentPassword"
          label="현재 비밀번호"
          placeholder="현재 비밀번호를 입력하세요."
          register={register}
          type="password"
          onBlur={handleCorrespondBlur}
        />
        <FormInput
          formState={formState}
          id="newPassword"
          label="새 비밀번호"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          type="password"
        />
        <FormInput
          formState={formState}
          id="confirmNewPassword"
          label="새 비밀번호 확인"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          type="password"
        />
        <Group position="center" w="100%">
          <ChangeButton handleClick={handleCloseModeClick} label="password">
            취소
          </ChangeButton>
          <ChangeButton label="password" type="submit">
            저장
          </ChangeButton>
        </Group>
      </form>
    </Stack>
  );
};

export default PasswordInput;
