import { toggleFavorite } from 'api/fetch';
import { useGenericMutation } from 'hooks/mutation';
import { QUERY_KEY } from 'constants';

const useToggleWishItemMutation = () =>
  useGenericMutation({
    queryKey: QUERY_KEY.WISHLIST,
    mutationFn: toggleFavorite,
    onMutate({ id, isFavorite, currentProduct }) {
      return wishList => (isFavorite ? wishList.filter(wishItem => wishItem.id !== id) : [...wishList, currentProduct]);
    },
  });

export default useToggleWishItemMutation;
