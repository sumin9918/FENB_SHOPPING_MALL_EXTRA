import { changeDefaultAddress } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useChangeDefaultAddressMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.ADDRESS,
    mutationFn: changeDefaultAddress,
    onMutate(id) {
      return user => ({
        ...user,
        addresses: user.addresses.map(address => ({ ...address, isDefault: address.id === id })),
      });
    },
  });

export default useChangeDefaultAddressMutation;
