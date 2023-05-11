import { Button, Stack, Text, Group, Container, CloseButton, useMantineColorScheme } from '@mantine/core';
import { FaHome } from 'react-icons/fa';
import { useChangeDefaultAddressMutation, useRemoveAddressMutation } from '../../hooks/address';
import { INIT_FIELD } from '../../constants';

const EditAddressItem = ({ address, setFiled, selectedAddress, changeSelectedAddress }) => {
  const { id, recipient, mainAddress, detailAddress, postcode, recipientPhone, isDefault } = address;

  const { colorScheme } = useMantineColorScheme();

  const { mutate: removeAddress } = useRemoveAddressMutation();
  const { mutate: changeDefaultAddress } = useChangeDefaultAddressMutation();

  const isSelected = selectedAddress.current.id === id;

  return (
    <Container
      p="0.8rem"
      size="content-fit"
      sx={{
        width: '100%',
        border: `1px solid ${
          colorScheme === 'dark' ? (isSelected ? 'lightgray' : '#555') : isSelected ? '#333' : 'lightgray'
        }`,
        borderRadius: '5px',
        cursor: 'pointer',
        ':hover': { borderColor: '#228be6' },
      }}
      onClick={() => {
        changeSelectedAddress(address);
        setFiled({ ...INIT_FIELD, info: true });
      }}>
      <Group position="apart" align="flex-start" sx={{ flexWrap: 'nowrap' }}>
        <Stack spacing={0}>
          <Group spacing="0.4rem" align="center" justify="center">
            <Text>{recipient}</Text>
            {isDefault && <FaHome />}
          </Group>
          <Text>{mainAddress}</Text>
          <Text>{detailAddress}</Text>
          <Text>{postcode}</Text>
          <Text>{recipientPhone}</Text>
        </Stack>
        <Stack align="flex-end" justify="space-between" h="12.4rem">
          <CloseButton
            color="dark"
            p="0.4rem"
            w="3.2rem"
            h="3.2rem"
            iconSize="1.6rem"
            sx={{ ':hover': { background: 'transparent', border: '1px solid #228be6' } }}
            onClick={e => {
              e.stopPropagation();
              removeAddress(id);
            }}
          />
          <Button
            variant="subtle"
            color="dark"
            h="3.2rem"
            py="0.8rem"
            sx={{ ':hover': { background: 'transparent', border: '1px solid #228be6' } }}
            onClick={e => {
              e.stopPropagation();
              changeDefaultAddress(id);
            }}>
            <Text fz="1.2rem" fw="normal">
              기본 배송지로 변경
            </Text>
          </Button>
        </Stack>
      </Group>
    </Container>
  );
};

export default EditAddressItem;
