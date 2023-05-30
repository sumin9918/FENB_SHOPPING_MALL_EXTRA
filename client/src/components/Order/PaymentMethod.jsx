import { Group, Image, Radio, Stack, Text, Title, useMantineTheme } from '@mantine/core';

import { PAYMENT_METHODS } from 'constants';

const PaymentMethod = ({ form: { paymentMethod }, updateForm }) => {
  const { colorScheme } = useMantineTheme();

  const handlePaymentMethodChange = paymentMethod => updateForm({ paymentMethod });

  return (
    <Stack>
      <Title py="1.2rem">결제</Title>
      <Radio.Group name="paymentMethods" value={paymentMethod} onChange={handlePaymentMethodChange}>
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
                    src={`images/payments/${value}${colorScheme === 'dark' ? 'Dark' : ''}.svg`}
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
