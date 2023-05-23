import { useQuery } from '@tanstack/react-query';

import { Stack, Title, Accordion, Radio, Group, Text, useMantineTheme } from '@mantine/core';

import { couponsQuery } from 'api/query';
import { useTotalPrice } from 'hooks/carts';

const ONE_DAY = 1000 * 60 * 60 * 24;

const expirationDate = endTime => Math.floor((Date.parse(endTime) - Date.parse(new Date())) / ONE_DAY);

const Coupons = ({ changeCouponId }) => {
  const { colors } = useMantineTheme();

  const { data: coupons } = useQuery(couponsQuery());
  const totalPrice = useTotalPrice();

  return (
    <Stack>
      <Title py="1.2rem">쿠폰</Title>
      <Accordion variant="separated">
        <Accordion.Item value="coupons">
          <Accordion.Control fz="1.6rem">쿠폰을 선택하세요</Accordion.Control>
          <Accordion.Panel>
            <Radio.Group name="coupons" onChange={changeCouponId}>
              <Stack mt="xs">
                {coupons.map(({ id, title, endTime, minimumPrice }) => (
                  <Radio
                    key={id}
                    disabled={totalPrice < minimumPrice}
                    size="lg"
                    value={id}
                    label={
                      <Group fz="1.6rem" position="apart">
                        <Text>{title}</Text>
                        <Text color={colors.orange[7]}>
                          {totalPrice < minimumPrice
                            ? `최소 쿠폰 적용 금액은 ${minimumPrice.toLocaleString('ko-KR')}원 입니다`
                            : `${expirationDate(endTime)}일 남았습니다`}
                        </Text>
                      </Group>
                    }
                    styles={{
                      labelWrapper: { width: '100%' },
                    }}
                  />
                ))}
              </Stack>
            </Radio.Group>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default Coupons;
