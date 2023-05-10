import CustomFormInput from '../CustomFormInput';

const FormMainAddressInput = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState }) => (
  <CustomFormInput
    type={inputType}
    label={name}
    placeholder={placeholder}
    withAsterisk={withAsterisk}
    autoComplete="off"
    {...register(id)}
    error={formState?.errors[id]?.message}
    readOnly
  />
);

export default FormMainAddressInput;
