import { order } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useOrderMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.CARTS,
    mutationFn: order,
    onMutate() {
      return () => [];
    },
  });

export default useOrderMutation;
