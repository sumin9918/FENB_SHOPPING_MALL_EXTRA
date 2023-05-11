import { Stack, Title, Group, Image, Text, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { COLORS } from '../../constants';

const MEDIAQUERY_WIDTH = 768;

const OrderProducts = ({ products }) => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack w={matches ? '70%' : '90%'} p="2rem">
      <Title fz="2.4rem" mb="2rem" sx={{ textAlign: 'center' }}>
        주문 상품
      </Title>
      <Stack
        py="1.6rem"
        px={matches ? '3.2rem' : '1.6rem'}
        spacing="2rem"
        sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        {products.map(({ selectedSize, quantity, name, price, color, imgURL, id }) => (
          <Group key={id} justify="center" fz="1.4rem">
            <div style={{ width: '20%', minWidth: `${matches ? '10.8rem' : '7.8rem'}` }}>
              <Image
                src={imgURL}
                alt={name}
                withPlaceholder
                width={matches ? '10.8rem' : '7.8rem'}
                height={matches ? '10.8rem' : '7.8rem'}
              />
            </div>
            <Group position="apart" align="flex-start" justify="center" w="70%" my="auto">
              <Stack spacing="0.2rem" maw="fit-content" justify="center">
                <Title fz="1.6rem" fw="bold" c={colorScheme === 'dark' ? 'gray.4' : '#111'}>
                  {name}
                </Title>
                <Text pl="0.2rem">사이즈 : {selectedSize}</Text>
                <Text pl="0.2rem">색상 : {COLORS[color].kr}</Text>
                <Text pl="0.2rem">
                  수량/상품가격 : {quantity} / {price.toLocaleString()} 원
                </Text>
              </Stack>
              <Stack>
                <Text fz="1.6rem" fw="bold" c={colorScheme === 'dark' ? 'gray.4' : '#111'}>
                  {(price * quantity).toLocaleString()} 원
                </Text>
              </Stack>
            </Group>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
};

export default OrderProducts;
