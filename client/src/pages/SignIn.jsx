import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { useMantineColorScheme, Button, Image, Stack, Center, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { FormInput } from '../components';
import { signinSchema } from '../schema';

// Styled Link
const SignUpLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: blue;
  }
`;

// SignIn Component
const SignIn = () => {
  const { colorScheme } = useMantineColorScheme();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { state } = useLocation();

  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const handleLogin = async data => {
    try {
      const response = await axios.post('/api/auth/signin', {
        email: data.email,
        password: data.password,
      });

      notifications.show({
        color: 'blue',
        autoClose: 2000,
        title: '알림',
        message: `${response.data.username}님 환영합니다.`,
        sx: { div: { fontSize: '1.5rem' } },
      });

      queryClient.removeQueries({ queryKey: ['user'] });

      if (state) {
        navigate(state);
      } else {
        navigate('/');
      }
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
      h="75.5rem"
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
      <Title order={2}>
        {colorScheme === 'dark' ? (
          <Image
            width="40rem"
            mb="2rem"
            maw="60rem"
            mx="auto"
            src="images/logo/darkmodeLoginPageLogo.svg"
            alt="darkmodeLoginPageLogoImage"
          />
        ) : (
          <Image
            width="40rem"
            mb="2rem"
            maw="60rem"
            mx="auto"
            src="images/logo/loginPageLogo.svg"
            alt="loginPageLogoImage"
          />
        )}
      </Title>
      <form noValidate onSubmit={handleSubmit(handleLogin)}>
        <FormInput
          inputType="text"
          id="email"
          name="이메일 주소"
          placeholder="예) fenb@fenb.com"
          register={register}
          formState={formState}
        />
        <FormInput inputType="password" id="password" name="비밀번호" register={register} formState={formState} />
        <Button type="submit" w="40rem" h="5.2rem" p="0" color={colorScheme === 'dark' ? 'gray.6' : 'dark'} radius="md">
          로그인
        </Button>
        <Center mt="2rem">
          회원이 아니신가요?
          <SignUpLink to={'/signup'}>회원가입</SignUpLink>
        </Center>
      </form>
    </Stack>
  );
};
export default SignIn;
