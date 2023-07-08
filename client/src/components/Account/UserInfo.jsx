import { TextInput, useMantineTheme } from '@mantine/core';

import { ChangeButton } from 'components/Account';

const LABELS = {
  email: '이메일 주소',
  password: '비밀번호',
  name: '이름',
  phone: '전화번호',
};

const UserInfo = ({ label, placeholder, handleOpenModeClick }) => {
  const { colors, colorScheme } = useMantineTheme();

  return (
    <TextInput
      label={LABELS[label]}
      m="2rem 0"
      placeholder={placeholder}
      size="4rem"
      rightSection={
        <ChangeButton disabled={!handleOpenModeClick} handleClick={handleOpenModeClick} label={label}>
          변경
        </ChangeButton>
      }
      sx={{
        input: {
          fontSize: '1.6rem',
          backgroundColor: 'transparent',
          height: '5rem',
          padding: '0',
          border: 'none',
          borderBottom: `1px solid ${colorScheme === 'dark' ? colors.gray[8] : colors.gray[3]}`,
          '::placeholder': { color: colorScheme === 'dark' ? colors.gray[3] : colors.gray[8], paddingLeft: '0.4rem' },
        },
        label: {
          fontSize: '1.6rem',
          fontWeight: 'bold',
          color: colorScheme === 'dark' ? colors.gray[6] : colors.gray[5],
        },
      }}
      readOnly
    />
  );
};

export default UserInfo;
