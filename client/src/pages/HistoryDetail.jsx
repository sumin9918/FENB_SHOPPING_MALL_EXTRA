import { Group, Image, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { RxDividerVertical } from 'react-icons/rx';

import { ProductItem } from 'components/History';
import { historyQuery } from 'api/query';
import { useCurrentItem, useMediaQuery } from 'hooks';
import { PAYMENT_METHODS, MEDIAQUERY_WIDTH } from 'constants';

const HistoryDetail = () => {
  const { colors, colorScheme } = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  const currentHistory = useCurrentItem(historyQuery);

  const {
    id,
    orderDate,
    discountedTotalPrice,
    products,
    deliveryAddress: { recipient, recipientPhone, postcode, mainAddress, detailAddress },
    paymentMethod,
    totalPrice,
    discountAmount,
  } = currentHistory;

  const customOrderDate = new Date(orderDate).toLocaleString('ko-KR');
  const { value, label, labelStyle } = PAYMENT_METHODS.find(({ value }) => value === paymentMethod);

  return (
    <Stack pb="2rem" px="0.8rem" spacing="3.2rem" w="100%">
      <Title
        fz="2.4rem"
        mb="3.2rem"
        pb="2rem"
        sx={{ borderBottom: `2px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[8]}` }}>
        구매상세
      </Title>

      <Stack spacing={0}>
        {matches ? (
          <Group c={colorScheme === 'dark' ? 'gray.6' : 'gray.7'} fw="bold" fz="1.8rem" pb="3.2rem">
            <Text>{customOrderDate}</Text>
            <RxDividerVertical />
            <Text>주문번호 : {id}</Text>
            <RxDividerVertical />
            <Text>{discountedTotalPrice} 원</Text>
          </Group>
        ) : (
          <Stack c={colorScheme === 'dark' ? 'gray.6' : 'gray.7'} fw="bold" fz="1.6rem" pb="2.4rem">
            <Text>{customOrderDate}</Text>
            <Text>주문번호 : {id}</Text>
            <Text>{discountedTotalPrice} 원</Text>
          </Stack>
        )}

        <Stack
          py="3.2rem"
          spacing="3.2rem"
          sx={{ borderTop: `1px solid ${colors.gray[4]}`, borderBottom: `1px solid ${colors.gray[4]}` }}>
          {products.map(product => (
            <ProductItem key={`${product.id}-${product.selectedSize}`} product={product} />
          ))}
        </Stack>

        <Group
          align="flex-start"
          position="apart"
          py="3.2rem"
          sx={{ borderBottom: `1px solid ${colors.gray[4]}` }}
          w="100%">
          <Title fz="1.7rem">주소</Title>
          <Stack spacing="0.2rem" sx={{ textAlign: 'right' }}>
            <Text>{recipient}</Text>
            <Text>{mainAddress}</Text>
            <Text>{detailAddress}</Text>
            <Text>{postcode}</Text>
            <Text>{recipientPhone}</Text>
          </Stack>
        </Group>

        <Group
          align="flex-start"
          position="apart"
          py="3.2rem"
          sx={{ borderBottom: `1px solid ${colors.gray[4]}` }}
          w="100%">
          <Title fz="1.7rem">결제 수단</Title>
          <Group fz="1.6rem" px="0.4rem">
            <Image
              alt={value}
              src={`images/payments/${value}${colorScheme === 'dark' ? 'Dark' : ''}.svg`}
              {...labelStyle}
            />
            <Text fw="bold" span>
              {label}
            </Text>
          </Group>
        </Group>

        <Stack py="3.2rem" spacing="0.8rem" sx={{ borderBottom: `1px solid ${colors.gray[4]}` }} w="100%">
          <Title fz="1.7rem" pb="3.2rem" pt="1.2rem">
            주문 내역
          </Title>
          <Group position="apart">
            <Text>상품 금액</Text>
            <Text>{totalPrice.toLocaleString('ko-KR')} 원</Text>
          </Group>
          <Group position="apart">
            <Text>배송비</Text>
            <Text>무료</Text>
          </Group>
          <Group position="apart">
            <Text>쿠폰할인액</Text>
            <Text>{discountAmount.toLocaleString('ko-KR')} 원</Text>
          </Group>
          <Group fw="bold" fz="1.7rem" position="apart">
            <Text>총 결제 금액</Text>
            <Text>{discountedTotalPrice.toLocaleString('ko-KR')} 원</Text>
          </Group>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HistoryDetail;
