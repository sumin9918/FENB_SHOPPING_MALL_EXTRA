import { Stack, Title, useMantineTheme } from '@mantine/core';

import { Filter, Product } from 'components/History';
import { useFilteredHistories } from 'hooks/history';

const History = () => {
  const { colors, colorScheme } = useMantineTheme();

  const { filteredHistories, setMonth } = useFilteredHistories();

  const handleMonthClick = selectedMonth => () => {
    setMonth(selectedMonth);
  };

  return (
    <Stack pb="2rem" px="0.8rem" spacing="3.2rem" w="100%">
      <Title
        fz="2.4rem"
        mb="3.2rem"
        pb="2rem"
        sx={{ borderBottom: `2px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[8]}` }}>
        구매내역
      </Title>
      <Filter handleMonthClick={handleMonthClick} />
      {filteredHistories.map(history => (
        <Product key={history.id} history={history} />
      ))}
    </Stack>
  );
};

export default History;
