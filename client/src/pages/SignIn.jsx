import axios from 'axios';
import { useMantineColorScheme, Image, Stack, Center, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSetRecoilState } from 'recoil';
import { CustomButton, CustomLink, FormInput } from '../components';
import { signinSchema } from '../schema';
import { userState } from '../recoil/atoms';

const SignIn = () => {
  const { colorScheme } = useMantineColorScheme();
  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();
  const { state } = useLocation();

  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const handleSignIn = async data => {
    try {
      const response = await axios.post('/api/auth/signin', {
        email: data.email,
        password: data.password,
      });

      setUser(response.data);

      notifications.show({
        color: 'blue',
        autoClose: 2000,
        title: '알림',
        message: `${response.data.username}님 환영합니다.`,
        sx: { div: { fontSize: '1.5rem' } },
      });

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
      sx={{
        marginLeft: '3rem',
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
      <form noValidate onSubmit={handleSubmit(handleSignIn)}>
        <FormInput
          inputType="text"
          id="email"
          name="이메일 주소"
          // placeholder="예) fenb@fenb.com"
          register={register}
          formState={formState}
        />
        <FormInput inputType="password" id="password" name="비밀번호" register={register} formState={formState} />
        <CustomButton
          type="submit"
          w="40rem"
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          sx={{
            '@media (max-width: 765px)': {
              width: '100vw',
            },
          }}>
          로그인
        </CustomButton>
        <Center mt="2rem">
          회원이 아니신가요?
          <CustomLink to={'/signup'}>회원가입</CustomLink>
        </Center>
      </form>
    </Stack>
  );
};
export default SignIn;
