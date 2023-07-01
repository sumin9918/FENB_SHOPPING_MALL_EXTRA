import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const useCurrentItem = queryFn => {
  const { pathname } = useLocation();

  const { data: items } = useQuery(queryFn());

  const currentItem = items?.find(item => `${item.id}` === pathname.split('/').at(-1));

  return currentItem;
};

export default useCurrentItem;
