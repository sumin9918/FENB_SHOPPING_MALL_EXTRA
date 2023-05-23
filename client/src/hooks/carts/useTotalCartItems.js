import { useQuery } from '@tanstack/react-query';

import { cartsQuery } from 'api/query';

const useTotalCartItems = () => {
  const { data: totalCartItems } = useQuery(
    cartsQuery({
      select: carts => carts.reduce((acc, cart) => acc + cart.quantity, 0),
    })
  );

  return totalCartItems;
};

export default useTotalCartItems;
