import { Badge, Card, Container, Flex, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { usePageProducts } from '../../hooks/products';
import { PATH } from '../../constants';

const Products = () => {
  const { products } = usePageProducts();

  return (
    <Container p="0" maw="120rem" pos="relative">
      <Flex gap="xl" justify="center" align="center" direction="row" wrap="wrap" m="5rem 0">
        {products.map(({ id, name, price, imgURL, brand, feature }) => (
          <Link to={`${PATH.PRODUCTS}/${id}`} key={id}>
            <Card
              fz="1.6rem"
              padding="lg"
              w="28rem"
              withBorder
              sx={{
                '@media (max-width: 768px)': {
                  width: '20rem',
                },
              }}>
              <Card.Section pos="relative">
                <Image src={imgURL} alt={name} />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs" noWrap>
                <Text weight={500} truncate>
                  {name}
                </Text>
                <Badge color="skyblue" size="xl" variant="light" sx={{ flexShrink: 0 }}>
                  무료배송
                </Badge>
              </Group>

              <Text align="left" size="1.4rem" color="dimmed">
                {brand.kr} / {feature}
              </Text>
              <Text fw={500} size="1.5rem" m="1rem 0">
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
