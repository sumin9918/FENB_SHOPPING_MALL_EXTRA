import { Container, Group, Card, Image, Text, Badge, UnstyledButton } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import { fetchFavorites } from '../api/favorites';
import { PATH } from '../constants';

const WishList = () => {
  const navigate = useNavigate();

  const { data: favorites } = useQuery({ queryKey: ['wishList'], queryFn: fetchFavorites });

  const handleRemoveWishItemClick = id => {
    // TODO: 클릭한 상품을 위시리스트에서 지우는 요청을 보낸다.
  };

  const handleClickProduct = id => {
    navigate(`${PATH.PRODUCTS}/${id}`, { state: id });
  };

  return (
    <>
      <Container size="120rem" sx={{ paddingTop: '3.5rem', fontSize: '2.4rem' }}>
        관심상품 목록
      </Container>
      <Container size="120rem" sx={{ padding: '4rem 0' }}>
        <Group position="left" align="flex-start" noWrap="nowrap">
          {favorites.map(({ id, imgURL, name, brand, price }) => (
            <Card key={id} padding="lg" sx={{ width: '40rem', fontSize: '1.6rem' }} withBorder>
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

              <Text size="1.4rem" color="dimmed">
                {brand.kr}
              </Text>

              <Group position="apart" my="md">
                <Text fw="500">{`${price.toLocaleString()} 원`}</Text>
                <UnstyledButton sx={{ cursor: 'pointer' }} onClick={() => handleRemoveWishItemClick(id)}>
                  <BiTrash size="2.5rem" />
                </UnstyledButton>
              </Group>
            </Card>
          ))}
        </Group>
      </Container>
    </>
  );
};

export default WishList;
