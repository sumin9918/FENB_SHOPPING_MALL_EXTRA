import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb';

const DarkMode = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Tooltip label="다크모드">
      <ActionIcon
        color={colorScheme === 'dark' ? 'yellow.4' : 'gray.9'}
        size="xl"
        sx={{
          ':hover': { backgroundColor: 'transparent' },
        }}
        onClick={toggleColorScheme}>
        {colorScheme === 'dark' ? <TbSunFilled size="2.8rem" /> : <TbMoonFilled size="2.8rem" />}
      </ActionIcon>
    </Tooltip>
  );
};

export default DarkMode;
