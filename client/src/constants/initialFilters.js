import { PRICES, SIZES, COLORS, GENDER, BRANDS } from '.';

const initialFilters = {
  priceFilters: Array.from({ length: PRICES.length }, () => false),
  sizeFilters: Array.from({ length: SIZES.length }, () => false),
  colorFilters: Array.from({ length: COLORS.length }, () => false),
  genderFilters: Array.from({ length: GENDER.length }, () => false),
  brandFilters: Array.from({ length: BRANDS.length }, () => false),
};

export default initialFilters;
