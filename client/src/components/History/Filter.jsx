import { Button, Group, useMantineTheme } from '@mantine/core';

const Filter = ({ handleMonthClick }) => {
  const { colors } = useMantineTheme();

  return (
    <Group
      bg="gray.0"
      p="1.6rem"
      position="center"
      sx={{ borderTop: `1px solid ${colors.gray[2]}`, borderBottom: `1px solid ${colors.gray[2]}` }}>
      <Button
        color="gray"
        size="lg"
        sx={{ border: `1px solid ${colors.gray[4]}`, ':hover': { border: `1px solid ${colors.gray[5]}` } }}
        variant="outline"
        onClick={handleMonthClick(3)}>
        최근 3개월
      </Button>
      <Button
        color="gray"
        size="lg"
        sx={{ border: `1px solid ${colors.gray[4]}`, ':hover': { border: `1px solid ${colors.gray[5]}` } }}
        variant="outline"
        onClick={handleMonthClick(6)}>
        6개월
      </Button>
      <Button
        color="gray"
        size="lg"
        sx={{ border: `1px solid ${colors.gray[4]}`, ':hover': { border: `1px solid ${colors.gray[5]}` } }}
        variant="outline"
        onClick={handleMonthClick(12)}>
        12개월
      </Button>
    </Group>
  );
};

export default Filter;
