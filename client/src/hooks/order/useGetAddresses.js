import { useQuery } from '@tanstack/react-query';
import { userQuery } from '../../api/query';

const useGetAddresses = () => {
  const { data: addresses } = useQuery(userQuery({ select: user => user.addresses }));

  return addresses;
};

export default useGetAddresses;
