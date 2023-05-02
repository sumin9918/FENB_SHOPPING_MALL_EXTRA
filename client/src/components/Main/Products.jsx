import { Badge, Button, Card, Container, Flex, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { usePageProducts } from '../../hooks/products';
import { PATH } from '../../constants';

const Products = () => {
  const { products } = usePageProducts();

  return (
    <Container p="0" maw="120rem" pos="relative">
      <Flex gap="xl" justify="center" align="center" direction="row" wrap="wrap" m="5rem 0">
        {products.map(({ id, name, price, imgURL, brand }) => (
          <Link to={`${PATH.PRODUCTS}/${id}`} key={id}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              w="28rem"
              withBorder
              sx={{
                '@media (max-width: 900px)': {
                  width: '20rem',
                },
              }}>
              <Card.Section pos="relative">
                <Image src={imgURL} alt={name} />
                <Badge
                  variant="light"
                  size="xl"
                  h="3rem"
                  fz="1.3rem"
                  pos="absolute"
                  bottom="1rem"
                  right="1rem"
                  sx={{ backgroundColor: 'rgba(255, 240, 246, 1)', color: '#e64980' }}>
                  무료 배송
                </Badge>
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight="bold" size="2rem" truncate>
                  {name}
                </Text>
              </Group>

              <Text size="1.5rem" color="dimmed">
                {brand.kr}
              </Text>
              <Text size="1.5rem" color="dimmed">
                {price.toLocaleString('ko-KR')}
              </Text>

              <Button variant="light" color="blue" fullWidth mt="md" radius="md" size="2rem" h="4rem">
                상품 보러 가기
              </Button>
            </Card>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default Products;
