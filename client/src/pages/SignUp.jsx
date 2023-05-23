import { useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Stack, Title, Center, useMantineTheme, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { CustomButton } from 'components';
import { FormInput, FormAddressInput } from 'components/Sign';
import { checkEmailDuplicate, signUp } from 'api/fetch';
import { signupSchema } from 'schema';
import { PATH } from 'constants';

const SignUp = () => {
  const { colors, colorScheme } = useMantineTheme();

  const { state } = useLocation();
  const navigate = useNavigate();
  const { handleSubmit, register, formState, setValue } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const [error, setError] = useState('');

  const handleEmailDuplicateBlur = async e => {
    try {
      const data = await checkEmailDuplicate(e.target.value);

      setError(data.isDuplicate ? '이미 사용중인 이메일 입니다.' : '');
    } catch (error) {
      throw new Error(error);
    }
  };

  const handlePhoneNumberChange = e => {
    const formatted = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/(\d{0,3})(\d{0,4})(\d{0,4})/, '$1-$2-$3')
      .replace(/-{1,2}$/g, '');

    setValue('phone', formatted);
  };

  const handleSignUpSubmit = async data => {
    try {
      await signUp(data);

      navigate(PATH.SIGNIN);
      notifications.show({
        color: 'blue',
        autoClose: 2000,
        title: '알림',
        message: '회원가입이 완료되었습니다.',
        sx: { div: { fontSize: '1.5rem' } },
      });
    } catch (error) {
      notifications.show({
        color: 'red',
        autoClose: 2000,
        title: '알림',
        message: '필수 정보가 전달되지 않았습니다.',
        sx: { div: { fontSize: '1.5rem' } },
      });
    }
  };

  return (
    <Stack align="center" mih="90rem">
      <Title fz="3.2rem" mb="3rem" mt="6rem" order={2}>
        회원 가입
      </Title>
      <form noValidate onSubmit={handleSubmit(handleSignUpSubmit)}>
        <FormInput
          error={error}
          formState={formState}
          id="email"
          label="이메일 주소"
          placeholder="fenb@fenb.com"
          register={register}
          type="text"
          withAsterisk
          onBlur={handleEmailDuplicateBlur}
        />
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
          type="tel"
          withAsterisk
          onChange={handlePhoneNumberChange}
        />
        <FormInput
          formState={formState}
          id="password"
          label="비밀번호"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          type="password"
          withAsterisk
        />
        <FormInput
          formState={formState}
          id="confirmPassword"
          label="비밀번호 확인"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          type="password"
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
        />
        <FormInput
          formState={formState}
          id="mainAddress"
          label="주소"
          placeholder="주소를 선택하시면 자동으로 입력됩니다."
          register={register}
          type="text"
          readOnly
        />
        <FormInput
          formState={formState}
          id="detailAddress"
          label="상세주소"
          placeholder="상세 주소를 입력하세요."
          register={register}
          type="text"
        />
        <CustomButton color={colorScheme === 'dark' ? 'gray.6' : 'dark'} type="submit" w="40rem">
          가입하기
        </CustomButton>
        <Center fz="1.6rem" mt="2rem">
          회원이신가요?
          <Text
            component={Link}
            fw="bold"
            ml="1rem"
            state={state}
            to={PATH.SIGNIN}
            sx={{
              ':hover': {
                color: colors.blue[6],
              },
            }}>
            로그인
          </Text>
        </Center>
      </form>
    </Stack>
  );
};
export default SignUp;
