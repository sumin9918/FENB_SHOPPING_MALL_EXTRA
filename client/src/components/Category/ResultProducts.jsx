import { Link } from 'react-router-dom';
import { SimpleGrid, Image, Text, Card, Group, Badge } from '@mantine/core';
import { SadIcon } from '..';
import { PATH } from '../../constants';

const ResultProducts = ({ products, cols = 3 }) => (
  <>
    {products.length === 0 ? (
      <SadIcon>등록된 상품이 없습니다.</SadIcon>
    ) : (
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 1024, cols: 2 }]}>
        {products.map(({ id, imgURL, name, price, brand, feature }) => (
          <Link key={id} to={`${PATH.PRODUCTS}/${id}`}>
            <Card fz="1.6rem" padding="lg" withBorder>
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
      </SimpleGrid>
    )}
  </>
);

export default ResultProducts;
