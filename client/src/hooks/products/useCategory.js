import { useQuery } from '@tanstack/react-query';
import { productsQuery } from '../../api/loader';

const useCategory = () => {
  const { data: categories } = useQuery(
    productsQuery({
      select: products =>
        products.reduce(
          (acc, product) =>
            acc.some(category => category.en === product.category.en) ? acc : [product.category, ...acc],
          []
        ),
    })
  );

  return { categories };
};

export default useCategory;
