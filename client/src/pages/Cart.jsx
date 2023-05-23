import { Container, Flex } from '@mantine/core';

import { CartList, OrderHistory } from 'components/Carts';
import { useMediaQuery } from 'hooks';
import { MEDIAQUERY_WIDTH } from 'constants';

const Cart = () => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  return (
    <Container fz="1.6rem" size="1200px" w="100%">
      <Flex
        align="flex-start"
        direction={matches ? 'row' : 'column'}
        justify="center"
        mih={matches && '5rem'}
        spacing={matches ? 0 : '6rem'}>
        <CartList />
        <OrderHistory />
      </Flex>
    </Container>
  );
};

export default Cart;
