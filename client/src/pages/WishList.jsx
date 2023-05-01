import { Container, Group, Card, Image, Text, Badge, UnstyledButton, Flex } from '@mantine/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import { toggleFavorite } from '../api/favorites';
import { PATH } from '../constants';
import { favoritesQuery } from '../api/loader';
import { NoProduct } from '../components';

const WishList = () => {
  const queryClient = useQueryClient();
  const { data: favorites } = useQuery(favoritesQuery());
  const navigate = useNavigate();

  // 낙관적 업데이트
  const { mutate } = useMutation({
    mutationFn: toggleFavorite,
    onMutate: async id => {
      await queryClient.cancelQueries({ queryKey: ['wishList'] });

      const prevWishList = queryClient.getQueryData(['wishList']);
      queryClient.setQueryData(['wishList'], wishList => wishList.filter(wishItem => wishItem.id !== id));

      return { prevWishList };
    },
    onError: (res, param, context) => queryClient.setQueryData(['wishList'], context.prevWishList),
  });

  const handleRemoveWishItemClick = id => {
    // TODO: 클릭한 상품을 위시리스트에서 지우는 요청을 보낸다.
    // ㄷㄱ : 낙관적 업데이트 필요하다.
    mutate(id);
  };

  const handleClickProduct = id => {
    navigate(`${PATH.PRODUCTS}/${id}`);
  };

  return (
    <>
      <Container size="120rem" p="3.5rem 0 0 1.5rem" fz="2.4rem">
        관심상품 목록
      </Container>
      {favorites.length === 0 ? (
        <NoProduct>관심 상품이 없네요?</NoProduct>
      ) : (
        <Container p="5rem" maw="100%">
          <Flex justify="center" align="center" gap="xl" wrap="wrap">
            {favorites.map(({ id, imgURL, name, brand, price }) => (
              <Card key={id} padding="lg" maw="40rem" fz="1.6rem" withBorder>
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
                    <BiTrash size="2.5rem" />
                  </UnstyledButton>
                </Group>
              </Card>
            ))}
          </Flex>
        </Container>
      )}
    </>
  );
};

export default WishList;
