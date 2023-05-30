import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePessimisticMutation = ({ queryKey, mutationFn, onSuccess }) => {
  const queryClient = useQueryClient();

  return useMutation({
    queryKey,
    mutationFn,
    onSuccess(res, params) {
      return queryClient.setQueryData(queryKey, onSuccess(res, params));
    },
  });
};

export default usePessimisticMutation;
