import { PRICES, SIZES, COLORS, GENDER, BRANDS } from '../constants';

const sortProducts = (products, sortOption) => {
  switch (sortOption) {
    case 'favorite':
      return products.sort((a, b) => a.favorites - b.favorites);

    case 'new':
      return products.sort((a, b) => new Date(b.dateOfManufacture).getTime() - new Date(a.dateOfManufacture).getTime());

    case 'high':
      return products.sort((a, b) => b.price - a.price);

    case 'low':
      return products.sort((a, b) => a.price - b.price);

    default:
      return products;
  }
};

const checkFiltersHasTrue = filters => filters.some(filter => filter === true);

const filteredAndSortedProducts = (products, newFilters, sortOption) => {
  const { priceFilters, sizeFilters, colorFilters, genderFilters, brandFilters } = newFilters;

  const filteredPrice = checkFiltersHasTrue(priceFilters)
    ? [
        ...priceFilters.map((filter, i) =>
          filter
            ? PRICES.at(i).rangeIdx !== priceFilters.length - 1
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
                ? filteredPrice.filter(({ stocks }) =>
                    stocks.some(({ size, stock }) => size === SIZES.at(i) && stock > 0)
                  )
                : []
            ),
          ].flat()
        ),
      ]
    : filteredPrice;

  const filteredColor = checkFiltersHasTrue(colorFilters)
    ? [
        ...colorFilters.map((filter, i) =>
          filter ? filteredSize.filter(({ color }) => color.en === COLORS.at(i).en) : []
        ),
      ].flat()
    : filteredSize;

  const filteredGender = checkFiltersHasTrue(genderFilters)
    ? [
        ...genderFilters.map((filter, i) =>
          filter ? filteredColor.filter(({ gender }) => gender.en === GENDER.at(i).en) : []
        ),
      ].flat()
    : filteredColor;

  const filteredBrand = checkFiltersHasTrue(brandFilters)
    ? [
        ...brandFilters.map((filter, i) =>
          filter ? filteredGender.filter(({ brand }) => brand.en === BRANDS.at(i).en) : []
        ),
      ].flat()
    : filteredGender;

  const filteredAndSortedProducts = sortProducts(filteredBrand, sortOption);

  return filteredAndSortedProducts;
};

export default filteredAndSortedProducts;
