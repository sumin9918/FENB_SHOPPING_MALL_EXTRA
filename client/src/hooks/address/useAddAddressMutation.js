import useGenericMutation from '../useGenericMutation';
import { addAddress } from '../../api/address';
import { ADDRESS_QUERY_KEY } from '../../constants';

const useAddCartMutation = () =>
  useGenericMutation({
    queryKey: ADDRESS_QUERY_KEY,
    mutationFn: addAddress,
    // onMutate(addressInfo) {
    //   return addresses => [...addresses, addressInfo];
    // },
  });

export default useAddCartMutation;
