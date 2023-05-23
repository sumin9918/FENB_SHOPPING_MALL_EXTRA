import { Link } from 'react-router-dom';

import { Badge, Card, Container, Flex, Group, Image, Text } from '@mantine/core';

import { useMediaQuery } from 'hooks';
import { usePageProducts } from 'hooks/products';
import { MEDIAQUERY_WIDTH, PATH } from 'constants';

const Products = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  const { products } = usePageProducts();

  return (
    <Container maw="120rem" p="0" pos="relative">
      <Flex align="center" direction="row" gap="xl" justify="center" m="5rem 0" wrap="wrap">
        {products.map(({ id, name, price, imgURL, brand, feature }) => (
          <Link key={id} to={`${PATH.PRODUCTS}/${id}`}>
            <Card fz="1.6rem" padding="lg" w={matches ? '28rem' : '20rem'} withBorder>
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
        ))}
      </Flex>
    </Container>
  );
};

export default Products;
