import { useQuery } from '@tanstack/react-query';
import { userQuery } from '../../api/query';

const useDefaultAddress = () => {
  const { data: addresses } = useQuery(userQuery({ select: user => user.addresses }));

  const defaultAddress = !addresses.length ? {} : addresses.find(address => address.isDefault) ?? addresses[0];
  const isValidAddress = defaultAddress.postcode ? defaultAddress.postcode !== '' : false;

  return { defaultAddress, isValidAddress };
};

export default useDefaultAddress;
