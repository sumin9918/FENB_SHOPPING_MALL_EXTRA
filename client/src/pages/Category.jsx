import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { FaCheck } from 'react-icons/fa';
import {
  Container,
  Stack,
  Group,
  ScrollArea,
  Select,
  Accordion,
  Checkbox,
  Button,
  UnstyledButton,
  ColorSwatch,
  SimpleGrid,
  Image,
  Text,
} from '@mantine/core';
import { fetchProducts } from '../api';

const prices = [
  { rangeIdx: 0, text: '0 - 50,000원' },
  { rangeIdx: 1, text: '50,000 - 100,000원' },
  { rangeIdx: 2, text: '100,000 - 150,000원' },
  { rangeIdx: 3, text: '150,000원 이상' },
];

const sizes = [230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285];

const colors = [
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

const gender = [
  { en: 'male', kr: '남성' },
  { en: 'female', kr: '여성' },
];

const brands = [
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

  border-color: ${props => props.selected && '#F36B26'};
`;

const Header = () => (
  <Group position="apart">
    <Container sx={{ margin: '0', padding: '15px 0', fontSize: '2.4rem' }}>카테고리 이름 / 검색문자열(숫자)</Container>
    <Select
      size="xl"
      maxDropdownHeight={500}
      placeholder="정렬 기준"
      variant="unstyled"
      data={[
        { value: 'favorite', label: '추천순' },
        { value: 'new', label: '최신순' },
        { value: 'low', label: '높은 가격순' },
        { value: 'high', label: '낮은 가격순' },
      ]}
    />
  </Group>
);

const Filters = ({
  sizeFilters,
  colorFilters,
  handleCheckPrice,
  handleSelectedSize,
  handleSelectColor,
  handleCheckGender,
  handleCheckBrand,
}) => (
  <ScrollArea h={1000} offsetScrollbars>
    <Container
      sx={{
        width: '240px',
        flexDirection: 'column',
        padding: '0',
      }}>
      <Accordion
        defaultValue={['price', 'size', 'color', 'gender', 'brand']}
        sx={{ label: { fontSize: '1.6rem' }, span: { fontSize: '1.6rem' } }}
        multiple>
        <Accordion.Item value="price">
          <Accordion.Control>가격</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {prices.map(({ rangeIdx, text }) => (
                <Checkbox key={rangeIdx} size="lg" label={text} onChange={() => handleCheckPrice(rangeIdx)} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="size">
          <Accordion.Control>사이즈</Accordion.Control>
          <Accordion.Panel>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
              {sizes.map((size, i) => (
                <SizeButton
                  key={size}
                  variant="default"
                  radius="md"
                  selected={sizeFilters.at(i)}
                  onClick={() => handleSelectedSize(size)}>
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
              {colors.map(({ color, en, kr }, i) => (
                <Stack key={color} spacing={'0.2rem'} align="center">
                  <UnstyledButton>
                    <ColorSwatch
                      color={color}
                      size={'3.0rem'}
                      selected={colorFilters.at(i)}
                      onClick={() => handleSelectColor(en)}>
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
              {gender.map(({ en, kr }) => (
                <Checkbox key={en} size="lg" label={kr} onChange={() => handleCheckGender(en)} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="brand">
          <Accordion.Control>제조사</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {brands.map(({ en, kr }) => (
                <Checkbox key={en} size="lg" label={kr} onChange={() => handleCheckBrand(en)} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  </ScrollArea>
);

const ResultProducts = () => {
  const { data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });

  // console.log(products);

  // 서버에서 받아온 products를 저장한 상태
  const [currentProducts, setCurrentProducts] = useState(products);

  // filters states
  const [priceFilters, setPriceFilters] = useState(Array.from({ length: prices.length }, () => false));
  const [sizeFilters, setSizeFilters] = useState(Array.from({ length: sizes.length }, () => false));
  const [colorFilters, setColorFilters] = useState(Array.from({ length: colors.length }, () => false));
  const [genderFilters, setGenderFilters] = useState(Array.from({ length: gender.length }, () => false));
  const [brandFilters, setBrandFilters] = useState(Array.from({ length: brands.length }, () => false));

  const handleCheckPrice = rangeIdx => {
    const newPriceFilter = priceFilters.map((filter, i) => (i === rangeIdx ? !filter : filter));

    setPriceFilters(newPriceFilter);

    const newProducts = [
      ...newPriceFilter.map((filter, i) =>
        filter
          ? i !== priceFilters.length - 1
            ? products.filter(({ price }) => i * 50000 <= price && price < (i + 1) * 50000)
            : products.filter(({ price }) => i * 50000 <= price)
          : []
      ),
    ].flat();

    setCurrentProducts(newProducts);

    const toggleAll = newPriceFilter.every(v => v === false);

    if (toggleAll) {
      setCurrentProducts(products);
    }
  };

  const handleSelectedSize = selectedSize => {
    const newSizeFilters = sizeFilters.map((filter, i) => (sizes.at(i) === selectedSize ? !filter : filter));

    setSizeFilters(newSizeFilters);

    const newProducts = [
      ...newSizeFilters.map((filter, i) =>
        filter
          ? products.filter(({ details }) => details.sizes.some(({ size, stock }) => size === sizes.at(i) && stock > 0))
          : []
      ),
    ].flat();

    setCurrentProducts([...new Set(newProducts)]);

    const toggleAll = newSizeFilters.every(v => v === false);

    if (toggleAll) {
      setCurrentProducts(products);
    }
  };

  const handleSelectColor = selectedColor => {
    const newColorFilters = colorFilters.map((filter, i) => (colors.at(i).en === selectedColor ? !filter : filter));

    setColorFilters(newColorFilters);

    const newProducts = [
      ...newColorFilters.map((filter, i) => (filter ? products.filter(({ details }) => i === details.color) : [])),
    ].flat();

    setCurrentProducts(newProducts);

    const toggleAll = newColorFilters.every(v => v === false);

    if (toggleAll) {
      setCurrentProducts(products);
    }
  };

  const handleCheckGender = en => {
    const newGenderFilter = genderFilters.map((filter, i) => (en === gender.at(i).en ? !filter : filter));

    setGenderFilters(newGenderFilter);

    const newProducts = [
      ...newGenderFilter.map((filter, i) => (filter ? products.filter(({ details }) => i === details.gender) : [])),
    ].flat();

    setCurrentProducts(newProducts);

    const toggleAll = newGenderFilter.every(v => v === false);

    if (toggleAll) {
      setCurrentProducts(products);
    }
  };

  const handleCheckBrand = en => {
    const newBrandFilter = brandFilters.map((filter, i) => (en === brands.at(i).en ? !filter : filter));

    setBrandFilters(newBrandFilter);

    const newProducts = [
      ...newBrandFilter.map((filter, i) => (filter ? products.filter(({ brand }) => i === brand) : [])),
    ].flat();

    setCurrentProducts(newProducts);

    const toggleAll = newBrandFilter.every(v => v === false);

    if (toggleAll) {
      setCurrentProducts(products);
    }
  };

  return (
    <Group align="flex-start" position="apart" noWrap="true">
      <Filters
        sizeFilters={sizeFilters}
        colorFilters={colorFilters}
        handleCheckPrice={handleCheckPrice}
        handleSelectedSize={handleSelectedSize}
        handleSelectColor={handleSelectColor}
        handleCheckGender={handleCheckGender}
        handleCheckBrand={handleCheckBrand}
      />
      <SimpleGrid cols={3}>
        {currentProducts.map(({ id, imgURL, name, price, features, color }) => (
          <Stack key={id} sx={{ fontSize: '1.6rem' }}>
            <Image src={imgURL} alt="Product Image" />
            <Stack spacing="xs" sx={{ padding: '0 1rem' }}>
              <Text fz="2rem" fw="bold">
                {name}
              </Text>
              <Text fw={700}>{features.emphasize}</Text>
              <Text fw={500}>{features.character}</Text>
              <Text color="#757575">{colors.at(color).kr}</Text>
              <Text fw="bold" sx={{ lineHeight: '2em' }}>
                {`${price.toLocaleString()} 원`}
              </Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Group>
  );
};

const Category = () => (
  <Container sx={{ minWidth: '1200px', maxWidth: '1920px', padding: '0 8rem' }}>
    <Header />
    <ResultProducts />
  </Container>
);

export default Category;
