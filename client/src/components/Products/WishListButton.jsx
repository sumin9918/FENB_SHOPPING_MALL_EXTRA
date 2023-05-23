import { useLocation, useNavigate } from 'react-router-dom';

import { useMantineColorScheme, Stack, Group, Button, Modal, Image, Text, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaHeart } from 'react-icons/fa';

import { useToggleWishItemMutation } from 'hooks/mutation';
import { useIsFavorite } from 'hooks/products';
import { PATH } from 'constants';

const WishListButton = ({ currentProduct, isSignInRef }) => {
  const { id, imgURL, price, brand, name } = currentProduct;

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [opened, { open, close }] = useDisclosure(false);

  const { mutate: toggleFavorite } = useToggleWishItemMutation();

  const { isFavorite, setIsFavorite } = useIsFavorite(id);

  const handleWishListModalOpenClick = () => {
    if (!isSignInRef.current) {
      navigate(PATH.SIGNIN, { state: pathname });
    } else {
      if (!isFavorite) {
        open();
      }

      setIsFavorite(!isFavorite);
      toggleFavorite({ id, isFavorite, currentProduct });
    }
  };

  const handleModalButtonClick = () => {
    navigate(PATH.WISHLIST);
  };

  return (
    <>
      {isFavorite && (
        <Modal.Root fz="1.6rem" opened={opened} size="50rem" yOffset="0" onClose={close}>
          <Modal.Overlay />
          <Modal.Content p="1.5rem">
            <Modal.Header>
              <Modal.Title fw="600" fz="1.6rem">
                관심 상품에 추가 되었습니다.
              </Modal.Title>
              <Modal.CloseButton size="1.6rem" />
            </Modal.Header>
            <Modal.Body>
              <Stack pt="1rem">
                <Group align="flex-start" noWrap="nowrap" position="apart">
                  <Image alt={name} src={imgURL} width="15rem" />
                  <Stack pl="1.2rem" w="30rem">
                    <Text fw="600">{name}</Text>
                    <Text color="dimmed" fw="500" fz="1.4rem">
                      {brand.kr}
                    </Text>
                    <Text>{`${price.toLocaleString()} 원`}</Text>
                  </Stack>
                </Group>
                <Button
                  color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
                  fz="1.6rem"
                  h="5rem"
                  mt="1rem"
                  radius="3rem"
                  onClick={handleModalButtonClick}>
                  관심 상품 보기
                </Button>
              </Stack>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}

      <Button fz="1.8rem" h="6rem" m="0.5rem" radius="3rem" variant="default" onClick={handleWishListModalOpenClick}>
        <Group align="center" spacing="0.5rem">
          <Text mt="0.1rem">관심 상품</Text>
          <FaHeart color={isFavorite ? theme.colors.red[6] : theme.colors.gray[3]} />
        </Group>
      </Button>
    </>
  );
};

export default WishListButton;
