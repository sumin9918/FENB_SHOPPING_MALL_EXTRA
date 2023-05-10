import { useQuery } from '@tanstack/react-query';
import { Stack, Title, Group, Image, Text, useMantineColorScheme } from '@mantine/core';
import { cartsQuery } from '../../api/query';
import { COLORS } from '../../constants';

const CartHistoryItemList = () => {
  const { data: carts } = useQuery(cartsQuery());

  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack mb="2rem" pt="2.4rem">
      <Title fz="2rem" fw="bold" mb="0.8rem">
        주문 상품
      </Title>
      {carts.map(({ id, selectedSize, imgURL, name, color, quantity, price }) => (
        <Group
          key={`${id}-${selectedSize}`}
          align="flex-start"
          fz="1.4rem"
          mx="0.8rem"
          c={colorScheme === 'dark' ? 'gray.6' : 'dark'}>
          <div style={{ width: '70px', minWidth: '70px' }}>
            <Image src={imgURL} alt={name} withPlaceholder sx={{ img: { width: '70px' } }} />
          </div>
          <Stack pl="2rem" align="flex-start" justify="flex-start" spacing={0} maw="fit-content">
            <Title fz="1.4rem" fw="bold" c={colorScheme === 'dark' ? 'gray.4' : '#111'} sx={{ cursor: 'pointer' }}>
              {name}
            </Title>
            <Text>사이즈 : {selectedSize}</Text>
            <Text>색상 : {COLORS[color].kr}</Text>
            <Text>
              수량/상품가격 : {quantity} / {price.toLocaleString()} 원
            </Text>
            <Text>가격 : {(price * quantity).toLocaleString()} 원</Text>
          </Stack>
        </Group>
      ))}
    </Stack>
  );
};

export default CartHistoryItemList;
