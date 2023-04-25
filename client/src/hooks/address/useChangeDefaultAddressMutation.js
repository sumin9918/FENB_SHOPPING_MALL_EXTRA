import useGenericMutation from '../useGenericMutation';
import { changeDefaultAddress } from '../../api/address';
import { ADDRESS_QUERY_KEY } from '../../constants';

const useChangeDefaultAddressMutation = () =>
  useGenericMutation({
    queryKey: ADDRESS_QUERY_KEY,
    mutationFn: changeDefaultAddress,
    onMutate(addressInfo) {
      return addresses => [...addresses, addressInfo];
    },
  });

export default useChangeDefaultAddressMutation;
