import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { historyQuery } from 'src/api/query';

const useFilteredHistories = () => {
  const [selectedMonth, setSelectedMonth] = useState(3);

  const { data: histories } = useQuery(historyQuery());

  const today = new Date();
  const before = new Date(today.getFullYear(), today.getMonth() - selectedMonth, today.getDate());

  const filteredHistories = histories.filter(history => new Date(history.orderDate) > before);

  return { filteredHistories, setMonth: setSelectedMonth };
};

export default useFilteredHistories;
