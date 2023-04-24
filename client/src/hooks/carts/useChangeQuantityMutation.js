import useGenericMutation from './useGenericMutation';
import { changeQuantity } from '../../api/carts';
import { CARTS_QUERY_KEY } from '../../constants';

const useChangeQuantityMutation = () =>
  useGenericMutation({
    queryKey: CARTS_QUERY_KEY,
    mutationFn: changeQuantity,
    onMutate({ id, quantity }) {
      return carts => carts.map(cart => (cart.id === id ? { ...cart, quantity } : cart));
    },
  });

export default useChangeQuantityMutation;
