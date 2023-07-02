import { updateAddress } from 'api/fetch';
import { usePessimisticMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useUpdateAddress = () =>
  usePessimisticMutation({
    queryKey: QUERY_KEY.ADDRESSES,
    mutationFn: updateAddress,
    onSuccess:
      (_, { id, newAddress: { name, phone, mainAddress, detailAddress, postcode } }) =>
      addresses =>
        addresses.map(address =>
          address.id === id
            ? { ...address, recipient: name, recipientPhone: phone, mainAddress, detailAddress, postcode }
            : address
        ),
  });

export default useUpdateAddress;
