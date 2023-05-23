import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  Title,
  Container,
  Group,
  Card,
  Image,
  Text,
  Badge,
  UnstyledButton,
  Flex,
  useMantineTheme,
} from '@mantine/core';
import { BiTrash } from 'react-icons/bi';

import { NoProduct } from 'components/common';
import { favoritesQuery } from 'api/query';
import { useMediaQuery } from 'hooks';
import { useToggleWishItemMutation } from 'hooks/mutation';
import { MEDIAQUERY_WIDTH, PATH } from 'constants';

const WishList = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const theme = useMantineTheme();

  const navigate = useNavigate();

  const { data: favorites } = useQuery(favoritesQuery());

  const { mutate: removeWishItem } = useToggleWishItemMutation();

  const handleRemoveWishItemClick = id => () => {
    removeWishItem({ id, isFavorite: true });
  };

  const handleProductClick = id => () => {
    navigate(`${PATH.PRODUCTS}/${id}`);
  };

  return (
    <Container size="120rem">
      <Title p="0.8rem 0 0 0.8rem">관심상품 목록</Title>
      {favorites.length ? (
        <Flex align="center" gap="xl" m="auto" maw="120rem" p="3.5rem 0 0 1rem" wrap="wrap">
          {favorites.map(({ id, imgURL, name, brand, price, feature }) => (
            <Card key={id} fz="1.6rem" maw={matches ? '35rem' : '20rem'} padding="lg" withBorder>
              <Card.Section>
                <Image alt={name} src={imgURL} sx={{ cursor: 'pointer' }} onClick={handleProductClick(id)} />
              </Card.Section>

              <Group mb="xs" mt="md" position="apart">
                <Text sx={{ cursor: 'pointer' }} weight={500} onClick={handleProductClick(id)}>
                  {name}
                </Text>
                <Badge color="skyblue" h="2rem" variant="light">
                  무료배송
                </Badge>
              </Group>

              <Text align="left" color="dimmed" size="1.4rem">
                {brand.kr} / {feature}
              </Text>

              <Group my="md" position="apart">
                <Text fw="500">{`${price.toLocaleString('ko-KR')} 원`}</Text>
                <UnstyledButton sx={{ cursor: 'pointer' }} onClick={handleRemoveWishItemClick(id)}>
                  <BiTrash color={theme.colors.gray[6]} size="2.5rem" />
                </UnstyledButton>
              </Group>
            </Card>
          ))}
        </Flex>
      ) : (
        <NoProduct pageName={'관심상품 목록'} />
      )}
    </Container>
  );
};

export default WishList;
