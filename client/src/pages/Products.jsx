import {
  useMantineColorScheme,
  Container,
  Stack,
  Group,
  Button,
  ColorSwatch,
  Modal,
  SimpleGrid,
  Image,
  Text,
  MediaQuery,
} from '@mantine/core';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { FaHeart } from 'react-icons/fa';
import { toggleFavorite } from '../api/favorites';
import { PATH } from '../constants';
import { addCart } from '../api/carts';
import { favoritesQuery, productsQuery, verifyQuery } from '../api/query';
import { SadIcon, SizeButton } from '../components';

const SizeButtonContainer = styled(SimpleGrid)`
  border: ${props => props.selected && '1px solid #F36B26'};
  border-radius: 0.4rem;
`;

const Heart = styled(FaHeart)`
  color: ${props => (props.selected ? 'red' : 'lightgray')};
`;

const Title = ({ children }) => (
  <Text fz="2.8rem" fw="600">
    {children}
  </Text>
);

const Info = ({ currentProduct, isSizeSelected, currentSelectedSize, handleSizeClick }) => {
  const { price, color, brand, stocks } = currentProduct;

  return (
    <>
      <Text fw="500" color="dimmed">
        {brand.kr}
      </Text>
      <Text fw="600" m="1.2rem 0">{`${price.toLocaleString()} 원`}</Text>
      <Stack>
        <Text fw="600">사이즈 선택</Text>
        <SizeButtonContainer cols={5} selected={isSizeSelected === false}>
          {stocks.map(({ size, stock }) => (
            <SizeButton
              key={size}
              variant="default"
              radius="0.4rem"
              disabled={stock === 0}
              selected={size === currentSelectedSize}
              onClick={() => handleSizeClick(size)}>
              {size}
            </SizeButton>
          ))}
        </SizeButtonContainer>
        {isSizeSelected === false ? (
          <Text fw="500" color="red">
            사이즈를 선택해주세요
          </Text>
        ) : null}
        <Stack align="center" w="5rem" spacing="xs" m="1.4rem 0">
          <ColorSwatch color={color.color} size="2.5rem" />
          <Text m="0" fz="1.4rem" fw="500">
            {color.kr}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

const Description = ({ children }) => (
  <Text fz="1.6rem" fw="500" lh="3.2rem" mt="1.5rem">
    {children}
  </Text>
);

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
                      sx={{ marginTop: '1rem', fontSize: '1.6rem' }}
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
                  sx={{ fontSize: '1.6rem' }}
                  onClick={close}>
                  {'돌아가기'}
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
        sx={{ margin: '0.5rem', fontSize: '1.8rem' }}
        onClick={handleCartModalOpen}>
        <Text>장바구니</Text>
      </Button>
    </>
  );
};

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
        <Modal.Root opened={opened} size="50rem" yOffset="0" sx={{ fontSize: '1.6rem' }} onClose={close}>
          <Modal.Overlay />
          <Modal.Content sx={{ padding: '1.5rem' }}>
            <Modal.Header>
              <Modal.Title fz="1.6rem" fw="600">
                {`관심 상품에 추가 되었습니다.`}
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
                  sx={{ marginTop: '1rem', fontSize: '1.6rem' }}
                  onClick={handleModalButtonClick}>
                  관심 상품 보기
                </Button>
              </Stack>
            </Modal.Body>
          </Modal.Content>
        </Modal.Root>
      )}

      <Button
        variant="default"
        radius="3rem"
        h="6rem"
        sx={{ margin: '0.5rem', fontSize: '1.8rem' }}
        onClick={handleWishListModalOpen}>
        <Group align="center" spacing="0.5rem">
          <Text mt="0.1rem">관심 상품</Text>
          <Heart selected={isFavorite} />
        </Group>
      </Button>
    </>
  );
};

const Products = () => {
  const { data: products } = useQuery(productsQuery());
  const { data: favorites } = useQuery(favoritesQuery());
  const { data: verify } = useQuery(verifyQuery());
  const { pathname } = useLocation();

  const getIdfromPath = pathname => +pathname.split('/').at(-1);

  const currentProduct = products?.find(product => product.id === getIdfromPath(pathname));

  const { id, name, description, imgURL } = currentProduct;

  const [currentSelectedSize, setCurrentSelectedSize] = useState(-1);
  const [isSizeSelected, setIsSizeSelected] = useState(null);

  const isSignInUserRef = useRef(null);
  const [hasStock, setHasStock] = useState(true);

  const [isFavorite, setIsFavorite] = useState(verify ? favorites.some(product => product.id === id) : false);

  useEffect(() => {
    setHasStock(true);
  }, [currentSelectedSize]);

  useEffect(() => {
    isSignInUserRef.current = verify;
  }, [verify]);

  const handleIsSizeSelected = () => {
    setIsSizeSelected(!!isSizeSelected);
  };

  const handleSizeClick = selectedSize => {
    setCurrentSelectedSize(selectedSize);
    setIsSizeSelected(true);
  };

  const handleCartClick = async selectedSize => {
    try {
      await addCart({ id, selectedSize });
    } catch (e) {
      setHasStock(selectedSize !== currentSelectedSize);
    }
  };

  const handleWishListToggle = () => {
    setIsFavorite(!isFavorite);

    toggleFavorite(id);
  };

  return (
    <Container size="120rem" p="0 0 5rem 0">
      <MediaQuery smallerThan={880} styles={{ display: 'none' }}>
        <Group position="center" align="flex-start" noWrap="nowrap">
          <Stack m="4.8rem 0 0.8rem" p="0 2.4rem 0 4.8rem" maw="60rem">
            <Image src={imgURL} />
            <Description>{description}</Description>
          </Stack>
          <Stack m="4.8rem 0.8rem 0 0" p="0 4.8rem 0 2.4rem" miw="45.6rem" fz="1.6rem">
            <Title>{name}</Title>
            <Info
              currentProduct={currentProduct}
              isSizeSelected={isSizeSelected}
              currentSelectedSize={currentSelectedSize}
              handleSizeClick={handleSizeClick}
            />
            <CartButton
              currentProduct={currentProduct}
              isSizeSelected={isSizeSelected}
              isSignInUserRef={isSignInUserRef}
              hasStock={hasStock}
              handleCartClick={() => handleCartClick(currentSelectedSize)}
              handleIsSizeSelected={handleIsSizeSelected}
            />
            <WishListButton
              currentProduct={currentProduct}
              isSignInUserRef={isSignInUserRef}
              isFavorite={isFavorite}
              handleWishListToggle={handleWishListToggle}
            />
          </Stack>
        </Group>
      </MediaQuery>
      <MediaQuery largerThan={879} styles={{ display: 'none' }}>
        <Stack m="4.8rem 0.8rem 0 0" p="0 5rem" miw="45rem" fz="1.6rem">
          <Title>{name}</Title>
          <Image src={imgURL} />
          <Info
            currentProduct={currentProduct}
            isSizeSelected={isSizeSelected}
            currentSelectedSize={currentSelectedSize}
            handleSizeClick={handleSizeClick}
          />
          <CartButton
            currentProduct={currentProduct}
            isSizeSelected={isSizeSelected}
            isSignInUserRef={isSignInUserRef}
            hasStock={hasStock}
            handleCartClick={() => handleCartClick(currentSelectedSize)}
            handleIsSizeSelected={handleIsSizeSelected}
          />
          <WishListButton
            currentProduct={currentProduct}
            isSignInUserRef={isSignInUserRef}
            isFavorite={isFavorite}
            handleWishListToggle={handleWishListToggle}
          />
          <Description>{description}</Description>
        </Stack>
      </MediaQuery>
    </Container>
  );
};

export default Products;
