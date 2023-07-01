import { useNavigate } from 'react-router-dom';

import { Button, Group, Stack, Text, useMantineTheme } from '@mantine/core';
import { RxDividerVertical } from 'react-icons/rx';

import { ProductItem } from 'components/History';
import { PATH } from 'constants';

const Product = ({ history: { id, orderDate, discountedTotalPrice, products } }) => {
  const { colors, colorScheme } = useMantineTheme();

  const navigate = useNavigate();

  const customOrderDate = new Date(orderDate).toLocaleString('ko-KR');

  const handleMoveToDetailHistory = () => {
    navigate(`${PATH.HISTORY}/${id}`);
  };

  return (
    <Stack py="1.2rem" spacing="3.2rem" sx={{ borderBottom: `1px solid ${colors.gray[4]}` }} w="100%">
      <Group c={colors.gray[7]} fz="1.4rem">
        <Text>{customOrderDate}</Text>
        <RxDividerVertical />
        <Text>주문번호 : {id}</Text>
        <RxDividerVertical />
        <Text>{discountedTotalPrice} 원</Text>
      </Group>
      {products.map(product => (
        <Group key={`${product.id}-${product.selectedSize}`} align="flex-start" position="apart" pr="2rem">
          <ProductItem product={product} />
          <Button
            color={colorScheme === 'dark' ? 'gray.2' : 'dark'}
            h="4.5rem"
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
