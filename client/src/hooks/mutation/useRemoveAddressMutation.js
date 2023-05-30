import { removeAddress } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useRemoveAddressMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.ADDRESSES,
    mutationFn: removeAddress,
    onMutate(id) {
      return addresses => addresses.filter(address => address.id !== id);
    },
  });

export default useRemoveAddressMutation;
