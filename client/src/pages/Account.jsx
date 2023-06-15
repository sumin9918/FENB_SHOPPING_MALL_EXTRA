import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Group, Stack, Text, TextInput, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { userState } from 'src/recoil/atoms';
import { FormInput, FormPhoneInput } from 'components/Sign';
import { checkCorrespondPassword } from 'api/fetch';
import { userQuery } from 'api/query';
import { useUpdateUserInfoMutation } from 'hooks/mutation';
import { makeCipher } from 'utils';
import { passwordSchema, nameSchema, phoneSchema } from 'schema';
import { PATH } from 'constants';

const LABELS = {
  email: '이메일 주소',
  password: '비밀번호',
  name: '이름',
  phone: '전화번호',
};

const Account = () => {
  const { colors, colorScheme } = useMantineTheme();

  const { data: userInfo } = useQuery(userQuery());

  const [changeMode, setChangeMode] = useState({ password: false, name: false, phone: false });

  const { email, password, name, phone } = makeCipher(userInfo);

  const handleOpenModeClick = label => setChangeMode({ ...changeMode, [label]: true });
  const handleCloseModeClick = label => setChangeMode({ ...changeMode, [label]: false });

  return (
    <Stack pb="2rem" px="0.8rem" spacing="3.2rem" w="100%">
      <Title fz="2.4rem" mb="3.2rem" pb="2rem" sx={{ borderBottom: `2px solid ${colors.gray[8]}` }}>
        계정 정보
      </Title>
      <Stack maw="50rem" pl="2rem">
        <Title fz="2rem" pb="0.8rem">
          내 계정
        </Title>
        <UserInfo label="email" placeholder={email} />
        {changeMode.password ? (
          <PasswordInput handleCloseModeClick={handleCloseModeClick} />
        ) : (
          <UserInfo handleOpenModeClick={handleOpenModeClick} label="password" placeholder={password} />
        )}
      </Stack>
      <Stack maw="50rem" pl="2rem">
        <Title fz="2rem" pb="0.8rem">
          내 정보
        </Title>
        {changeMode.name ? (
          <NameInput handleCloseModeClick={handleCloseModeClick} value={userInfo.name} />
        ) : (
          <UserInfo handleOpenModeClick={handleOpenModeClick} label="name" placeholder={name} />
        )}
        {changeMode.phone ? (
          <PhoneInput handleCloseModeClick={handleCloseModeClick} value={userInfo.name} />
        ) : (
          <UserInfo handleOpenModeClick={handleOpenModeClick} label="phone" placeholder={phone} />
        )}
      </Stack>
      <Link to={PATH.WITHDRAWAL}>
        <Text
          c="gray.6"
          fz="1.4rem"
          pl="2rem"
          sx={{ textDecoration: 'underline', cursor: 'pointer', ':hover': { color: colors.gray[7] } }}
          w="fit-content">
          회원탈퇴
        </Text>
      </Link>
    </Stack>
  );
};

const UserInfo = ({ label, placeholder, handleOpenModeClick }) => (
  <TextInput
    label={LABELS[label]}
    m="2rem 0"
    placeholder={placeholder}
    size="4rem"
    rightSection={
      <ChangeButton disabled={!handleOpenModeClick} handleClick={handleOpenModeClick} label={label}>
        변경
      </ChangeButton>
    }
    styles={({ colors }) => ({
      input: {
        fontSize: '1.6rem',
        backgroundColor: 'transparent',
        height: '5rem',
        padding: '0',
        border: 'none',
        borderBottom: `1px solid ${colors.gray[3]}`,
        '::placeholder': { color: colors.gray[8] },
      },
      label: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: colors.gray[5],
      },
    })}
    readOnly
  />
);

const PasswordInput = ({ handleCloseModeClick }) => {
  const { handleSubmit, register, formState, setError } = useForm({
    resolver: zodResolver(passwordSchema),
  });

  const { mutateAsync: updateUserInfo, reset } = useUpdateUserInfoMutation();

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
    <form noValidate onSubmit={handleSubmit(handleNameSubmit)}>
      <FormInput
        formState={formState}
        id="name"
        label="이름"
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
  );
};

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
    <form noValidate onSubmit={handleSubmit(handlePhoneSubmit)}>
      <FormPhoneInput
        formState={formState}
        id="phone"
        label="휴대전화번호"
        placeholder="'-' 없이 입력"
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
  );
};

const ChangeButton = ({ children, label, handleClick, type = 'button', disabled = false }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Button
      color={colorScheme === 'dark' ? 'gray.6' : 'gray'}
      disabled={disabled}
      h="3.4rem"
      m="0.3rem 2rem 0 0"
      p="0.7rem 1.4rem"
      size="1.5rem"
      type={type}
      variant="outline"
      w="12rem"
      sx={({ colors }) => ({
        borderRadius: '3rem',
        ':hover': { border: `1px solid ${colors.blue[6]}`, color: colors.blue[6] },
      })}
      onClick={() => handleClick && handleClick(label)}>
      {children}
    </Button>
  );
};

export default Account;
