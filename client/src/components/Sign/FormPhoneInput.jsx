import { TextInput } from '@mantine/core';

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
  const addHypen = withoutHypenPhoneNumber => {
    const phoneNumber = withoutHypenPhoneNumber;
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '').replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');

    setValue('phone', formattedPhoneNumber);
    trigger(id);
  };

  return (
    <TextInput
      type={inputType}
      label={name}
      placeholder={placeholder}
      withAsterisk={withAsterisk}
      autoComplete="off"
      {...register(id)}
      error={formState?.errors[id]?.message}
      onBlur={e => addHypen(e.target.value)}
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
};
export default FormPhoneInput;
