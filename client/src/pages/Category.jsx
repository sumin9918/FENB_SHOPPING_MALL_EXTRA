import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Container, Flex } from '@mantine/core';
import { FiltersContainer, Header, ResultProducts } from '../components/Category';
import { filteredProductsQuery } from '../api/query';
import { useMediaQuery } from '../hooks';
import { filteredAndSortedProducts } from '../utils';
import { getDecodeSearch } from '../utils/location';
import { BRANDS, COLORS, GENDER, MEDIAQUERY_WIDTH, PRICES, SIZES } from '../constants';

const INITIAL_FILTERS = {
  priceFilters: Array.from({ length: PRICES.length }, () => false),
  sizeFilters: Array.from({ length: SIZES.length }, () => false),
  colorFilters: Array.from({ length: COLORS.length }, () => false),
  genderFilters: Array.from({ length: GENDER.length }, () => false),
  brandFilters: Array.from({ length: BRANDS.length }, () => false),
};

const INITIAL_SORT = 'favorite';

const Category = () => {
  const { search: rawSearch } = useLocation();
  const { search, searchValue } = getDecodeSearch(rawSearch);
  const { data: products } = useQuery(filteredProductsQuery(search, searchValue));

  const [sortOption, setSortOption] = useState(INITIAL_SORT);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  useEffect(() => {
    setSortOption(JSON.parse(sessionStorage.getItem('sortOption')) ?? sortOption);
    setFilters(JSON.parse(sessionStorage.getItem('filters')) ?? filters);
  }, []);

  const newProducts = useMemo(
    () => filteredAndSortedProducts(products, filters, sortOption),
    [products, filters, sortOption]
  );

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSortOption(INITIAL_SORT);

    sessionStorage.setItem('filters', JSON.stringify(INITIAL_FILTERS));
    sessionStorage.setItem('sortOption', JSON.stringify(INITIAL_SORT));
  };

  const handleSelectSortOption = selectedSortOption => {
    setSortOption(selectedSortOption);

    sessionStorage.setItem('sortOption', JSON.stringify(selectedSortOption));
  };

  const handleCheckFilters = ({ rangeIdx, size, color, gender, brand }) => {
    const newFilters = {
      priceFilters: filters.priceFilters.map((filter, i) => (rangeIdx === PRICES.at(i).rangeIdx ? !filter : filter)),
      sizeFilters: filters.sizeFilters.map((filter, i) => (size === SIZES.at(i) ? !filter : filter)),
      colorFilters: filters.colorFilters.map((filter, i) => (color === COLORS.at(i).en ? !filter : filter)),
      genderFilters: filters.genderFilters.map((filter, i) => (gender === GENDER.at(i).en ? !filter : filter)),
      brandFilters: filters.brandFilters.map((filter, i) => (brand === BRANDS.at(i).en ? !filter : filter)),
    };

    setFilters({ ...filters, ...newFilters });

    sessionStorage.setItem('filters', JSON.stringify({ ...filters, ...newFilters }));
  };

  return (
    <Container top="0" left="0" size="150rem">
      <Header
        sortOption={sortOption}
        searchValue={searchValue}
        productCount={newProducts.length}
        handleSelectSortOption={handleSelectSortOption}
      />

      <Flex direction={matches ? 'row' : 'column'}>
        <FiltersContainer
          type={matches ? 'larger' : 'smaller'}
          filters={filters}
          handleResetFilters={handleResetFilters}
          handleCheckFilters={handleCheckFilters}
        />
        <ResultProducts cols={matches ? 3 : 2} products={newProducts} />
      </Flex>
    </Container>
  );
};

export default Category;
