import { Link, useLocation } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { FaCheck } from 'react-icons/fa';
import {
  Container,
  Stack,
  Select,
  Accordion,
  Checkbox,
  Button,
  UnstyledButton,
  ColorSwatch,
  SimpleGrid,
  Image,
  Text,
  Flex,
  useMantineColorScheme,
} from '@mantine/core';
import { getDecodeSearch } from '../utils/location';
import { filteredProductsQuery } from '../api/loader';
import { PATH } from '../constants';
import NoProduct from '../components/Category/NoProduct';

const CATEGORIES = {
  sneakers: '운동화',
  sandal: '샌달',
  slipper: '슬리퍼',
  walking: '워킹화',
  shoes: '구두',
};

const PRICES = [
  { rangeIdx: 0, text: '0 - 50,000원' },
  { rangeIdx: 1, text: '50,000 - 100,000원' },
  { rangeIdx: 2, text: '100,000 - 150,000원' },
  { rangeIdx: 3, text: '150,000원 이상' },
];

const SIZES = [230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285];

const COLORS = [
  { color: '#8D429F', en: 'purple', kr: '보라색' },
  { color: '#000', en: 'black', kr: '검정색' },
  { color: '#E7352B', en: 'red', kr: '빨간색' },
  { color: '#F36B26', en: 'orange', kr: '주황색' },
  { color: '#1790C8', en: 'blue', kr: '파란색' },
  { color: '#ffffff', en: 'white', kr: '흰색' },
  { color: '#825D41', en: 'brown', kr: '갈색' },
  { color: '#7BBA3C', en: 'green', kr: '초록색' },
  { color: '#FED533', en: 'yellow', kr: '노란색' },
  { color: 'navy', en: 'navy', kr: '남색' },
  { color: 'beige', en: 'beige', kr: '베이지' },
  { color: '#808080', en: 'gray', kr: '회색' },
  { color: '#F0728F', en: 'pink', kr: '분홍색' },
];

const GENDER = [
  { en: 'male', kr: '남성' },
  { en: 'female', kr: '여성' },
];

const BRANDS = [
  { en: 'nike', kr: '나이키' },
  { en: 'adidas', kr: '아디다스' },
  { en: 'newBalance', kr: '뉴발란스' },
  { en: 'sketchers', kr: '스케쳐스' },
  { en: 'ecco', kr: '에코' },
  { en: 'crocs', kr: '크록스' },
  { en: 'asics', kr: '아식스' },
  { en: 'descente', kr: '데상트' },
  { en: 'converse', kr: '컨버스' },
  { en: 'kumkang', kr: '금강제화' },
  { en: 'babara', kr: '바바라' },
  { en: 'saera', kr: '새라' },
  { en: 'tandy', kr: '텐디' },
  { en: 'rockport', kr: '락포트' },
  { en: 'soda', kr: '소다' },
];

const SizeButton = styled(Button)`
  height: 3.6rem;

  border: ${props => props.selected && '1px solid #228BE6'};
`;

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
            ? i !== priceFilters.length - 1
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

const ScrollFiltersArea = styled(Container)`
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  :hover {
    ::-webkit-scrollbar-thumb {
      border-radius: 5rem;
      background-color: #7b7676;
    }
  }
`;

const Header = ({ sortOption, searchValue, productCount, handleSelectSortOption }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex
      justify="space-between"
      align="center"
      pos="sticky"
      top="0"
      bg={colorScheme === 'dark' ? 'dark.7' : 'white'}
      sx={{ zIndex: 99 }}>
      <Container m="0" p="1.5rem 1rem" fz="2.4rem" fw="600">
        {CATEGORIES[searchValue] ? `${CATEGORIES[searchValue]}` : `${searchValue}`} {`(${productCount})`}
      </Container>
      <Select
        size="xl"
        maxDropdownHeight={500}
        placeholder="정렬 기준"
        defaultValue={sortOption && null}
        variant="unstyled"
        data={[
          { value: 'favorite', label: '추천순' },
          { value: 'new', label: '최신순' },
          { value: 'high', label: '높은 가격순' },
          { value: 'low', label: '낮은 가격순' },
        ]}
        onChange={e => handleSelectSortOption(e)}
      />
    </Flex>
  );
};

const Filters = ({ filters, handleResetFilters, handleCheckFilters }) => {
  const { priceFilters, sizeFilters, colorFilters, genderFilters, brandFilters } = filters;

  return (
    <ScrollFiltersArea m="0" miw="26rem" h="65rem" pos="sticky" top="6.8rem" sx={{ overflowY: 'auto' }}>
      <Button
        variant="default"
        m="1rem 1rem"
        p="0"
        w="22rem"
        h="5rem"
        fz="1.6rem"
        radius="lg"
        onClick={handleResetFilters}>
        필터 초기화
      </Button>
      <Accordion
        defaultValue={['price', 'size', 'color', 'gender', 'brand']}
        sx={{ label: { fontSize: '1.6rem' }, span: { fontSize: '1.6rem' } }}
        multiple>
        <Accordion.Item value="price">
          <Accordion.Control>가격</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {PRICES.map(({ rangeIdx, text }, i) => (
                <Checkbox
                  key={rangeIdx}
                  size="lg"
                  label={text}
                  checked={priceFilters.at(i)}
                  onChange={() => handleCheckFilters({ rangeIdx })}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="size">
          <Accordion.Control>사이즈</Accordion.Control>
          <Accordion.Panel>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
              {SIZES.map((size, i) => (
                <SizeButton
                  key={size}
                  variant="default"
                  radius="md"
                  selected={sizeFilters.at(i)}
                  onClick={() => handleCheckFilters({ size })}>
                  {size}
                </SizeButton>
              ))}
            </SimpleGrid>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="color">
          <Accordion.Control>색상</Accordion.Control>
          <Accordion.Panel>
            <SimpleGrid cols={3} spacing="md">
              {COLORS.map(({ color, en, kr }, i) => (
                <Stack key={color} spacing={'0.2rem'} align="center">
                  <UnstyledButton>
                    <ColorSwatch
                      color={color}
                      size={'3.0rem'}
                      selected={colorFilters.at(i)}
                      onClick={() => handleCheckFilters({ color: en })}>
                      {colorFilters.at(i) && (
                        <FaCheck size={'1.2rem'} color={en === 'white' || en === 'beige' ? 'black' : 'white'} />
                      )}
                    </ColorSwatch>
                  </UnstyledButton>
                  <Text size="1.2rem" align="center">
                    {kr}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="gender">
          <Accordion.Control>성별</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {GENDER.map(({ en, kr }, i) => (
                <Checkbox
                  key={en}
                  size="lg"
                  label={kr}
                  checked={genderFilters.at(i)}
                  onChange={() => handleCheckFilters({ gender: en })}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="brand">
          <Accordion.Control>제조사</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {BRANDS.map(({ en, kr }, i) => (
                <Checkbox
                  key={en}
                  size="lg"
                  label={kr}
                  checked={brandFilters.at(i)}
                  onChange={() => handleCheckFilters({ brand: en })}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </ScrollFiltersArea>
  );
};

const ResultProducts = ({ products, filters, sortOption }) => {
  const newProducts = useMemo(
    () => filteredAndSortedProducts(products, filters, sortOption),
    [products, filters, sortOption]
  );

  return (
    <>
      {newProducts.length === 0 ? (
        <NoProduct>등록된 상품이 없습니다.</NoProduct>
      ) : (
        <SimpleGrid cols={3} pl="2rem">
          {newProducts.map(({ id, imgURL, name, price, brand, feature, color }) => (
            <Link key={id} to={`${PATH.PRODUCTS}/${id}`}>
              <Stack sx={{ fontSize: '1.6rem', cursor: 'pointer' }}>
                <Image src={imgURL} alt="Product Image" sx={{ zIndex: 0 }} />
                <Stack spacing="xs" sx={{ padding: '0 1rem' }}>
                  <Text fz="2rem" fw="bold">
                    {name}
                  </Text>
                  <Text fw={500}>{brand.kr}</Text>
                  <Text fw={500}>{feature}</Text>
                  <Text color="#757575">{color.kr}</Text>
                  <Text fw="bold" sx={{ lineHeight: '2em' }}>
                    {`${price.toLocaleString()} 원`}
                  </Text>
                </Stack>
              </Stack>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

const Category = () => {
  const { search: rawSearch } = useLocation();
  const { search, searchValue } = getDecodeSearch(rawSearch);

  const { data: products } = useQuery(filteredProductsQuery(search, searchValue));

  const [sortOption, setSortOption] = useState(null);

  // filters states
  const [filters, setFilters] = useState({
    priceFilters: Array.from({ length: PRICES.length }, () => false),
    sizeFilters: Array.from({ length: SIZES.length }, () => false),
    colorFilters: Array.from({ length: COLORS.length }, () => false),
    genderFilters: Array.from({ length: GENDER.length }, () => false),
    brandFilters: Array.from({ length: BRANDS.length }, () => false),
  });

  useEffect(() => {
    setSortOption(JSON.parse(sessionStorage.getItem('sortOption')) ?? sortOption);
    setFilters(JSON.parse(sessionStorage.getItem('filters')) ?? filters);
  }, []);

  const handleResetFilters = () => {
    setFilters({
      priceFilters: Array.from({ length: PRICES.length }, () => false),
      sizeFilters: Array.from({ length: SIZES.length }, () => false),
      colorFilters: Array.from({ length: COLORS.length }, () => false),
      genderFilters: Array.from({ length: GENDER.length }, () => false),
      brandFilters: Array.from({ length: BRANDS.length }, () => false),
    });
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

  const handleSelectSortOption = selectedSortOption => {
    setSortOption(selectedSortOption);

    sessionStorage.setItem('sortOption', JSON.stringify(selectedSortOption));
  };

  return (
    <Container top="0" left="0" sx={{ maxWidth: '192rem', padding: '0 8rem' }}>
      <Header
        sortOption={sortOption}
        searchValue={searchValue}
        productCount={products.length}
        handleSelectSortOption={handleSelectSortOption}
      />
      <Flex sx={{ flex: '1 26rem' }}>
        <Filters filters={filters} handleResetFilters={handleResetFilters} handleCheckFilters={handleCheckFilters} />
        <ResultProducts products={products} filters={filters} sortOption={sortOption} />
      </Flex>
    </Container>
  );
};

export default Category;
