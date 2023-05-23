import { removeCart } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useRemoveCartMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.CARTS,
    mutationFn: removeCart,
    onMutate({ id, selectedSize }) {
      return carts => carts.filter(cart => cart.id !== id || cart.selectedSize !== selectedSize);
    },
  });

export default useRemoveCartMutation;
