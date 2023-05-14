import { useGenericMutation } from '../index';
import { addCart } from '../../api/fetch';
import { CARTS_QUERY_KEY } from '../../constants';

const useAddCartMutation = () =>
  useGenericMutation({
    queryKey: CARTS_QUERY_KEY,
    mutationFn: addCart,
    onMutate({ selectedSize, currentProduct }) {
      return carts =>
        carts
          ? [...carts, { ...currentProduct, selectedSize, quantity: 1 }]
          : [{ ...currentProduct, selectedSize, quantity: 1 }];
    },
  });

export default useAddCartMutation;
