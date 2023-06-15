import { updateUserInfo } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useUpdateUserInfoMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.USER,
    mutationFn: updateUserInfo,
    onMutate(newUserInfo) {
      return user => ({ ...user, ...newUserInfo });
    },
  });

export default useUpdateUserInfoMutation;
