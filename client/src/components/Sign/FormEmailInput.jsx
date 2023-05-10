import { useState } from 'react';
import axios from 'axios';
import CustomFormInput from '../CustomFormInput';

const FormEmailInput = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState }) => {
  const [duplicateEmailError, setDuplicateEmailError] = useState('');

  const checkEmailDuplicate = async emailAddress => {
    try {
      const response = await axios.post('/api/auth/signup/email', {
        email: emailAddress,
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
    <CustomFormInput
      type={inputType}
      label={name}
      placeholder={placeholder}
      withAsterisk={withAsterisk}
      autoComplete="off"
      {...register(id)}
      onBlur={e => checkEmailDuplicate(e.target.value)}
      error={formState?.errors[id]?.message || duplicateEmailError}
    />
  );
};
export default FormEmailInput;
