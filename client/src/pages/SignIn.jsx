import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Image, Stack, Center, Title, useMantineTheme, Text, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

import { FormInput } from 'components/Sign';
import { signIn } from 'api/fetch';
import { signinSchema } from 'schema';
import { PATH } from 'constants';
import { userState } from 'recoil/atoms';

const SignIn = () => {
  const { colors, colorScheme } = useMantineTheme();

  const navigate = useNavigate();
  const { state } = useLocation();
  const setUser = useSetRecoilState(userState);
  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const handleSignInSubmit = async data => {
    try {
      const user = await signIn(data);

      notifications.show({
        color: 'blue',
        autoClose: 2000,
        title: '알림',
        message: `${user.username}님 환영합니다.`,
        sx: { div: { fontSize: '1.5rem' } },
      });

      setUser(user);
      navigate(state ?? PATH.MAIN);
    } catch (error) {
      notifications.show({
        color: 'red',
        autoClose: 2000,
        title: '알림',
        message: '등록되지 않은 사용자입니다.',
        sx: { div: { fontSize: '1.5rem' } },
      });
    }
  };

  return (
    <Stack align="center" mih="46rem">
      <Title order={2}>
        <Image
          alt="login logo"
          src={`images/logo/${colorScheme === 'dark' ? 'darkLogin' : 'login'}.svg`}
          width="40rem"
        />
      </Title>
      <form noValidate onSubmit={handleSubmit(handleSignInSubmit)}>
        <FormInput
          formState={formState}
          id="email"
          label="이메일 주소"
          placeholder="fenb@fenb.com"
          register={register}
          type="text"
        />
        <FormInput
          formState={formState}
          id="password"
          label="비밀번호"
          placeholder="******"
          register={register}
          type="password"
        />
        <Button
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          fz="1.6rem"
          h="6rem"
          hw="bold"
          mt="2rem"
          p="1.8rem 2.4rem"
          type="submit"
          w="40rem"
          sx={{
            borderRadius: '30px',
          }}>
          로그인
        </Button>
        <Center fz="1.6rem" pt="2rem">
          회원이 아니신가요?
          <Text
            component={Link}
            fw="bold"
            ml="1rem"
            state={state}
            to={PATH.SIGNUP}
            sx={{
              ':hover': {
                color: colors.blue[6],
              },
            }}>
            회원가입
          </Text>
        </Center>
      </form>
    </Stack>
  );
};
export default SignIn;
