import { useGenericMutation } from '../index';
import { changeCartQuantity } from '../../api/fetch';
import { CARTS_QUERY_KEY } from '../../constants';

const useChangeCartQuantityMutation = () =>
  useGenericMutation({
    queryKey: CARTS_QUERY_KEY,
    mutationFn: changeCartQuantity,
    onMutate({ id, selectedSize, quantity }) {
      return carts =>
        carts.map(cart => (cart.id === id && cart.selectedSize === selectedSize ? { ...cart, quantity } : cart));
    },
  });

export default useChangeCartQuantityMutation;
