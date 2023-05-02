import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../../api/fetch';
import { ADDRESS_QUERY_KEY, STALE_TIME } from '../../constants';

const useAddressQuery = options => {
  const query = useQuery({
    queryKey: ADDRESS_QUERY_KEY,
    queryFn: fetchUser,
    staleTime: STALE_TIME,
    select: user => user.addresses,
    ...options,
  });

  return { ...query, addresses: query.data };
};

export default useAddressQuery;
