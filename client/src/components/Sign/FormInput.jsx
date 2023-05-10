import CustomFormInput from '../CustomFormInput';

const FormInput = ({ inputType, id, name, placeholder, withAsterisk = false, register, formState, description }) => (
  <CustomFormInput
    type={inputType}
    label={name}
    placeholder={placeholder}
    description={description}
    withAsterisk={withAsterisk}
    autoComplete="off"
    {...register(id)}
    error={formState?.errors[id]?.message}
  />
);
export default FormInput;
