import useGenericMutation from '../useGenericMutation';
import { removeAddress } from '../../api/address';
import { ADDRESS_QUERY_KEY } from '../../constants';

const useRemoveAddressMutation = () =>
  useGenericMutation({
    queryKey: ADDRESS_QUERY_KEY,
    mutationFn: removeAddress,
    onMutate(id) {
      return user => {
        console.log('user : ', user);
        return { ...user, addresses: user.addresses.filter(address => address.id !== id) };
      };
    },
  });

export default useRemoveAddressMutation;
