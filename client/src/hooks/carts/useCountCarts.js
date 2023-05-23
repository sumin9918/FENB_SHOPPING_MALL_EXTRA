import { useQuery } from '@tanstack/react-query';

import { cartsQuery } from 'api/query';

const useCountCarts = () => {
  const { data: countCarts } = useQuery(cartsQuery({ select: carts => carts.length }));

  return countCarts;
};

export default useCountCarts;
