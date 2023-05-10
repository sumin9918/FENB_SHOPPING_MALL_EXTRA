import { Stack, Title, Radio, Group, Image, Text, useMantineColorScheme } from '@mantine/core';
import { PAYMENT_METHODS } from '../../constants';

const SelectPaymentMethod = ({ changePaymentMethod }) => (
  <Stack w="100%" px="2rem">
    <Title py="1.2rem">결제</Title>
    <Radio.Group defaultValue={PAYMENT_METHODS[0].value} name="paymentMethods" onChange={changePaymentMethod}>
      <Stack mt="xs" spacing="0.8rem">
        {PAYMENT_METHODS.map(paymentMethod => (
          <Radio
            key={paymentMethod.value}
            value={paymentMethod.value}
            label={<SelectPaymentMethodLabel paymentMethod={paymentMethod} />}
            size="xl"
          />
        ))}
      </Stack>
    </Radio.Group>
  </Stack>
);

const SelectPaymentMethodLabel = ({ paymentMethod }) => {
  const { colorScheme } = useMantineColorScheme();

  const { value, label, labelStyle } = paymentMethod;

  return (
    <Group px="0.4rem" fz="1.6rem">
      <Image
        src={`./images/payments/${colorScheme === 'dark' ? `${value}Dark` : value}.svg`}
        alt={value}
        {...labelStyle}
      />
      <Text span>{label}</Text>
    </Group>
  );
};

export default SelectPaymentMethod;
