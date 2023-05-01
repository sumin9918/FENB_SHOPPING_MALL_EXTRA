import { useInfiniteQuery } from '@tanstack/react-query';
import { pageProductsQuery } from '../api/loader';

const useFetchPageProducts = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(pageProductsQuery());

  return { products: data.pages.map(page => page.products).flat(), fetchNextPage, hasNextPage };
};

export default useFetchPageProducts;
