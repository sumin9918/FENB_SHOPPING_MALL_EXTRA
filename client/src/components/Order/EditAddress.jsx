import { Stack, Group } from '@mantine/core';

import { CustomButton } from 'components';
import { EditAddressItem } from 'components/Order';
import { useGetAddresses } from 'hooks/address';
import { INIT_FIELD } from 'constants';

const EditAddress = ({ setFiled, selectedAddress, changeSelectedAddress }) => {
  const addresses = useGetAddresses();

  return (
    <Stack px="2rem" w="100%">
      {addresses.map(address => (
        <EditAddressItem
          key={address.id}
          address={address}
          changeSelectedAddress={changeSelectedAddress}
          selectedAddress={selectedAddress}
          setFiled={setFiled}
        />
      ))}
      <Group position="right">
        <CustomButton
          color="gray"
          variant="outline"
          sx={{
            width: '20rem',
            ':hover': { backgroundColor: 'transparent', borderColor: '#228be6', color: '#228be6' },
          }}
          onClick={() => setFiled({ ...INIT_FIELD, input: true })}>
          새 배송지 추가
        </CustomButton>
      </Group>
    </Stack>
  );
};

export default EditAddress;
