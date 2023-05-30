import { FormInput } from 'components/Sign';

const FormPhoneInput = ({ setValue, id, ...rest }) => {
  const handlePhoneNumberChange = e => {
    const formatted = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/(\d{0,3})(\d{0,4})(\d{0,4})/, '$1-$2-$3')
      .replace(/-{1,2}$/g, '');

    setValue(id, formatted);
  };

  return <FormInput {...{ ...rest, id }} onChange={handlePhoneNumberChange} />;
};

export default FormPhoneInput;
