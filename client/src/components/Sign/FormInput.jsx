import { TextInput } from '@mantine/core';

const FormInput = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState }) => (
  <TextInput
    type={inputType}
    label={name}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    autoComplete="off"
    {...register(id)}
    error={formState?.errors[id]?.message}
    w="40rem"
    h="3.8rem"
    mb="3.5rem"
    sx={{
      '@media (max-width: 765px)': {
        width: '100vw',
      },
    }}
  />
);
export default FormInput;
