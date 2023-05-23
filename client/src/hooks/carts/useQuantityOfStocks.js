import { useQuery } from '@tanstack/react-query';

import { cartsQuery } from '../../api/query';

const useQuantityOfStocks = (id, selectedSize) => {
  const { data: stocks } = useQuery(
    cartsQuery({
      select: carts => carts.find(cart => cart.id === id).stocks,
    })
  );

  return stocks.find(({ size }) => size === selectedSize).stock;
};

export default useQuantityOfStocks;
