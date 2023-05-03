import { Stack, Center, Text, Group, useMantineColorScheme } from '@mantine/core';
import { useGetAddresses } from '../../hooks/address';
import { INIT_FIELD } from '../../constants';
import EditAddressItem from './EditAddressItem';
import CustomButton from '../CustomButton';

const EditAddress = ({ setFiled, selectedAddress, changeSelectedAddress }) => {
  const addresses = useGetAddresses();

  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack w="100%" px="2rem">
      {addresses.length ? (
        addresses.map(address => (
          <EditAddressItem
            key={address.id}
            address={address}
            setFiled={setFiled}
            changeSelectedAddress={changeSelectedAddress}
            selectedAddress={selectedAddress}
          />
        ))
      ) : (
        <Center>
          <Text>배송지를 입력해 주세요</Text>
        </Center>
      )}
      <Group position="right">
        <CustomButton
          variant="outline"
          color={colorScheme ? 'gray' : 'dark'}
          sx={{ width: '20rem', ':hover': { borderColor: '#228be6', color: '#228be6' } }}
          onClick={() => setFiled({ ...INIT_FIELD, input: true })}>
          새 배송지 추가
        </CustomButton>
      </Group>
    </Stack>
  );
};

export default EditAddress;
