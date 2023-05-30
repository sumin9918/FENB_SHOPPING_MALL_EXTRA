import { useQuery } from '@tanstack/react-query';

import { addressesQuery } from 'api/query';

const useAddresses = options => {
  const { data: addresses } = useQuery(addressesQuery({ ...options }));

  return addresses;
};

export default useAddresses;
