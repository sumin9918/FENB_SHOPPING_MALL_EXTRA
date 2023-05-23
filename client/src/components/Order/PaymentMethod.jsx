import { Stack, Title, Radio, Group, Image, Text, useMantineTheme } from '@mantine/core';

import { PAYMENT_METHODS } from 'constants';

const PaymentMethod = ({ changePaymentMethod }) => {
  const { colorScheme } = useMantineTheme();

  return (
    <Stack>
      <Title py="1.2rem">결제</Title>
      <Radio.Group defaultValue={PAYMENT_METHODS[0].value} name="paymentMethods" onChange={changePaymentMethod}>
        <Stack mt="xs" spacing="0.8rem">
          {PAYMENT_METHODS.map(({ value, label, labelStyle }) => (
            <Radio
              key={value}
              size="xl"
              value={value}
              label={
                <Group fz="1.6rem" px="0.4rem">
                  <Image
                    alt={value}
                    src={`images/payments/${colorScheme === 'dark' ? `${value}Dark` : value}.svg`}
                    {...labelStyle}
                  />
                  <Text span>{label}</Text>
                </Group>
              }
            />
          ))}
        </Stack>
      </Radio.Group>
    </Stack>
  );
};

export default PaymentMethod;
