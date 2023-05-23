import { useMantineColorScheme, Stack, Title, Center } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomButton, CustomLink } from '../components';
import { FormInput, FormEmailInput, FormPhoneInput, FormZoneCodeInput, FormMainAddressInput } from '../components/Sign';
import { signupSchema } from '../schema';
import { requestSignUp } from '../api/fetch';
import { MEDIAQUERY_WIDTH, PATH } from '../constants';
import { useMediaQuery } from '../hooks';

const SignUp = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  const { handleSubmit, register, formState, trigger, setValue } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const handleSignUp = async signUpInfo => {
    try {
      const { message } = await requestSignUp({
        email: signUpInfo.email,
        name: signUpInfo.name,
        phone: signUpInfo.phone,
        password: signUpInfo.password,
        mainAddress: signUpInfo.mainAddress,
        detailAddress: signUpInfo.detailAddress,
        postcode: signUpInfo.postcode,
      });

      notifications.show({
        color: 'blue',
        autoClose: 2000,
        title: '알림',
        message,
        sx: { div: { fontSize: '1.5rem' } },
      });

      navigate(PATH.SIGNIN);
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
      h="100rem"
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
      <Title order={2} mt="6rem" mb="3rem" fz="3.2rem">
        회원 가입
      </Title>
      <form noValidate onSubmit={handleSubmit(handleSignUp)}>
        <FormEmailInput
          inputType="text"
          id="email"
          name="이메일 주소"
          placeholder="fenb@fenb.com"
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormInput
          inputType="text"
          id="name"
          name="이름"
          placeholder="김펜비"
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormPhoneInput
          inputType="tel"
          id="phone"
          name="휴대전화번호"
          placeholder="'-' 없이 입력"
          trigger={trigger}
          setValue={setValue}
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormInput
          inputType="password"
          id="password"
          name="비밀번호"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormInput
          inputType="password"
          id="confirmPassword"
          name="비밀번호 확인"
          placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          formState={formState}
          withAsterisk
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
        <FormMainAddressInput
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
        <CustomButton type="submit" w={matches ? '40rem' : '100vw'} color={colorScheme === 'dark' ? 'gray.6' : 'dark'}>
          가입하기
        </CustomButton>
        <Center mt="2rem">
          회원이신가요?
          <CustomLink to={PATH.SIGNIN}>로그인</CustomLink>
        </Center>
      </form>
    </Stack>
  );
};
export default SignUp;
