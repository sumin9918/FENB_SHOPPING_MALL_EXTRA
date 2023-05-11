import { Stack, Title, Group, Text, Container, Accordion, useMantineColorScheme } from '@mantine/core';
import { useTotalPrice } from '../../hooks/carts';
import CartHistoryItemList from './CartHistoryItemList';

const ResponsiveCartHistory = ({ discount }) => {
  const totalPrice = useTotalPrice();

  const { discountAmount, discountedTotalPrice } = discount;

  const { colorScheme } = useMantineColorScheme();

  return (
    <Accordion
      w="90%"
      my="2rem"
      mx="auto"
      chevronSize="3rem"
      sx={{
        borderTop: `1px solid ${colorScheme === 'dark' ? '#343a40' : '#dee2e6'}`,
      }}
      styles={() => ({
        chevron: {
          svg: {
            width: '3rem',
            height: '3rem',
          },
        },
      })}>
      <Accordion.Item value="CartHistory" py="2.4rem">
        <Accordion.Control sx={{ ':hover': { backgroundColor: 'transparent' } }}>
          <Title>장바구니</Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Container w="90%">
            <CartHistoryItemList />
            <Stack
              spacing="0.2rem"
              pt="2.4rem"
              fz="1.5rem"
              sx={{ borderTop: `1px solid ${colorScheme === 'dark' ? '#343a40' : '#dee2e6'}` }}>
              <Group position="apart">
                <Text>상품 금액</Text>
                <Text>{totalPrice.toLocaleString()} 원</Text>
              </Group>
              <Group position="apart">
                <Text>쿠폰 할인액</Text>
                <Text>{discountAmount.toLocaleString()} 원</Text>
              </Group>
              <Group position="apart">
                <Text>배송비</Text>
                <Text>0 원</Text>
              </Group>
              <Group position="apart" mt="0.8rem">
                <Text>총 결제 금액</Text>
                <Text>{discountedTotalPrice.toLocaleString()} 원</Text>
              </Group>
            </Stack>
          </Container>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default ResponsiveCartHistory;
