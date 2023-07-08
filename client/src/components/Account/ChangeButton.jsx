import { Button, useMantineColorScheme } from '@mantine/core';

const ChangeButton = ({ children, label, handleClick, type = 'button', disabled = false }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Button
      color={colorScheme === 'dark' ? 'gray.6' : 'gray'}
      disabled={disabled}
      h="3.4rem"
      m="0.3rem 2rem 0 0"
      p="0.7rem 1.4rem"
      size="1.5rem"
      type={type}
      variant="outline"
      w="12rem"
      sx={({ colors }) => ({
        borderRadius: '3rem',
        ':hover': { border: `1px solid ${colors.blue[6]}`, color: colors.blue[6] },
      })}
      onClick={() => handleClick && handleClick(label)}>
      {children}
    </Button>
  );
};

export default ChangeButton;
