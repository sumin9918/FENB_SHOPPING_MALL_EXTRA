import useGenericMutation from '../useGenericMutation';
import { addAddress } from '../../api/address';
import { ADDRESS_QUERY_KEY } from '../../constants';

const useAddAddressMutation = () =>
  useGenericMutation({
    queryKey: ADDRESS_QUERY_KEY,
    mutationFn: addAddress,
    onMutate(newAddress) {
      return user => ({ ...user, addresses: [...user.addresses, newAddress] });
    },
  });

export default useAddAddressMutation;
