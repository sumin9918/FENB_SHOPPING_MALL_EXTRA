import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { productsQuery } from 'api/query';

const getIdFromPath = pathname => +pathname.split('/').at(-1);

const useCurrentProduct = () => {
  const { pathname } = useLocation();

  const { data: products } = useQuery(productsQuery());

  const currentProduct = products?.find(product => product.id === getIdFromPath(pathname));

  return currentProduct;
};

export default useCurrentProduct;
