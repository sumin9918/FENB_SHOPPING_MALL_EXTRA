import { TextInput } from '@mantine/core';

const FormInput = ({
  type,
  id,
  label,
  placeholder,
  withAsterisk = false,
  readOnly = false,
  register,
  error,
  formState,
  description,
  rightSection,
  onBlur,
  onChange,
}) => (
  <TextInput
    autoComplete="off"
    description={description}
    label={label}
    m="2rem 0"
    placeholder={placeholder}
    readOnly={readOnly}
    size="4rem"
    type={type}
    withAsterisk={withAsterisk}
    {...register(id, {
      onBlur: e => {
        if (onBlur) onBlur(e);
      },
      onChange: e => {
        if (onChange) onChange(e);
      },
    })}
    error={error || formState.errors[id]?.message}
    rightSection={rightSection}
    styles={({ colors }) => ({
      input: {
        fontSize: '1.6rem',
        backgroundColor: 'transparent',
        height: '3.5rem',
        padding: '0',
        border: 'none',
        borderBottom: `1px solid ${colors.gray[6]}`,
      },
      label: {
        fontSize: '1.6rem',
      },
      description: {
        fontSize: '1.6rem',
      },
      error: {
        fontSize: '1.6rem',
      },
    })}
  />
);
export default FormInput;
