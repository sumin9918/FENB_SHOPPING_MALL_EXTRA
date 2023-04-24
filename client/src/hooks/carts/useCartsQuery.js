import { useQuery } from '@tanstack/react-query';
import { fetchCarts } from '../../api/carts';
import { CARTS_QUERY_KEY } from '../../constants';

const staleTime = 1000 * 3;

const useCartsQuery = options => {
  const query = useQuery({ queryKey: CARTS_QUERY_KEY, queryFn: fetchCarts, staleTime, ...options });

  return { ...query, carts: query.data };
};

export default useCartsQuery;
