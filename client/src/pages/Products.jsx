import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Stack, Group, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';
import { favoritesQuery, productsQuery, verifyQuery } from '../api/query';
import { toggleFavorite, addCart } from '../api/fetch';
import { Title, Info, Description, CartButton, WishListButton } from '../components/Products';

const MEDIAQUERY_WIDTH = 880;

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

  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

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
      {matches ? (
        <Group position="center" align="flex-start" noWrap="nowrap">
          <Stack m="4.8rem 0 0.8rem" p="0 2.4rem 0 4.8rem" maw="60rem">
            <Image src={imgURL} />
            <Description>{description}</Description>
          </Stack>
          <Stack m="4.8rem 0.8rem 0 0" p="0 4.8rem 0 2.4rem" miw="45.6rem" fz="1.6rem" spacing={0}>
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
      ) : (
        <Stack m="4.8rem 0.8rem 0 0" p="0 5rem" miw="45rem" fz="1.6rem" spacing={0}>
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
      )}
    </Container>
  );
};

export default Products;
