import { useQuery } from '@tanstack/react-query';
import { Stack, Title, Accordion, Radio, Group, Text } from '@mantine/core';
import { useTotalPrice } from '../../hooks/carts';
import { couponsQuery } from '../../api/query';

const ONE_DAY = 1000 * 60 * 60 * 24;

const Coupons = ({ changeCouponId }) => {
  const { data: coupons } = useQuery(couponsQuery());
  const totalPrice = useTotalPrice();

  return (
    <Stack w="100%" px="2rem">
      <Title py="1.2rem">쿠폰</Title>
      <Accordion variant="separated">
        <Accordion.Item value="coupons">
          <Accordion.Control fz="1.6rem">쿠폰을 선택하세요</Accordion.Control>
          <Accordion.Panel>
            <Radio.Group name="coupons" onChange={changeCouponId}>
              <Stack mt="xs" spacing="0.8rem" justify="center">
                {coupons.map(({ id, title, endTime, minimumPrice }) => (
                  <Radio
                    key={id}
                    size="lg"
                    value={id}
                    disabled={totalPrice < minimumPrice}
                    label={
                      <CouponName title={title} endTime={endTime} totalPrice={totalPrice} minimumPrice={minimumPrice} />
                    }
                    sx={{
                      '.mantine-Radio-labelWrapper': { width: '100%' },
                      '.mantine-Radio-inner': { transform: 'translate3D(0, 3px, 0)' },
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

const CouponName = ({ title, endTime, totalPrice, minimumPrice }) => {
  const currentTime = new Date();
  const leftDay = Math.floor((Date.parse(endTime) - Date.parse(currentTime)) / ONE_DAY);

  return (
    <Group position="apart" px="0.4rem" fz="1.6rem" justify="center" align="center">
      <Text>{title}</Text>
      <Text c="#F36B26">
        {totalPrice < minimumPrice
          ? `최소 쿠폰 적용 금액은 ${minimumPrice.toLocaleString()}원 입니다`
          : `${leftDay}일 남았습니다`}
      </Text>
    </Group>
  );
};

export default Coupons;
