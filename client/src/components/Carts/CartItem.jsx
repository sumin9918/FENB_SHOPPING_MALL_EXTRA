import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Group, Image, Title, Text, ActionIcon, NumberInput, useMantineColorScheme, rem } from '@mantine/core';
import { BiTrash } from 'react-icons/bi';
import { useChangeCartQuantityMutation, useRemoveCartMutation } from '../../hooks/carts';
import { CATEGORIES, COLORS, PATH } from '../../constants';

const CartItem = ({ cart }) => {
  const { colorScheme } = useMantineColorScheme();

  const { id, category, color, name, price, imgURL, selectedSize, quantity, stocks } = cart;

  const handlers = useRef();

  const { mutate: changeQuantity } = useChangeCartQuantityMutation();
  const { mutate: removeCart } = useRemoveCartMutation();

  const maxQuantity = stocks?.find(({ size }) => size === selectedSize).stock;

  return (
    <Stack
      w="100%"
      py="2.4rem"
      spacing={0}
      c={colorScheme === 'dark' ? 'gray.6' : 'rgb(117,117,117)'}
      sx={{ borderBottom: '1px solid rgb(117,117,117)' }}>
      <Group align="flex-start">
        <div
          style={{
            width: '180px',
            height: '180px',
            minWidth: '180px',
            paddingRight: '16px',
          }}>
          <Link to={`${PATH.PRODUCTS}/${id}`} state={id}>
            <Image src={imgURL} alt={name} withPlaceholder />
          </Link>
        </div>
        <Stack justify="space-between" grow="true" spacing={0} sx={{ flex: 1 }}>
          <Group position="apart" grow="true" spacing={0} align="flex-start">
            <Stack align="flex-start" justify="flex-start" spacing={0} maw="fit-content">
              <Title fz="1.6rem" fw={500} c={colorScheme === 'dark' ? 'gray.6' : '#111'} sx={{ cursor: 'pointer' }}>
                <Link to={`${PATH.PRODUCTS}/${id}`} state={id}>
                  {name}
                </Link>
              </Title>
              <Text>{CATEGORIES[category]}</Text>
              <Text>{COLORS[color].kr}</Text>
              <Text>사이즈 {selectedSize}</Text>
              <Group spacing="0.4rem">
                <Text sx={{ verticalAlign: 'bottom' }}>수량</Text>
                <ActionIcon
                  size={rem(42)}
                  fz={rem(24)}
                  fw="bold"
                  variant="transparent"
                  onClick={() => handlers.current.decrement()}>
                  –
                </ActionIcon>
                <NumberInput
                  hideControls
                  size="lg"
                  max={maxQuantity}
                  min={1}
                  disabled={true}
                  handlersRef={handlers}
                  value={quantity}
                  onChange={e => changeQuantity({ id, selectedSize, quantity: e })}
                  ta="center"
                  w={rem(54)}
                  sx={{
                    'input:disabled': {
                      backgroundColor: 'transparent',
                      color: `${colorScheme === 'dark' ? '#ddd' : '#333'}`,
                      cursor: 'default',
                    },
                    input: {
                      borderColor: `${colorScheme === 'dark' && '#868e96'}`,
                    },
                  }}
                />
                <ActionIcon
                  size={rem(42)}
                  fz={rem(24)}
                  fw="bold"
                  variant="transparent"
                  onClick={() => handlers.current.increment()}>
                  +
                </ActionIcon>
              </Group>
            </Stack>
            <Stack
              align="flex-start"
              justify="flex-start"
              py="0.2rem"
              spacing={0}
              maw="fit-content"
              c={colorScheme === 'dark' ? 'gray.6' : '#111'}
              ta="right">
              <Title fz="1.8rem" fw={500} c={colorScheme === 'dark' ? 'gray.6' : '#111'}>
                {(price * quantity).toLocaleString()}
              </Title>
            </Stack>
          </Group>
          <div style={{ marginTop: '24px' }}>
            <BiTrash
              style={{ width: '24px', height: '24px', verticalAlign: 'top', cursor: 'pointer' }}
              onClick={() => removeCart({ id, selectedSize })}
            />
          </div>
        </Stack>
      </Group>
      <Text c={colorScheme === 'dark' ? 'gray.6' : '#111'}>무료 배송</Text>
    </Stack>
  );
};

export default CartItem;
