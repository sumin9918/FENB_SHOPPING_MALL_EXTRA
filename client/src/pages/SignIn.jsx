import { useMantineColorScheme, Image, Stack, Center, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSetRecoilState } from 'recoil';
import { CustomButton, CustomLink } from '../components';
import { FormInput } from '../components/Sign';
import { signinSchema } from '../schema';
import { userState } from '../recoil/atoms';
import { requestSignIn } from '../api/fetch';
import { MEDIAQUERY_WIDTH, PATH } from '../constants';
import { useMediaQuery } from '../hooks';

const SignIn = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineColorScheme();
  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();
  const { state } = useLocation();

  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const handleSignIn = async signInInfo => {
    try {
      const data = await requestSignIn({ email: signInInfo.email, password: signInInfo.password });

      setUser(data);

      notifications.show({
        color: 'blue',
        autoClose: 2000,
        title: '알림',
        message: `${data.username}님 환영합니다.`,
        sx: { div: { fontSize: '1.5rem' } },
      });

      if (state) {
        navigate(state);
      } else {
        navigate(PATH.MAIN);
      }
    } catch (e) {
      notifications.show({
        color: 'red',
        autoClose: 2000,
        title: '알림',
        message: e.response.data.message ? e.response.data.message : e.message,
        sx: { div: { fontSize: '1.5rem' } },
      });
    }
  };

  return (
    <Stack
      align="center"
      h="75.5rem"
      ml="3rem"
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
      <form noValidate onSubmit={handleSubmit(handleSignIn)}>
        <FormInput
          inputType="text"
          id="email"
          name="이메일 주소"
          placeholder="fenb@fenb.com"
          register={register}
          formState={formState}
        />
        <FormInput inputType="password" id="password" name="비밀번호" register={register} formState={formState} />
        <CustomButton type="submit" w={matches ? '40rem' : '100vw'} color={colorScheme === 'dark' ? 'gray.6' : 'dark'}>
          로그인
        </CustomButton>
        <Center mt="2rem">
          회원이 아니신가요?
          <CustomLink to={PATH.SIGNIN}>회원가입</CustomLink>
        </Center>
      </form>
    </Stack>
  );
};
export default SignIn;
