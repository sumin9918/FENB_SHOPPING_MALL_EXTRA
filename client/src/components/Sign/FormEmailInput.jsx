import React from 'react';
import axios from 'axios';

import { TextInput } from '@mantine/core';

// InputContainer Component
const FormEmailInputContainer = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState }) => {
  const [duplicateEmailError, setDuplicateEmailError] = React.useState('');

  const checkEmailDuplicate = async stremail => {
    try {
      const response = await axios.post('/api/auth/signup/email', {
        email: stremail,
      });

      if (response.data.isDuplicate) {
        setDuplicateEmailError('이미 사용중인 이메일 입니다.');
      } else {
        setDuplicateEmailError('');
      }
    } catch (error) {
      throw new Error(error);
    }
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
      onBlur={e => checkEmailDuplicate(e.target.value)}
      error={formState?.errors[id]?.message || duplicateEmailError}
      sx={{
        '@media (max-width: 765px)': {
          width: '20rem',
        },
      }}
    />
  );
};
export default FormEmailInputContainer;
