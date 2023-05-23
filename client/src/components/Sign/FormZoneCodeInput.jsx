import { useMantineColorScheme, Button } from '@mantine/core';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import CustomFormInput from '../CustomFormInput';

const WIDTH = 500;
const HEIGHT = 600;

const FormZoneCodeInput = ({
  inputType,
  id,
  name,
  placeholder,
  withAsterisk = false,
  setValue,
  register,
  formState,
}) => {
  const { colorScheme } = useMantineColorScheme();

  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    let addr = '';
    let extraAddr = '';

    if (data.userSelectedType === 'R') {
      addr = data.roadAddress;
    } else {
      addr = data.jibunAddress;
    }

    if (data.userSelectedType === 'R') {
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
        extraAddr += data.bname;
      }

      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }

      addr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setValue('mainAddress', addr);
    setValue('postcode', data.zonecode);
  };

  const handleClick = () => {
    open({
      onComplete: handleComplete,
      left: window.screen.width / 2 - WIDTH / 2,
      top: window.screen.height / 2 - HEIGHT / 2,
    });
  };

  return (
    <CustomFormInput
      type={inputType}
      label={name}
      placeholder={placeholder}
      withAsterisk={withAsterisk}
      autoComplete="off"
      {...register(id)}
      error={formState?.errors[id]?.message}
      readOnly
      rightSection={
        <Button
          variant="outline"
          w="12rem"
          h="3rem"
          m="-0.5rem 6rem 0 0"
          color={colorScheme === 'dark' ? 'gray.6' : 'gray'}
          sx={{
            borderRadius: '3rem',
            ':hover': { border: '1px solid #228be6', color: '#228be6' },
            '.mantine-Button-inner': { fontSize: '1.4rem' },
          }}
          onClick={handleClick}>
          주소찾기
        </Button>
      }
    />
  );
};
export default FormZoneCodeInput;
