import { useNavigate } from 'react-router-dom';

import { Button, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import { RxDividerVertical } from 'react-icons/rx';

import { ProductItem } from 'components/History';
import { useMediaQuery } from 'hooks';
import { PATH, MEDIAQUERY_WIDTH } from 'constants';

const Product = ({ history: { id, orderDate, discountedTotalPrice, products } }) => {
  const { colors, colorScheme } = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  const navigate = useNavigate();

  const customOrderDate = new Date(orderDate).toLocaleString('ko-KR');

  const handleMoveToDetailHistory = () => {
    navigate(`${PATH.HISTORY}/${id}`);
  };

  return (
    <Stack
      py="1.2rem"
      spacing="3.2rem"
      sx={{ borderBottom: `1px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[4]}` }}
      w="100%">
      {matches ? (
        <Group c={colorScheme === 'dark' ? 'gray.5' : 'gray.7'} fz="1.4rem">
          <Text>{customOrderDate}</Text>
          <RxDividerVertical />
          <Text>주문번호 : {id}</Text>
          <RxDividerVertical />
          <Text>{discountedTotalPrice} 원</Text>
        </Group>
      ) : (
        <Stack c={colorScheme === 'dark' ? 'gray.5' : 'gray.7'} fz="1.4rem">
          <Text>{customOrderDate}</Text>
          <Text>주문번호 : {id}</Text>
          <Text>{discountedTotalPrice} 원</Text>
        </Stack>
      )}
      {products.map(product => (
        <Group key={`${product.id}-${product.selectedSize}`} align="flex-start" pb="2rem" position="apart" pr="2rem">
          <ProductItem product={product} />
          <Button
            color={colorScheme === 'dark' ? 'gray.2' : 'dark'}
            h="4.5rem"
            mt="1.6rem"
            radius="3rem"
            size="1.5rem"
            variant={colorScheme === 'dark' ? 'outline' : 'filled'}
            w="14rem"
            onClick={handleMoveToDetailHistory}>
            상세보기
          </Button>
        </Group>
      ))}
    </Stack>
  );
};

export default Product;
