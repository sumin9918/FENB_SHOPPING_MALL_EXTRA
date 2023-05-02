import { useQuery } from '@tanstack/react-query';
import { fetchCoupons } from '../../api/fetch';
import { COUPONS_QUERY_KEY, STALE_TIME } from '../../constants';

const useCouponsQuery = options => {
  const query = useQuery({
    queryKey: COUPONS_QUERY_KEY,
    queryFn: fetchCoupons,
    staleTime: STALE_TIME,
    ...options,
  });

  return { ...query, coupons: query.data };
};

export default useCouponsQuery;
