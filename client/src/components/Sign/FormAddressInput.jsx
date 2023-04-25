import React from 'react';
import { TextInput } from '@mantine/core';

// FormAddressInput Component
const FormAddressInput = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState }) => (
  <TextInput
    type={inputType}
    label={name}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    autoComplete="off"
    readOnly
    w="40rem"
    h="3.8rem"
    mb="3.5rem"
    {...register(id)}
    error={formState?.errors[id]?.message}
  />
);

export default FormAddressInput;
