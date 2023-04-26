import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { useMantineColorScheme, Button, Stack, Title, Center } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput, FormAddressInput, FormZoneCodeInput, FormEmailInput, FormPhoneInput } from '../components';
import { signupSchema } from '../schema';

// Styled Link
const SignInLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: blue;
  }
`;

// SignUp Component
const SignUp = () => {
  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  const { handleSubmit, register, formState, trigger, setValue } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const handleSignUp = async data => {
    try {
      const response = await axios.post('/api/auth/signup', {
        email: data.email,
        name: data.name,
        phone: data.phone,
        password: data.password,
        mainAddress: data.mainAddress,
        detailAddress: data.detailAddress,
        postcode: data.postcode,
      });

      notifications.show({
        color: 'blue',
        autoClose: 2000,
        title: '알림',
        message: response.data.message,
        sx: { div: { fontSize: '1.5rem' } },
      });

      navigate('/signin');
    } catch (error) {
      notifications.show({
        color: 'red',
        autoClose: 2000,
        title: '알림',
        message: error.response.data.message ? error.response.data.message : error.message,
        sx: { div: { fontSize: '1.5rem' } },
      });
    }
  };

  return (
    <Stack
      align="center"
      h="100rem"
      p="0"
      m="0"
      sx={{
        input: {
          padding: '0',
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
      <Title order={2} mt="6rem" mb="3rem" fz="3.2rem">
        회원 가입
      </Title>
      <form noValidate onSubmit={handleSubmit(handleSignUp)}>
        <FormEmailInput
          inputType="text"
          withAsterisk
          id="email"
          name="이메일 주소"
          placeholder="예) fenb@fenb.com"
          register={register}
          formState={formState}
        />
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
        <FormInput
          inputType="password"
          withAsterisk
          id="password"
          name="비밀번호"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          formState={formState}
        />
        <FormInput
          inputType="password"
          withAsterisk
          id="confirmPassword"
          name="비밀번호 확인"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          formState={formState}
        />
        <FormZoneCodeInput
          inputType="text"
          id="postcode"
          name="우편번호"
          placeholder="주소찾기 버튼을 클릭주세요."
          setValue={setValue}
          register={register}
          formState={formState}
        />
        <FormAddressInput
          inputType="text"
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
        <Button type="submit" w="40rem" h="5.2rem" p="0" color={colorScheme === 'dark' ? 'gray.6' : 'dark'} radius="md">
          가입하기
        </Button>
        <Center mt="2rem">
          회원이신가요?
          <SignInLink to={'/signin'}>로그인</SignInLink>
        </Center>
      </form>
    </Stack>
  );
};
export default SignUp;
