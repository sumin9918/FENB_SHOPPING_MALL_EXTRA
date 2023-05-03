import { Link } from 'react-router-dom';
import { Stack, SimpleGrid, Image, Text, Container } from '@mantine/core';
import { SadIcon } from '..';
import { PATH } from '../../constants';

const ResultProducts = ({ products, cols = 3 }) => (
  <>
    {products.length === 0 ? (
      <SadIcon>등록된 상품이 없습니다.</SadIcon>
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

export default ResultProducts;
