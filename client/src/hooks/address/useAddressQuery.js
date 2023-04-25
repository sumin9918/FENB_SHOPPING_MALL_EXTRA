import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../api';
import { ADDRESS_QUERY_KEY } from '../../constants';

const staleTime = 1000 * 3;

const useAddressQuery = options => {
  const query = useQuery({
    queryKey: ADDRESS_QUERY_KEY,
    queryFn: getUserInfo,
    staleTime,
    select: user => user.addresses,
    ...options,
  });

  return { ...query, addresses: query.data };
};

export default useAddressQuery;
