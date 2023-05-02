import useGenericMutation from '../useGenericMutation';
import { toggleFavorite } from '../../api/favorites';
import { WISHLIST_QUERY_KEY } from '../../constants/queryKey';

// 낙관적 업데이트
const useRemoveWishItemMutation = () =>
  useGenericMutation({
    queryKey: WISHLIST_QUERY_KEY,
    mutationFn: toggleFavorite,
    onMutate(id) {
      return wishList => wishList.filter(wishItem => wishItem.id !== id);
    },
  });

export default useRemoveWishItemMutation;
