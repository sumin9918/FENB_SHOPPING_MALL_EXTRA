import axios from 'axios';
import { useMantineColorScheme, Stack, Title, Center } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormInput,
  FormMainAddressInput,
  FormZoneCodeInput,
  FormEmailInput,
  FormPhoneInput,
  CustomButton,
  CustomLink,
} from '../components';
import { signupSchema } from '../schema';

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
      <Title order={2} mt="6rem" mb="3rem" fz="3.2rem">
        회원 가입
      </Title>
      <form noValidate onSubmit={handleSubmit(handleSignUp)}>
        <FormEmailInput
          inputType="text"
          id="email"
          name="이메일 주소"
          // placeholder="예) fenb@fenb.com"
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormInput
          inputType="text"
          id="name"
          name="이름"
          // placeholder="예) 김펜비"
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormPhoneInput
          inputType="tel"
          id="phone"
          name="휴대전화번호"
          // placeholder="예) 010-1234-5678"
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
          description="영문 또는 숫자를 6~12자 입력하세요."
          label="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormInput
          inputType="password"
          id="confirmPassword"
          name="비밀번호 확인"
          // placeholder="영문 또는 숫자를 6~12자 입력하세요."
          register={register}
          formState={formState}
          withAsterisk
        />
        <FormZoneCodeInput
          inputType="text"
          id="postcode"
          name="우편번호"
          // placeholder="주소찾기 버튼을 클릭주세요."
          setValue={setValue}
          register={register}
          formState={formState}
        />
        <FormMainAddressInput
          inputType="text"
          id="mainAddress"
          name="주소"
          // placeholder="주소를 선택하시면 자동으로 입력됩니다."
          register={register}
          formState={formState}
        />
        <FormInput
          inputType="text"
          id="detailAddress"
          name="상세주소"
          // placeholder="상세 주소를 입력하세요."
          register={register}
          formState={formState}
        />
        <CustomButton
          type="submit"
          w="40rem"
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          sx={{
            '@media (max-width: 765px)': {
              width: '100vw',
            },
          }}>
          가입하기
        </CustomButton>
        <Center mt="2rem">
          회원이신가요?
          <CustomLink to={'/signin'}>로그인</CustomLink>
        </Center>
      </form>
    </Stack>
  );
};
export default SignUp;
