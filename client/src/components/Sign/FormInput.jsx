import React from 'react';
import { TextInput } from '@mantine/core';

// InputContainer Component
const FormInput = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState }) => (
  <TextInput
    type={inputType}
    label={name}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    autoComplete="off"
    w="40rem"
    h="3.8rem"
    mb="3.5rem"
    {...register(id)}
    error={formState?.errors[id]?.message}
    sx={{
      '@media (max-width: 765px)': {
        width: '20rem',
      },
    }}
  />
);
export default FormInput;
