import { useDaumPostcodePopup } from 'react-daum-postcode';

import { Button, useMantineTheme } from '@mantine/core';

import FormInput from './FormInput';

const FormAddressInput = ({ setValue, ...rest }) => {
  const { colors, colorScheme } = useMantineTheme();
  const open = useDaumPostcodePopup();

  const handleAddressClick = () => {
    open({
      onComplete: ({ userSelectedType, roadAddress, jibunAddress, zonecode, bname, buildingName }) => {
        const address =
          userSelectedType === 'R' ? `${roadAddress} (${bname}${buildingName && `, ${buildingName}`})` : jibunAddress;

        setValue('mainAddress', address, { shouldValidate: true });
        setValue('postcode', zonecode, { shouldValidate: true });
      },
      left: window.screen.width / 2 - 250,
      top: window.screen.height / 2 - 300,
    });
  };

  return (
    <FormInput
      {...rest}
      rightSection={
        <Button
          color={colorScheme === 'dark' ? 'gray.6' : 'gray'}
          h="3rem"
          m="-0.5rem 6rem 0 0"
          p="0.7rem 1.4rem"
          size="1.4rem"
          variant="outline"
          w="12rem"
          sx={{
            borderRadius: '3rem',
            ':hover': { border: `1px solid ${colors.blue[6]}`, color: colors.blue[6] },
          }}
          onClick={handleAddressClick}>
          주소찾기
        </Button>
      }
    />
  );
};
export default FormAddressInput;
