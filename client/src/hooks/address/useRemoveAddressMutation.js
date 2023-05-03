import { useGenericMutation } from '../index';
import { removeAddress } from '../../api/fetch';
import { ADDRESS_QUERY_KEY } from '../../constants';

const useRemoveAddressMutation = () =>
  useGenericMutation({
    queryKey: ADDRESS_QUERY_KEY,
    mutationFn: removeAddress,
    onMutate(id) {
      return user => ({ ...user, addresses: user.addresses.filter(address => address.id !== id) });
    },
  });

export default useRemoveAddressMutation;
