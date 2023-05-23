import { Link } from 'react-router-dom';

import { Badge, Card, Container, Grid, Group, Image, Text } from '@mantine/core';

import { useMediaQuery } from 'hooks';
import { usePageProducts } from 'hooks/products';
import { MEDIAQUERY_WIDTH, PATH } from 'constants';

const Products = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  const { products } = usePageProducts();

  return (
    <Container p="0" pos="relative" size="120rem">
      <Grid m="5rem 0">
        {products.map(({ id, name, price, imgURL, brand, feature }) => (
          <Grid.Col
            key={id}
            span={3}
            sx={{
              '@media (max-width: 1024px)': {
                flexBasis: 'calc(100% / 3)',
                maxWidth: 'calc(100% / 3)',
              },
              '@media (max-width: 768px)': {
                flexBasis: '50%',
                maxWidth: '50%',
              },
            }}>
            <Link to={`${PATH.PRODUCTS}/${id}`}>
              <Card fz="1.6rem" padding="lg" withBorder>
                <Card.Section pos="relative">
                  <Image alt={name} src={imgURL} />
                </Card.Section>

                <Group mb="xs" mt="md" position="apart" noWrap>
                  <Text weight={500} truncate>
                    {name}
                  </Text>
                  <Badge color="skyblue" size="xl" sx={{ flexShrink: 0 }} variant="light">
                    무료배송
                  </Badge>
                </Group>

                <Text align="left" color="dimmed" size="1.4rem">
                  {brand.kr} / {feature}
                </Text>
                <Text fw={500} m="1rem 0" size="1.5rem">
                  {`${price.toLocaleString('ko-KR')} 원`}
                </Text>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
