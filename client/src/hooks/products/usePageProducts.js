import { useInfiniteQuery } from '@tanstack/react-query';
import { pageProductsQuery } from '../../api/query';

const usePageProducts = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(pageProductsQuery());

  return { products: data.pages.map(page => page.products).flat(), fetchNextPage, hasNextPage };
};

export default usePageProducts;
