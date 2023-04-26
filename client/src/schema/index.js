import z from 'zod';

// zod Validation
const signinSchema = z.object({
  email: z.string().email({ message: '이메일 주소를 정확히 입력해주세요.' }),
  password: z.string().regex(/^[A-Za-z0-9]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
});

const signupSchema = signinSchema
  .and(
    z.object({
      name: z.string().min(1, { message: '이름을 입력해 주세요.' }),
      phone: z.string().regex(/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/, { message: '휴대전화 번호를 정확히 입력해주세요.' }),
      confirmPassword: z.string().min(1, '패스워드를 확인해 주세요'),
      mainAddress: z.string(),
      detailAddress: z.string(),
      postcode: z.string(),
    })
  )
  .refine(data => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

const addAdressSchema = z.object({
  name: z.string().min(1, { message: '이름을 입력해 주세요.' }),
  phone: z.string().regex(/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/, { message: '휴대전화 번호를 정확히 입력해주세요.' }),
  mainAddress: z.string(),
  detailAddress: z.string(),
  postcode: z.string(),
});

export { signinSchema, signupSchema, addAdressSchema };
