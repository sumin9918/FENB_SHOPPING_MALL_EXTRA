import { changeCartQuantity } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useChangeCartQuantityMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.CARTS,
    mutationFn: changeCartQuantity,
    onMutate({ id, selectedSize, quantity }) {
      return carts =>
        carts.map(cart => (cart.id === id && cart.selectedSize === selectedSize ? { ...cart, quantity } : cart));
    },
  });

export default useChangeCartQuantityMutation;
