import { useMantineColorScheme, Stack, Group, Button, Modal, Image, Text } from '@mantine/core';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { FaHeart } from 'react-icons/fa';
import { PATH } from '../../constants';

const Heart = styled(FaHeart)`
  color: ${props => (props.selected ? 'red' : 'lightgray')};
`;

const WishListButton = ({ currentProduct, isSignInUserRef, isFavorite, handleWishListToggle }) => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { imgURL, name, brand, price } = currentProduct;

  const handleWishListModalOpen = () => {
    if (!isSignInUserRef.current) {
      navigate(PATH.SIGNIN, { state: pathname });
    } else {
      if (!isFavorite) {
        open();
      }

      handleWishListToggle();
    }
  };

  const handleModalButtonClick = () => {
    navigate(PATH.WISHLIST);
  };

  return (
    <>
      {isFavorite && (
        <Modal.Root opened={opened} size="50rem" yOffset="0" fz="1.6rem" onClose={close}>
          <Modal.Overlay />
          <Modal.Content p="1.5rem">
            <Modal.Header>
              <Modal.Title fz="1.6rem" fw="600">
                관심 상품에 추가 되었습니다.
              </Modal.Title>
              <Modal.CloseButton size="1.6rem" />
            </Modal.Header>
            <Modal.Body>
              <Stack pt="1rem">
                <Group position="apart" align="flex-start" noWrap="nowrap">
                  <Image src={imgURL} width="15rem" />
                  <Stack w="30rem" pl="1.2rem">
                    <Text fw="600">{name}</Text>
                    <Text fz="1.4rem" fw="500" color="dimmed">
                      {brand.kr}
                    </Text>
                    <Text>{`${price.toLocaleString()} 원`}</Text>
                  </Stack>
                </Group>
                <Button
                  color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
                  radius="3rem"
                  h="5rem"
                  mt="1rem"
                  fz="1.6rem"
                  onClick={handleModalButtonClick}>
                  관심 상품 보기
                </Button>
              </Stack>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}

      <Button variant="default" radius="3rem" h="6rem" m="0.5rem" fz="1.8rem" onClick={handleWishListModalOpen}>
        <Group align="center" spacing="0.5rem">
          <Text mt="0.1rem">관심 상품</Text>
          <Heart selected={isFavorite} />
        </Group>
      </Button>
    </>
  );
};

export default WishListButton;
