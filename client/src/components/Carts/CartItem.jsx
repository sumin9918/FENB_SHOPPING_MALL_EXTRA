import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Group, Image, Title, Text, ActionIcon, NumberInput, useMantineColorScheme } from '@mantine/core';
import { BiTrash } from 'react-icons/bi';
import { useGetStocks } from '../../hooks/carts';
import { useChangeCartQuantityMutation, useRemoveCartMutation } from '../../hooks/mutation';
import { PATH } from '../../constants';

const CartItem = ({ cart: { id, category, color, name, price, imgURL, selectedSize, quantity } }) => {
  const { colorScheme } = useMantineColorScheme();

  const stocks = useGetStocks(id);

  const handlers = useRef();

  const { mutate: changeCartQuantity } = useChangeCartQuantityMutation();
  const { mutate: removeCart } = useRemoveCartMutation();

  const maxQuantity = stocks?.find(({ size }) => size === selectedSize).stock;

  const handleDecreaseClick = () => handlers.current.decrement();
  const handleIncreaseClick = () => handlers.current.increment();
  const handleChangeCartQuantityClick = quantity => changeCartQuantity({ id, selectedSize, quantity });
  const handleRemoveCartClick = () => removeCart({ id, selectedSize });

  return (
    <Stack
      w="100%"
      spacing={0}
      py="2.4rem"
      c={colorScheme === 'dark' ? 'gray.6' : 'rgb(117,117,117)'}
      sx={{ borderBottom: `1px solid ${colorScheme === 'dark' ? '#343a40' : '#dee2e6'}` }}>
      <Group align="flex-start" sx={{ flexWrap: 'nowrap' }}>
        <div
          style={{
            width: '18rem',
            height: '18rem',
            minWidth: '18rem',
            paddingRight: '1.6rem',
          }}>
          <Link to={`${PATH.PRODUCTS}/${id}`} state={id}>
            <Image src={imgURL} alt={name} withPlaceholder />
          </Link>
        </div>
        <Stack justify="space-between" grow="true" spacing={0} sx={{ flex: 1 }}>
          <Group position="apart" grow="true" spacing={0} align="flex-start">
            <Stack align="flex-start" justify="flex-start" spacing="0.2rem" maw="fit-content">
              <Title
                mb="0.8rem"
                fz="1.6rem"
                fw={500}
                c={colorScheme === 'dark' ? 'gray.6' : '#111'}
                sx={{ cursor: 'pointer' }}>
                <Link to={`${PATH.PRODUCTS}/${id}`} state={id}>
                  {name}
                </Link>
              </Title>
              <Text>{category.kr}</Text>
              <Text>{color.kr}</Text>
              <Text>사이즈 {selectedSize}</Text>
              <Group spacing="0.4rem" mb="0.8rem">
                <Text sx={{ verticalAlign: 'bottom' }}>수량</Text>
                <ActionIcon size="2.6rem" fz="1.6rem" fw="bold" variant="transparent" onClick={handleDecreaseClick}>
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
                  onChange={handleChangeCartQuantityClick}
                  ta="center"
                  w="3.2rem"
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
                <ActionIcon size="2.6rem" fz="1.6rem" fw="bold" variant="transparent" onClick={handleIncreaseClick}>
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
              <Title fz="1.6rem" fw={500} c={colorScheme === 'dark' ? 'gray.6' : '#111'}>
                {(price * quantity).toLocaleString()} 원
              </Title>
            </Stack>
          </Group>
          <div style={{ marginTop: '1.6rem' }}>
            <BiTrash
              style={{ width: '2.4px', height: '2.4px', verticalAlign: 'top', cursor: 'pointer' }}
              onClick={handleRemoveCartClick}
            />
          </div>
        </Stack>
      </Group>
      <Text c={colorScheme === 'dark' ? 'gray.6' : '#111'}>무료 배송</Text>
    </Stack>
  );
};

export default CartItem;
