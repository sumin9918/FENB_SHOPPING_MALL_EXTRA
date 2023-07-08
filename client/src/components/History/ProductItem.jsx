import { Link } from 'react-router-dom';

import { Group, Stack, Text, Image } from '@mantine/core';

import { useMediaQuery } from 'hooks';
import { PATH, MEDIAQUERY_WIDTH } from 'constants';

const ProductItem = ({ product: { id, imgURL, name, color, selectedSize } }) => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  return (
    <Group spacing="2.8rem">
      <Link to={`${PATH.PRODUCTS}/${id}`}>
        <Image
          height={matches ? '24rem' : '20rem'}
          src={imgURL}
          sx={{ minWidth: matches ? '24rem' : '20rem' }}
          width={matches ? '24rem' : '20rem'}
        />
      </Link>
      <Stack spacing={0}>
        <Text c="green.8" fw="bold">
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
