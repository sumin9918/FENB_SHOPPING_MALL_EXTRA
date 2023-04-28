import React from 'react';
import { TextInput } from '@mantine/core';

// FormPhoneInput Component
const FormPhoneInput = ({
  inputType,
  id,
  name,
  placeholder,
  withAsterisk = false,
  setValue,
  trigger,
  register,
  formState,
}) => {
  const addDash = str => {
    const phoneNumber = str;
    const phoneNumberWithHyphens = phoneNumber.replace(/\D/g, '').replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');

    setValue('phone', phoneNumberWithHyphens);
    trigger(id);
  };

  return (
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
      onBlur={e => addDash(e.target.value)}
      error={formState?.errors[id]?.message}
      sx={{
        '@media (max-width: 765px)': {
          width: '20rem',
        },
      }}
    />
  );
};
export default FormPhoneInput;
