import { addCart } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useAddCartMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.CARTS,
    mutationFn: addCart,
    onMutate({ selectedSize, currentProduct }) {
      return carts =>
        carts
          ? [...carts, { ...currentProduct, selectedSize, quantity: 1 }]
          : [{ ...currentProduct, selectedSize, quantity: 1 }];
    },
  });

export default useAddCartMutation;
