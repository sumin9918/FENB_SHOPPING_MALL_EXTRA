import { forwardRef, useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Autocomplete, Text } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { BiSearch } from 'react-icons/bi';

import { useSearchProducts } from 'hooks/products';
import { getDecodeSearch } from 'utils';
import { PATH } from 'constants';

const SearchBar = () => {
  const navigate = useNavigate();
  const { search: rawSearch, pathname } = useLocation();

  const searchProducts = useSearchProducts();

  const [searchInput, setSearchInput] = useState('');

  const [debounced] = useDebouncedValue(searchInput, 200);

  const handleSubmit = e => {
    e.preventDefault();

    document.activeElement.blur();

    navigate(`${PATH.CATEGORY}?search=${searchInput}`);
  };

  useEffect(() => {
    const { search, searchValue } = getDecodeSearch(rawSearch);
    setSearchInput(pathname.includes('category') && search.includes('search') ? searchValue : '');
  }, [rawSearch, setSearchInput, pathname]);

  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        data={searchProducts}
        icon={<BiSearch size="2rem" />}
        itemComponent={AutoCompleteItem}
        nothingFound={<Text>검색결과가 없습니다.</Text>}
        placeholder="상품 검색"
        radius="xl"
        size="xl"
        value={searchInput}
        filter={(_, item) =>
          item.value.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.brand.en.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.brand.kr.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.category.kr.toLowerCase().includes(debounced.toLowerCase().trim()) ||
          item.category.en.toLowerCase().includes(debounced.toLowerCase().trim())
        }
        onChange={setSearchInput}
      />
    </form>
  );
};

const AutoCompleteItem = forwardRef(({ value, id, onMouseDown, ...rest }, ref) => {
  const navigate = useNavigate();

  const handleMouseDown = e => {
    onMouseDown(e);
    navigate(`${PATH.PRODUCTS}/${id}`);
  };

  return (
    <Text ref={ref} value={value} onMouseDown={handleMouseDown} {...rest}>
      {value}
    </Text>
  );
});

export default SearchBar;
