import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Group, Stack, Title } from '@mantine/core';

import { ChangeButton } from 'components/Account';
import { FormInput } from 'components/Sign';
import { userState } from 'recoil/atoms';
import { useUpdateUserInfoMutation } from 'hooks/mutation';
import { nameSchema } from 'schema';

const NameInput = ({ handleCloseModeClick, value }) => {
  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(nameSchema),
  });

  const { mutate: updateUserInfo } = useUpdateUserInfoMutation();

  const [user, setUser] = useRecoilState(userState);

  const handleNameSubmit = data => {
    updateUserInfo(data);
    setUser({ ...user, username: data.name });

    handleCloseModeClick('name');
  };

  return (
    <Stack my="2rem">
      <Title fz="2rem">이름 변경</Title>
      <form noValidate onSubmit={handleSubmit(handleNameSubmit)}>
        <FormInput
          formState={formState}
          id="name"
          label="새 이름"
          placeholder="이름을 입력하세요."
          register={register}
          size="4rem"
          type="text"
          value={value}
        />
        <Group position="center" w="100%">
          <ChangeButton handleClick={handleCloseModeClick} label="name">
            취소
          </ChangeButton>
          <ChangeButton label="name" type="submit">
            저장
          </ChangeButton>
        </Group>
      </form>
    </Stack>
  );
};

export default NameInput;
