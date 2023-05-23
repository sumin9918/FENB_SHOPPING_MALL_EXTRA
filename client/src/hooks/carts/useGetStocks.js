import { useQuery } from '@tanstack/react-query';

import { cartsQuery } from 'api/query';

const useGetStocks = id => {
  const { data: stocks } = useQuery(
    cartsQuery({
      select: carts => carts.find(cart => cart.id === id).stocks,
    })
  );

  return stocks;
};

export default useGetStocks;
