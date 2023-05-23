import { Stack, Title, Text } from '@mantine/core';

const AddressInfo = ({ selectedAddress }) => {
  const { recipient, mainAddress, detailAddress, postcode, recipientPhone } = selectedAddress.current;

  return (
    <Stack spacing={0} w="100%">
      <Title fz="1.6rem" mb="0.4rem">
        배송 주소
      </Title>
      <Text>{recipient}</Text>
      <Text>{mainAddress}</Text>
      <Text>{detailAddress}</Text>
      <Text>{postcode}</Text>
      <Text>{recipientPhone}</Text>
    </Stack>
  );
};

export default AddressInfo;
