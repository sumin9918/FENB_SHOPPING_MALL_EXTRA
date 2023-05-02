import useGenericMutation from '../useGenericMutation';
import { addCart } from '../../api/carts';
import { CARTS_QUERY_KEY } from '../../constants';

const useAddCartMutation = () =>
  useGenericMutation({
    queryKey: CARTS_QUERY_KEY,
    mutationFn: addCart,
    onMutate({ id, selectedSize }) {
      return carts => [...carts, { id, selectedSize, quantity: 1 }];
    },
  });

export default useAddCartMutation;
