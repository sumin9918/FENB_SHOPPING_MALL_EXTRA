import { useMantineColorScheme, TextInput, Button } from '@mantine/core';
import { useDaumPostcodePopup } from 'react-daum-postcode';

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
  const width = 500;
  const height = 600;
  const { colorScheme } = useMantineColorScheme();

  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('mainAddress', fullAddress);
    setValue('postcode', data.zonecode);
  };

  const handleClick = () => {
    open({
      onComplete: handleComplete,
      left: window.screen.width / 2 - width / 2,
      top: window.screen.height / 2 - height / 2,
    });
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
      readOnly
      rightSection={
        <Button
          size="xs"
          type="button"
          p="0"
          m="-4.5rem 4rem 0 0"
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          radius="md"
          sx={{
            '@media (max-width: 765px)': {
              margin: '-4.5rem 10rem 0 0',
            },
          }}
          onClick={handleClick}>
          주소찾기
        </Button>
      }
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
export default FormZoneCodeInput;
