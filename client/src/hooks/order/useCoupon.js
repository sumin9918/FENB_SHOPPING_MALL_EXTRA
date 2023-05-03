import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { cartsQuery } from '../../api/query';
import { checkCoupon } from '../../api/fetch';

const useCoupon = () => {
  const { data: totalPrice } = useQuery(
    cartsQuery({
      select: carts => carts.reduce((acc, cart) => acc + cart.quantity * cart.price, 0),
    })
  );

  const [discount, setDiscount] = useState({ discountAmount: 0, discountedTotalPrice: totalPrice });

  const changeDiscount = async newCouponId => {
    const data = await checkCoupon(newCouponId);

    setDiscount(data);
  };

  return { discount, changeDiscount, totalPrice };
};

export default useCoupon;
