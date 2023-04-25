import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useMantineColorScheme, TextInput, Button } from '@mantine/core';

// FormZoneCodeInput Component
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
      readOnly
      rightSection={
        <Button
          size="xs"
          type="button"
          p="0"
          m="0 4rem 0 0"
          color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
          radius="md"
          onClick={handleClick}>
          주소찾기
        </Button>
      }
      w="40rem"
      h="3.8rem"
      mb="3.5rem"
      {...register(id)}
      error={formState?.errors[id]?.message}
    />
  );
};
export default FormZoneCodeInput;
