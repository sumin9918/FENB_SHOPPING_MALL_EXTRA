import { useGenericMutation } from '../index';
import { toggleFavorite } from '../../api/fetch';
import { WISHLIST_QUERY_KEY } from '../../constants/queryKey';

// 낙관적 업데이트
const useToggleWishItemMutation = () =>
  useGenericMutation({
    queryKey: WISHLIST_QUERY_KEY,
    mutationFn: toggleFavorite,
    onMutate({ id, isFavorite, currentProduct }) {
      return wishList => (isFavorite ? wishList.filter(wishItem => wishItem.id !== id) : [...wishList, currentProduct]);
    },
  });

export default useToggleWishItemMutation;
