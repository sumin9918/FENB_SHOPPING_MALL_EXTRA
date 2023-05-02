import { Link, useLocation } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { FaCheck } from 'react-icons/fa';
import { BiFilter } from 'react-icons/bi';
import { useDisclosure } from '@mantine/hooks';
import {
  MediaQuery,
  Drawer,
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
import { filteredProductsQuery } from '../api/query';
import { filteredAndSortedProducts } from '../utils';
import { NoProduct, SizeButton } from '../components';
import { PATH, CATEGORIES, PRICES, SIZES, COLORS, GENDER, BRANDS, INITIALFILTERS } from '../constants';

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
        variant="unstyled"
        value={sortOption}
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
    <>
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
    </>
  );
};

const FiltersArea = ({ type, filters, handleResetFilters, handleCheckFilters }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return type === 'vertical' ? (
    <ScrollFiltersArea m="0" miw="26rem" maw="26rem" h="65rem" pos="sticky" top="6.8rem" sx={{ overflowY: 'auto' }}>
      <Filters filters={filters} handleResetFilters={handleResetFilters} handleCheckFilters={handleCheckFilters} />
    </ScrollFiltersArea>
  ) : (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header m="1rem 0 0 1rem" />
          <Drawer.Body>
            <Filters
              filters={filters}
              handleResetFilters={handleResetFilters}
              handleCheckFilters={handleCheckFilters}
            />
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="default" mt="1rem" fz="1.6rem" radius="md" h="4rem" onClick={open}>
        필터
        <BiFilter size="2.5rem" />
      </Button>
    </>
  );
};

const ResultProducts = ({ products, cols = 3 }) => (
  <>
    {products.length === 0 ? (
      <NoProduct>등록된 상품이 없습니다.</NoProduct>
    ) : (
      <SimpleGrid cols={cols} pl="2rem">
        {products.map(({ id, imgURL, name, price, brand, feature, color }) => (
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
const Category = () => {
  const { search: rawSearch } = useLocation();
  const { search, searchValue } = getDecodeSearch(rawSearch);
  const { data: products } = useQuery(filteredProductsQuery(search, searchValue));

  const [sortOption, setSortOption] = useState(null);
  const [filters, setFilters] = useState(INITIALFILTERS);

  useEffect(() => {
    setSortOption(JSON.parse(sessionStorage.getItem('sortOption')) ?? sortOption);
    setFilters(JSON.parse(sessionStorage.getItem('filters')) ?? filters);
  }, []);

  const newProducts = useMemo(
    () => filteredAndSortedProducts(products, filters, sortOption),
    [products, filters, sortOption]
  );

  const handleResetFilters = () => {
    setFilters(INITIALFILTERS);

    sessionStorage.setItem('filters', JSON.stringify(INITIALFILTERS));
    sessionStorage.setItem('sortOption', JSON.stringify(null));
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
    <Container top="0" left="0" sx={{ maxWidth: '192rem', padding: '0 8rem' }}>
      <Header
        sortOption={sortOption}
        searchValue={searchValue}
        productCount={newProducts.length}
        handleSelectSortOption={handleSelectSortOption}
      />
      <MediaQuery smallerThan={1000} styles={{ display: 'none' }}>
        <Flex>
          <FiltersArea
            type={'vertical'}
            filters={filters}
            handleResetFilters={handleResetFilters}
            handleCheckFilters={handleCheckFilters}
          />
          <ResultProducts products={newProducts} />
        </Flex>
      </MediaQuery>
      <MediaQuery largerThan={999} styles={{ display: 'none' }}>
        <Stack>
          <FiltersArea
            type={'horizontal'}
            filters={filters}
            handleResetFilters={handleResetFilters}
            handleCheckFilters={handleCheckFilters}
          />
          <ResultProducts cols={2} products={newProducts} />
        </Stack>
      </MediaQuery>
    </Container>
  );
};

export default Category;
