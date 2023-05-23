import { Stack, Title, Group, Image, Text, useMantineColorScheme } from '@mantine/core';

import { useMediaQuery } from 'hooks';
import { MEDIAQUERY_WIDTH } from 'constants';

const OrderProducts = ({ products }) => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack p="2rem" w={matches ? '70%' : '90%'}>
      <Title fz="2.4rem" mb="2rem" sx={{ textAlign: 'center' }}>
        주문 상품
      </Title>
      <Stack
        px={matches ? '3.2rem' : '1.6rem'}
        py="1.6rem"
        spacing="2rem"
        sx={{ border: '1px solid lightgray', borderRadius: '5px' }}>
        {products.map(({ selectedSize, quantity, name, price, color, imgURL, id }) => (
          <Group key={`${id}-${selectedSize}`} fz="1.4rem" justify="center" sx={{ flexWrap: 'nowrap' }}>
            <div style={{ width: '20%', minWidth: `${matches ? '10.8rem' : '7.8rem'}` }}>
              <Image
                alt={name}
                height={matches ? '10.8rem' : '7.8rem'}
                src={imgURL}
                width={matches ? '10.8rem' : '7.8rem'}
                withPlaceholder
              />
            </div>
            <Group align="flex-start" justify="center" my="auto" position="apart" w="70%">
              <Stack justify="center" maw="fit-content" spacing="0.2rem">
                <Title c={colorScheme === 'dark' ? 'gray.4' : '#111'} fw="bold" fz="1.6rem">
                  {name}
                </Title>
                <Text pl="0.2rem">사이즈 : {selectedSize}</Text>
                <Text pl="0.2rem">색상 : {color.kr}</Text>
                <Text pl="0.2rem">
                  수량 / 가격 : {quantity} / {price.toLocaleString('ko-KR')} 원
                </Text>
              </Stack>
              <Stack>
                <Text c={colorScheme === 'dark' ? 'gray.4' : '#111'} fw="bold" fz="1.6rem">
                  {(price * quantity).toLocaleString('ko-KR')} 원
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
