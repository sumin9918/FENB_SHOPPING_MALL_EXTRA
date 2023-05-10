import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
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
import { favoritesQuery } from '../api/query';
import { useRemoveWishItemMutation } from '../hooks/wishList';
import { PATH } from '../constants';
import { NoProduct } from '../components';

const WishList = () => {
  const { data: favorites } = useQuery(favoritesQuery());
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const { mutate } = useRemoveWishItemMutation();

  const handleRemoveWishItemClick = id => {
    mutate(id);
  };

  const handleClickProduct = id => {
    navigate(`${PATH.PRODUCTS}/${id}`);
  };

  return (
    <Container size="120rem" pt="4rem">
      <Title p="0.8rem 0 0 0.8rem">관심상품 목록</Title>
      {favorites.length === 0 ? (
        <NoProduct pageName={'관심상품 목록'} />
      ) : (
        <Flex p="3.5rem 0 0 1rem" align="center" gap="xl" wrap="wrap">
          {favorites.map(({ id, imgURL, name, brand, price }) => (
            <Card key={id} padding="lg" maw="38rem" fz="1.6rem" withBorder>
              <Card.Section>
                <Image src={imgURL} alt="product" sx={{ cursor: 'pointer' }} onClick={() => handleClickProduct(id)} />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500} sx={{ cursor: 'pointer' }} onClick={() => handleClickProduct(id)}>
                  {name}
                </Text>
                <Badge color="skyblue" h="2rem" variant="light">
                  무료배송
                </Badge>
              </Group>

              <Text align="left" size="1.4rem" color="dimmed">
                {brand.kr}
              </Text>

              <Group position="apart" my="md">
                <Text fw="500">{`${price.toLocaleString()} 원`}</Text>
                <UnstyledButton sx={{ cursor: 'pointer' }} onClick={() => handleRemoveWishItemClick(id)}>
                  <BiTrash
                    size="2.5rem"
                    color={theme.colorScheme === 'dark' ? theme.colors.gray[6] : 'rgb(117,117,117)'}
                  />
                </UnstyledButton>
              </Group>
            </Card>
          ))}
        </Flex>
      )}
    </Container>
  );
};

export default WishList;
