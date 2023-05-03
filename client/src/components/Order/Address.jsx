import { Stack, Group, Title, Button } from '@mantine/core';
import { BsCheck2 } from 'react-icons/bs';
import { INIT_FIELD } from '../../constants';
import AddressInfo from './AddressInfo';
import EditAddress from './EditAddress';
import InputAddress from './InputAddress';

const Address = ({ field, setFiled, selectedAddress, changeSelectedAddress }) => (
  <Stack w="100%" p="2rem">
    <Group position="apart" pt="1.2rem" pb="2.8rem">
      <Group align="center">
        <Title fz="2.4rem" fw={500} sx={{ lineHeight: '2.8rem' }}>
          배송 옵션
        </Title>
        {field.info && <BsCheck2 fz="2.4rem" color="rgb(18, 138, 9)" />}
      </Group>

      {field.info && (
        <Button
          variant="subtle"
          color="dark"
          size="lg"
          fz="1.4rem"
          sx={{ ':hover': { background: 'transparent', textDecoration: 'underline' } }}
          onClick={() => {
            setFiled({ ...INIT_FIELD, edit: true });
          }}>
          편집
        </Button>
      )}
    </Group>

    {field.info && <AddressInfo selectedAddress={selectedAddress} />}
    {field.edit && (
      <EditAddress
        setFiled={setFiled}
        selectedAddress={selectedAddress}
        changeSelectedAddress={changeSelectedAddress}
      />
    )}
    {field.input && <InputAddress setFiled={setFiled} changeSelectedAddress={changeSelectedAddress} />}
  </Stack>
);

export default Address;
