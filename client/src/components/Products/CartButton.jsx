import { useMantineColorScheme, Stack, Group, Button, Modal, Image, Text } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { PATH } from '../../constants';
import { SadIcon } from '..';

const CartButton = ({
  currentProduct,
  isSizeSelected,
  isSignInUserRef,
  hasStock,
  handleCartClick,
  handleIsSizeSelected,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);
  const { imgURL, name, brand, price } = currentProduct;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleCartModalOpen = () => {
    if (isSizeSelected) {
      if (!isSignInUserRef.current) {
        navigate(PATH.SIGNIN, { state: pathname });
      } else {
        open();

        handleCartClick();
      }
    }

    handleIsSizeSelected();
  };

  const handleModalButtonClick = () => {
    navigate(PATH.CART);
  };

  return (
    <>
      {isSizeSelected && (
        <Modal.Root opened={opened} size="50rem" yOffset="0" sx={{ fontSize: '1.6rem' }} onClose={close}>
          <Modal.Overlay />
          <Modal.Content sx={{ padding: '1.5rem' }}>
            {hasStock ? (
              <>
                <Modal.Header>
                  <Modal.Title fz="1.6rem" fw="600">
                    장바구니에 추가 되었습니다.
                  </Modal.Title>
                  <Modal.CloseButton size="1.6rem" />
                </Modal.Header>
                <Modal.Body>
                  <Stack sx={{ paddingTop: '1rem' }}>
                    <Group position="apart" align="flex-start" noWrap="nowrap">
                      <Image src={imgURL} width="15rem" />
                      <Stack w="30rem" sx={{ paddingLeft: '1.2rem' }}>
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
                      장바구니 보기
                    </Button>
                  </Stack>
                </Modal.Body>
              </>
            ) : (
              <Stack align="center">
                <Modal.Header>
                  <Modal.Title pt="1rem" fz="2rem" fw="600">
                    재고가 부족하여 장바구니에 추가할 수 없습니다
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SadIcon />
                </Modal.Body>
                <Button
                  color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
                  radius="3rem"
                  w="12rem"
                  h="4rem"
                  fz="1.6rem"
                  onClick={close}>
                  돌아가기
                </Button>
              </Stack>
            )}
          </Modal.Content>
        </Modal.Root>
      )}

      <Button
        color={colorScheme === 'dark' ? 'gray.6' : 'dark'}
        radius="3rem"
        h="6rem"
        m="0.5rem"
        fz="1.8rem"
        onClick={handleCartModalOpen}>
        장바구니
      </Button>
    </>
  );
};

export default CartButton;
