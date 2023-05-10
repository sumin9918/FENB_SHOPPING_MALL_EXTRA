import { Stack, Title, Group, Image, Text, useMantineColorScheme } from '@mantine/core';
import { COLORS } from '../../constants';

const OrderProducts = ({ products }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack w="70%" p="2rem">
      <Title fz="2.4rem" mb="2rem" sx={{ textAlign: 'center' }}>
        주문 상품
      </Title>
      <Stack py="1.6rem" px="3.2rem" spacing="2rem" sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        {products.map(({ selectedSize, quantity, name, price, color, imgURL, id }) => (
          <Group key={id} position="center" align="flex-start" fz="1.4rem">
            <div style={{ width: '20%', minWidth: '110px' }}>
              {/* <Image src={imgURL} alt={name} withPlaceholder sx={{ img: { width: '100px' } }} /> */}
              <Image src={imgURL} alt={name} withPlaceholder width="11rem" height="11rem" />
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
