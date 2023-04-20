import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { TextInput, Button, Container, Image, Stack, Center, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useForm, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { debounce } from 'lodash';
import { userState } from '../recoil/atoms';
// import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

// styled emotion
const SignUpLink = styled(Link)`
  margin-left: 1rem;

  color: blue;

  &:visited {
    color: blue;
  }

  &:hover {
    color: purple;
  }
`;

// zod Validation
const validationSchema = z.object({
  email: z.string().email({ message: '이메일 주소를 정확히 입력해주세요.' }),
  password: z.string().regex(/^[A-Za-z0-9]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

// InputContainer Component
const InputContainer = ({ inputType, id, name, control, trigger, placeholder, withAsterisk = false }) => {
  const {
    field,
    fieldState: { isDirty, error },
  } = useController({
    name: id,
    control,
    defaultValue: '',
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkValidation = React.useCallback(
    debounce(() => {
      trigger(id);

      if (id === 'password' && isDirty) trigger('confirmPassword');
    }, 300),
    [isDirty]
  );

  const handleChange = e => {
    field.onChange(e);

    checkValidation();
  };

  return (
    <Container>
      <TextInput
        withAsterisk={withAsterisk}
        w="40rem"
        h="3.8rem"
        // size="xl"
        mb="3.5rem"
        type={inputType}
        label={name}
        placeholder={placeholder}
        value={field.value}
        autoComplete="off"
        onChange={handleChange}
        error={error && isDirty ? error.message : null}
      />
    </Container>
  );
};

// SignIn Component
const SignIn = () => {
  const setUsers = useSetRecoilState(userState);

  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    handleSubmit,
    control,
    trigger,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async data => {
    try {
      const response = await axios.post('/api/auth/signin', {
        email: data.email,
        password: data.password,
      });

      setUsers({ ...response.data });
      console.log(response.data); // 서버 응답을 출력

      if (state) {
        navigate(state);
      } else {
        navigate('/signup');
      }
    } catch (error) {
      notifications.show({
        color: 'red',
        autoClose: 2000,
        title: '알림',
        message: error.response.data.error,
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
        <Image
          width="40rem"
          mb="2rem"
          maw="60rem"
          mx="auto"
          src="images/logo/loginPageLogo.svg"
          alt="loginPageLogoImage"
        />
      </Title>
      <form noValidate>
        <InputContainer
          inputType="text"
          id="email"
          name="이메일 주소"
          placeholder="예) fenb@fenb.com"
          control={control}
          trigger={trigger}
        />
        <InputContainer inputType="password" id="password" name="비밀번호" control={control} trigger={trigger} />
        <Button
          w="40rem"
          h="5.2rem"
          p="0"
          color={!isValid ? 'gray' : 'dark'}
          radius="md"
          disabled={!isValid}
          onClick={handleSubmit(handleLogin)}>
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
