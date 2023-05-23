import { Stack, Group, Title, Button, useMantineTheme } from '@mantine/core';
import { BsCheck2 } from 'react-icons/bs';

import { AddressInfo, EditAddress, InputAddress } from 'components/Order';
import { INIT_FIELD } from 'constants';

const Address = ({ field, setFiled, selectedAddress, changeSelectedAddress }) => {
  const { colors } = useMantineTheme();

  return (
    <Stack pt={0} w="100%">
      <Group align="center" pb="1.2rem" position="apart" pt="1.2rem">
        <Group align="center">
          <Title>배송 옵션</Title>
          {field.info && <BsCheck2 color={colors.green[8]} size="2.4rem" />}
        </Group>

        {field.info && (
          <Button
            color="dark"
            fz="1.4rem"
            size="lg"
            sx={{ ':hover': { background: 'transparent', textDecoration: 'underline' } }}
            variant="subtle"
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
          changeSelectedAddress={changeSelectedAddress}
          selectedAddress={selectedAddress}
          setFiled={setFiled}
        />
      )}
      {field.input && <InputAddress changeSelectedAddress={changeSelectedAddress} setFiled={setFiled} />}
    </Stack>
  );
};

export default Address;
