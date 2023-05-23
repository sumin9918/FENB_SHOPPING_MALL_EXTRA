import { FILTER } from 'constants';

const { PRICES, SIZES, COLORS, GENDER, BRANDS } = FILTER;

const checkFiltersHasTrue = filters => filters.some(filter => filter === true);

const filteredProducts = (products, newFilters) => {
  const { priceFilters, sizeFilters, colorFilters, genderFilters, brandFilters } = newFilters;

  const filteredPrice = checkFiltersHasTrue(priceFilters)
    ? [
        ...priceFilters.map((filter, i) =>
          filter
            ? PRICES[i].rangeIdx !== priceFilters.length - 1
              ? products.filter(({ price }) => i * 50000 <= price && price < (i + 1) * 50000)
              : products.filter(({ price }) => i * 50000 <= price)
            : []
        ),
      ].flat()
    : products;

  const filteredSize = checkFiltersHasTrue(sizeFilters)
    ? [
        ...new Set(
          [
            ...sizeFilters.map((filter, i) =>
              filter
                ? filteredPrice.filter(({ stocks }) => stocks.some(({ size, stock }) => size === SIZES[i] && stock > 0))
                : []
            ),
          ].flat()
        ),
      ]
    : filteredPrice;

  const filteredColor = checkFiltersHasTrue(colorFilters)
    ? [
        ...colorFilters.map((filter, i) =>
          filter ? filteredSize.filter(({ color }) => color.en === COLORS[i].en) : []
        ),
      ].flat()
    : filteredSize;

  const filteredGender = checkFiltersHasTrue(genderFilters)
    ? [
        ...genderFilters.map((filter, i) =>
          filter ? filteredColor.filter(({ gender }) => gender.en === GENDER[i].en) : []
        ),
      ].flat()
    : filteredColor;

  const filteredBrand = checkFiltersHasTrue(brandFilters)
    ? [
        ...brandFilters.map((filter, i) =>
          filter ? filteredGender.filter(({ brand }) => brand.en === BRANDS[i].en) : []
        ),
      ].flat()
    : filteredGender;

  return filteredBrand;
};

export default filteredProducts;
