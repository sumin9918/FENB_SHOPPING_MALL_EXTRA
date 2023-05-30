import { addAddress } from 'api/fetch';
import { usePessimisticMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useAddAddressMutation = () =>
  usePessimisticMutation({
    queryKey: QUERY_KEY.ADDRESSES,
    mutationFn: addAddress,
    onSuccess:
      ({ id }, { name, phone, mainAddress, detailAddress, postcode }) =>
      addresses =>
        [{ id, recipient: name, recipientPhone: phone, mainAddress, detailAddress, postcode }, ...addresses],
  });

export default useAddAddressMutation;
