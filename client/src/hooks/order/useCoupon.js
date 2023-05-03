import { useState } from 'react';
import { checkCoupon } from '../../api/fetch';

const useCoupon = totalPrice => {
  const [discount, setDiscount] = useState({ discountAmount: 0, discountedTotalPrice: totalPrice });

  const changeDiscount = async newCouponId => {
    const data = await checkCoupon(newCouponId);

    setDiscount(data);
  };

  return { discount, changeDiscount };
};

export default useCoupon;
