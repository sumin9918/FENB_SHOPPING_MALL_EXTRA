import { useQuery } from '@tanstack/react-query';
import { productsQuery } from '../../api/loader';

const useSearchProducts = () => {
  const { data: searchProducts } = useQuery(
    productsQuery({
      select: products => products.map(({ id, name, brand, category }) => ({ id, value: name, brand, category })),
    })
  );

  return { searchProducts };
};

export default useSearchProducts;
