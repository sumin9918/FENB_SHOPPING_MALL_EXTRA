import { useQuery } from '@tanstack/react-query';
import { productsQuery } from '../../api/query';

const useSearchProducts = () => {
  const { data: searchProducts } = useQuery(
    productsQuery({
      select: products => products.map(({ id, name, brand, category }) => ({ id, value: name, brand, category })),
    })
  );

  return { searchProducts };
};

export default useSearchProducts;
