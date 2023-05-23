import { removeAddress } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useRemoveAddressMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.ADDRESS,
    mutationFn: removeAddress,
    onMutate(id) {
      return user => ({ ...user, addresses: user.addresses.filter(address => address.id !== id) });
    },
  });

export default useRemoveAddressMutation;
