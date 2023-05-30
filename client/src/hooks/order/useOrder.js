import { useState } from 'react';

import { checkCoupon } from 'api/fetch';

const useOrder = totalPrice => {
  const [discount, setDiscount] = useState({ discountAmount: 0, discountedTotalPrice: totalPrice });

  const updateDiscount = async newCouponId => {
    const data = await checkCoupon(newCouponId);

    setDiscount({ ...discount, ...data });
  };

  return { discount, updateDiscount };
};

export default useOrder;
