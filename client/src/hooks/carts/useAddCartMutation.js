import useGenericMutation from '../useGenericMutation';
import { addCart } from '../../api/carts';
import { CARTS_QUERY_KEY } from '../../constants';

const useAddCartMutation = () =>
  useGenericMutation({
    queryKey: CARTS_QUERY_KEY,
    mutationFn: addCart,
    onMutate({ id, selectedSize }) {
      // 추가되는 cart의 구성 프로퍼티가 달라질 수 있음
      return carts => [...carts, { id, selectedSize, quantity: 1 }];
    },
  });

export default useAddCartMutation;
