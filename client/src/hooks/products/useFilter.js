import { useQuery } from '@tanstack/react-query';

import { productsQuery } from 'api/query';

const useFilter = () => {
  const { data: brands } = useQuery(
    productsQuery({
      select: products =>
        products.reduce(
          (acc, product) => (acc.some(brands => brands.en === product.brand.en) ? acc : [product.brand, ...acc]),
          []
        ),
    })
  );

  const { data: colors } = useQuery(
    productsQuery({
      select: products =>
        products.reduce(
          (acc, product) => (acc.some(colors => colors.en === product.color.en) ? acc : [product.color, ...acc]),
          []
        ),
    })
  );

  const { data: gender } = useQuery(
    productsQuery({
      select: products =>
        products.reduce(
          (acc, product) => (acc.some(gender => gender.en === product.gender.en) ? acc : [product.gender, ...acc]),
          []
        ),
    })
  );

  const { data: sizes } = useQuery(
    productsQuery({
      select: products =>
        products.reduce(
          (acc, product) =>
            acc.some(size => product.stocks.some(stock => size === stock.size))
              ? acc
              : [...product.stocks.map(stock => stock.size), ...acc],
          []
        ),
    })
  );

  // 서버에서 어떻게 받아올지 생각하기
  const prices = [
    { rangeIdx: 0, text: '0 - 50,000원' },
    { rangeIdx: 1, text: '50,000 - 100,000원' },
    { rangeIdx: 2, text: '100,000 - 150,000원' },
    { rangeIdx: 3, text: '150,000원 이상' },
  ];

  return { brands, colors, gender, prices, sizes };
};

export default useFilter;
