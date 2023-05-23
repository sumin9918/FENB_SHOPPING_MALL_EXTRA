import z from 'zod';

const addressSchema = z.object({
  name: z.string().min(1, { message: '이름을 입력해 주세요.' }),
  phone: z.string().regex(/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/, { message: '휴대전화 번호를 정확히 입력해주세요.' }),
  mainAddress: z.string().min(1, { message: '주소를 입력해 주세요.' }),
  detailAddress: z.string(),
  postcode: z.string().min(1, { message: '우편번호를 입력해 주세요.' }),
});

export default addressSchema;
