import { useState } from 'react';

import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Stack, Text, Title, useMantineTheme } from '@mantine/core';

import { UserInfo, PasswordInput, NameInput, PhoneInput } from 'components/Account';
import { userQuery } from 'api/query';
import { makeCipher } from 'utils';
import { PATH } from 'constants';

const Account = () => {
  const { colors, colorScheme } = useMantineTheme();

  const { data: userInfo } = useQuery(userQuery());

  const [changeMode, setChangeMode] = useState({ password: false, name: false, phone: false });

  const { email, password, name, phone } = makeCipher(userInfo);

  const handleOpenModeClick = label => setChangeMode({ ...changeMode, [label]: true });
  const handleCloseModeClick = label => setChangeMode({ ...changeMode, [label]: false });

  return (
    <Stack pb="2rem" px="0.8rem" spacing="3.2rem" w="100%">
      <Title
        fz="2.4rem"
        mb="3.2rem"
        pb="2rem"
        sx={{ borderBottom: `2px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[8]}` }}>
        계정 정보
      </Title>
      <Stack maw="50rem" pl="2rem">
        <Title fz="2rem" pb="0.8rem">
          내 계정
        </Title>
        <UserInfo label="email" placeholder={email} />
        {changeMode.password ? (
          <PasswordInput handleCloseModeClick={handleCloseModeClick} />
        ) : (
          <UserInfo handleOpenModeClick={handleOpenModeClick} label="password" placeholder={password} />
        )}
      </Stack>
      <Stack maw="50rem" pl="2rem">
        <Title fz="2rem" pb="0.8rem">
          내 정보
        </Title>
        {changeMode.name ? (
          <NameInput handleCloseModeClick={handleCloseModeClick} value={userInfo.name} />
        ) : (
          <UserInfo handleOpenModeClick={handleOpenModeClick} label="name" placeholder={name} />
        )}
        {changeMode.phone ? (
          <PhoneInput handleCloseModeClick={handleCloseModeClick} value={userInfo.name} />
        ) : (
          <UserInfo handleOpenModeClick={handleOpenModeClick} label="phone" placeholder={phone} />
        )}
      </Stack>
      <Link to={PATH.WITHDRAWAL}>
        <Text
          c="gray.6"
          fz="1.4rem"
          pl="2rem"
          w="fit-content"
          sx={{
            textDecoration: 'underline',
            cursor: 'pointer',
            ':hover': { color: colorScheme === 'dark' ? colors.gray[5] : colors.gray[7] },
          }}>
          회원탈퇴
        </Text>
      </Link>
    </Stack>
  );
};

export default Account;
