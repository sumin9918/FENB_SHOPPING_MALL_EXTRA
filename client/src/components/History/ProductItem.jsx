import { Link } from 'react-router-dom';

import { Group, Stack, Text, Image, useMantineTheme } from '@mantine/core';

import { PATH } from 'constants';

const ProductItem = ({ product: { id, imgURL, name, color, selectedSize } }) => {
  const { colors, colorScheme } = useMantineTheme();

  return (
    <Group spacing="2.8rem">
      <Link to={`${PATH.PRODUCTS}/${id}`}>
        <Image height="24rem" src={imgURL} sx={{ minWidth: '24rem' }} width="24rem" />
      </Link>
      <Stack spacing={0}>
        <Text c={colors.green[8]} fw="bold">
          주문완료
        </Text>
        <Link to={`${PATH.PRODUCTS}/${id}`}>
          <Text fw="bold" my="1.6rem">
            상품이름 {name}
          </Text>
        </Link>
        <Text>색상: {color.kr}</Text>
        <Text>사이즈: {selectedSize}</Text>
      </Stack>
    </Group>
  );
};

export default ProductItem;
