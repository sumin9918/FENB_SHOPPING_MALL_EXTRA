import { Button, Group, useMantineTheme } from '@mantine/core';

const Filter = ({ handleMonthClick }) => {
  const { colors, colorScheme } = useMantineTheme();

  return (
    <Group
      bg={colorScheme === 'dark' ? 'gray.9' : 'gray.0'}
      p="1.6rem"
      position="center"
      sx={{
        borderTop: `1px solid ${colorScheme === 'dark' ? colors.gray[8] : colors.gray[2]}`,
        borderBottom: `1px solid ${colorScheme === 'dark' ? colors.gray[8] : colors.gray[2]}`,
      }}>
      <Button
        color="gray"
        size="lg"
        variant="outline"
        sx={{
          border: `1px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[4]}`,
          ':hover': { border: `1px solid ${colors.gray[5]}` },
        }}
        onClick={handleMonthClick(3)}>
        최근 3개월
      </Button>
      <Button
        color="gray"
        size="lg"
        variant="outline"
        sx={{
          border: `1px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[4]}`,
          ':hover': { border: `1px solid ${colors.gray[5]}` },
        }}
        onClick={handleMonthClick(6)}>
        6개월
      </Button>
      <Button
        color="gray"
        size="lg"
        variant="outline"
        sx={{
          border: `1px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[4]}`,
          ':hover': { border: `1px solid ${colors.gray[5]}` },
        }}
        onClick={handleMonthClick(12)}>
        12개월
      </Button>
    </Group>
  );
};

export default Filter;
