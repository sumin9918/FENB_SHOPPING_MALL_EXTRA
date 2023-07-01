import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getIdFromPath } from 'utils';

const useCurrentItem = queryFn => {
  const { pathname } = useLocation();

  const { data: items } = useQuery(queryFn());

  const currentItem = items?.find(item => item.id === getIdFromPath(pathname));

  return currentItem;
};

export default useCurrentItem;
