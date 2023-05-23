import { useRef } from 'react';

import { Link } from 'react-router-dom';

import { Stack, Group, Image, Title, Text, ActionIcon, NumberInput, useMantineTheme } from '@mantine/core';
import { BiTrash } from 'react-icons/bi';

import { useQuantityOfStocks } from 'hooks/carts';
import { useChangeCartQuantityMutation, useRemoveCartMutation } from 'hooks/mutation';
import { PATH } from 'constants';

const CartItem = ({ cart: { id, category, color, name, price, imgURL, selectedSize, quantity } }) => {
  const { colors, colorScheme } = useMantineTheme();

  const { mutate: changeCartQuantityMuatate } = useChangeCartQuantityMutation();
  const { mutate: removeCartMutate } = useRemoveCartMutation();
  const maxQuantity = useQuantityOfStocks(id, selectedSize);
  const handlers = useRef(null);

  const handleUpdateCartQuantityChange = quantity => changeCartQuantityMuatate({ id, selectedSize, quantity });
  const handleRemoveCartClick = () => removeCartMutate({ id, selectedSize });
  const handleIncreaseCartQuantityClick = () => handlers.current.increment();
  const handleDecreaseCartQuantityClick = () => handlers.current.decrement();

  return (
    <Stack
      c="gray.6"
      py="2.4rem"
      sx={{ borderBottom: `1px solid ${colorScheme === 'dark' ? colors.gray[8] : colors.gray[3]}` }}>
      <Group spacing="1.6rem" sx={{ flexWrap: 'nowrap' }}>
        <Link state={id} to={`${PATH.PRODUCTS}/${id}`}>
          <Image alt={name} height="18rem" src={imgURL} width="18rem" withPlaceholder />
        </Link>

        <Stack gap="1.6rem" justify="space-between" spacing="1.6rem" sx={{ flexGrow: 1 }}>
          <Group align="flex-start" position="apart">
            <Stack spacing="0.2rem">
              <Title
                c={colorScheme === 'dark' ? 'gray.6' : colors.gray[9]}
                fw="bold"
                fz="1.6rem"
                mb="0.8rem"
                sx={{ cursor: 'pointer' }}>
                <Link state={id} to={`${PATH.PRODUCTS}/${id}`}>
                  {name}
                </Link>
              </Title>
              <Text>{category.kr}</Text>
              <Text>{color.kr}</Text>
              <Text>사이즈 {selectedSize}</Text>
              <Group spacing={0}>
                <Text>수량</Text>
                <ActionIcon
                  fw="bold"
                  fz="1.5rem"
                  size="3rem"
                  variant="transparent"
                  onClick={handleDecreaseCartQuantityClick}>
                  –
                </ActionIcon>
                <NumberInput
                  handlersRef={handlers}
                  max={maxQuantity}
                  min={1}
                  size="lg"
                  value={quantity}
                  w="4rem"
                  styles={{
                    input: {
                      textAlign: 'center',
                      borderColor: `${colorScheme === 'dark' && colors.gray[7]}`,
                      '&:disabled': {
                        backgroundColor: 'transparent',
                        color: `${colorScheme === 'dark' ? colors.gray[2] : colors.gray[9]}`,
                        cursor: 'default',
                      },
                    },
                  }}
                  disabled
                  hideControls
                  onChange={handleUpdateCartQuantityChange}
                />
                <ActionIcon
                  fw="bold"
                  fz="1.5rem"
                  size="3rem"
                  variant="transparent"
                  onClick={handleIncreaseCartQuantityClick}>
                  +
                </ActionIcon>
              </Group>
            </Stack>
            <Stack c={colorScheme === 'dark' ? 'gray.6' : colors.gray[1]} spacing={0}>
              <Title c={colorScheme === 'dark' ? 'gray.6' : 'dark'} fz="1.6rem">
                {(price * quantity).toLocaleString('ko-KR')} 원
              </Title>
            </Stack>
          </Group>
          <BiTrash size="2.4rem" style={{ cursor: 'pointer' }} onClick={handleRemoveCartClick} />
        </Stack>
      </Group>
      <Text color={colorScheme === 'dark' ? 'gray.6' : 'dark'}>무료 배송</Text>
    </Stack>
  );
};

export default CartItem;
