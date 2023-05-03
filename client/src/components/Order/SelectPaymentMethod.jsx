import { Stack, Title, Radio, Group, Image, Text, useMantineColorScheme } from '@mantine/core';

const paymentMethods = [
  {
    value: 'kakaoPay',
    label: '카카오페이',
    labelStyle: { width: '4rem', height: '1.8rem' },
  },
  {
    value: 'creditCard',
    label: '신용카드',
    labelStyle: { width: '2rem', height: '1.5rem' },
  },
  {
    value: 'naverPay',
    label: '네이버페이',
    labelStyle: { width: '4.3rem', height: '1.7rem' },
  },
  {
    value: 'applePay',
    label: '애플페이',
    labelStyle: { width: '4rem', height: '2rem' },
  },
  {
    value: 'accountTransfer',
    label: '실시간 계좌이체',
    labelStyle: { width: '2rem', height: '1.7rem' },
  },
];

const SelectPaymentMethod = ({ changePaymentMethod }) => (
  <Stack w="100%" px="2rem">
    <Title fz="2.4rem" fw={500}>
      결제
    </Title>
    <Radio.Group defaultValue={paymentMethods[0].value} name="paymentMethods" onChange={changePaymentMethod}>
      <Stack mt="xs" spacing="0.8rem">
        {paymentMethods.map(paymentMethod => (
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
