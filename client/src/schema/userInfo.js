import z from 'zod';

export const passwordSchema = z
  .object({
    currentPassword: z.string().regex(/^[A-Za-z0-9]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
    newPassword: z.string().regex(/^[A-Za-z0-9]{6,12}$/, { message: '영문 또는 숫자를 6~12자 입력하세요.' }),
    confirmNewPassword: z.string().min(1, '패스워드를 확인해 주세요'),
  })
  .refine(data => data.newPassword === data.confirmNewPassword, {
    message: '패스워드가 일치하지 않습니다.',
    path: ['confirmNewPassword'],
  });

export const nameSchema = z.object({
  name: z.string().min(1, { message: '이름을 입력해 주세요.' }),
});

export const phoneSchema = z.object({
  phone: z.string().regex(/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/, { message: '휴대전화 번호를 정확히 입력해주세요.' }),
});
