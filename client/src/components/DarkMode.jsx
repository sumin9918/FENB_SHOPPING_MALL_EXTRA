import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb';

const DarkMode = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Tooltip label="다크모드">
      <ActionIcon
        size="xl"
        onClick={toggleColorScheme}
        sx={theme => ({
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[6],
        })}>
        {colorScheme === 'dark' ? <TbSunFilled size="2.8rem" /> : <TbMoonFilled size="2.8rem" />}
      </ActionIcon>
    </Tooltip>
  );
};

export default DarkMode;
