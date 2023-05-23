import { useState } from 'react';
import CustomFormInput from '../CustomFormInput';
import { requestCheckEmailDuplicate } from '../../api/fetch';

const FormEmailInput = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState }) => {
  const [duplicateEmailError, setDuplicateEmailError] = useState('');

  const checkEmailDuplicate = async emailAddress => {
    try {
      const { isDuplicate } = await requestCheckEmailDuplicate(emailAddress);

      if (isDuplicate) {
        setDuplicateEmailError('이미 사용중인 이메일 입니다.');
      } else {
        setDuplicateEmailError('');
      }
    } catch (e) {
      throw new Error(e);
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
