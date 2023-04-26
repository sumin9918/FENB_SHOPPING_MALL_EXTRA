import { useState } from 'react';
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
  Flex,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../api';
import { PATH } from '../constants';

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
    <Container sx={{ margin: '0', padding: '1.5rem 0', fontSize: '2.4rem' }}>
      카테고리 이름 / 검색문자열(숫자)
    </Container>
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

const Filters = ({ sizeFilters, colorFilters, handleCheckFilters }) => (
  <ScrollArea h="100rem" offsetScrollbars w="27rem">
    <Container
      sx={{
        width: '24rem',
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
                <Checkbox key={rangeIdx} size="lg" label={text} onChange={() => handleCheckFilters({ rangeIdx })} />
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
                  onClick={() => handleCheckFilters({ selectedSize: size })}>
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
                      onClick={() => handleCheckFilters({ selectedColor: en })}>
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
                <Checkbox key={en} size="lg" label={kr} onChange={() => handleCheckFilters({ genderEn: en })} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="brand">
          <Accordion.Control>제조사</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {brands.map(({ en, kr }) => (
                <Checkbox key={en} size="lg" label={kr} onChange={() => handleCheckFilters({ brand: en })} />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  </ScrollArea>
);

const ResultProducts = () => {
  // 서버에서 받아온 data를 products로 저장
  const { data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });

  const [currentProducts, setCurrentProducts] = useState(products);

  // filters states
  const [filters, setFilters] = useState({
    priceFilters: Array.from({ length: prices.length }, () => false),
    sizeFilters: Array.from({ length: sizes.length }, () => false),
    colorFilters: Array.from({ length: colors.length }, () => false),
    genderFilters: Array.from({ length: gender.length }, () => false),
    brandFilters: Array.from({ length: brands.length }, () => false),
  });

  const handleCheckFilters = ({ rangeIdx, selectedSize, selectedColor, genderEn, brand }) => {
    const newFilters = {
      priceFilters: filters.priceFilters.map((filter, i) => (rangeIdx === i ? !filter : filter)),
      sizeFilters: filters.sizeFilters.map((filter, i) => (selectedSize === sizes.at(i) ? !filter : filter)),
      colorFilters: filters.colorFilters.map((filter, i) => (selectedColor === colors.at(i).en ? !filter : filter)),
      genderFilters: filters.genderFilters.map((filter, i) => (genderEn === gender.at(i).en ? !filter : filter)),
      brandFilters: filters.brandFilters.map((filter, i) => (brand === brands.at(i).en ? !filter : filter)),
    };

    setFilters({ ...filters, ...newFilters });

    const { priceFilters, sizeFilters, colorFilters, genderFilters, brandFilters } = newFilters;

    //   const filteredPrice = [
    //     ...priceFilters.map((filter, i) =>
    //       filter
    //         ? i !== priceFilters.length - 1
    //           ? products.filter(({ price }) => i * 50000 <= price && price < (i + 1) * 50000)
    //           : products.filter(({ price }) => i * 50000 <= price)
    //         : []
    //     ),
    //   ].flat();

    // const filteredSize = [
    //   ...new Set(
    //     [
    //       ...sizeFilters.map((filter, i) =>
    //         filter
    //           ? products.filter(({ stocks }) => stocks.some(({ size, stock }) => size === sizes.at(i) && stock > 0))
    //           : []
    //       ),
    //     ].flat()
    //   ),
    // ];

    const filteredColor = [
      ...colorFilters.map((filter, i) => (filter ? products.filter(({ color }) => color.en === colors.at(i).en) : [])),
    ].flat();

    console.log(products[0].color);

    // const filteredGender = [
    //   ...genderFilters.map((filter, i) => (filter ? filteredColor.filter(({ details }) => i === details.gender) : [])),
    // ].flat();

    // const filteredBrand = [
    //   ...brandFilters.map((filter, i) => (filter ? filteredGender.filter(({ brand }) => i === brand) : [])),
    // ].flat();

    console.log(filteredColor);

    setCurrentProducts(filteredColor);
  };

  return (
    <Flex sx={{ gap: '1rem' }}>
      <Filters
        sizeFilters={filters.sizeFilters}
        colorFilters={filters.colorFilters}
        handleCheckFilters={handleCheckFilters}
        sx={{ zIndex: 100 }}
      />
      <SimpleGrid cols={3}>
        {currentProducts.map(({ id, imgURL, name, price, features, color }) => (
          <Link key={id} to={`${PATH.PRODUCTS}/${id}`} state={id}>
            <Stack sx={{ fontSize: '1.6rem', cursor: 'pointer' }}>
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
          </Link>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const Category = () => (
  <Container sx={{ minWidth: '120rem', maxWidth: '192rem', padding: '0 8rem' }}>
    <Header />
    <ResultProducts />
  </Container>
);

export default Category;
