import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Center, CloseButton, Container, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { BsCheck2 } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

import { FormAddressInput, FormInput, FormPhoneInput } from 'components/Sign';
import { useAddresses } from 'hooks/address';
import { useAddAddressMutation, useChangeDefaultAddressMutation, useRemoveAddressMutation } from 'hooks/mutation';
import { addressSchema } from 'schema';

const Address = ({ form: { addressId }, updateForm, mode, handleEditModeClick, handleAddModeClick }) => {
  const { colors } = useMantineTheme();

  const addresses = useAddresses();

  const isNotMode = !(mode.add || mode.edit);
  const { handleSubmit, register, formState, trigger, setValue, reset } = useForm({
    resolver: zodResolver(addressSchema),
  });

  const { mutate: addAddress } = useAddAddressMutation();
  const { mutate: changeDefaultAddress } = useChangeDefaultAddressMutation();
  const { mutate: removeAddress } = useRemoveAddressMutation();

  const handleSelectAddressClick = addressId => () => {
    updateForm({ addressId });
    handleEditModeClick();
  };

  const handleUpdateDefaultAddressClick = addressId => e => {
    e.stopPropagation();
    changeDefaultAddress(addressId);
  };

  const handleRemoveAddressClick = _addressId => e => {
    e.stopPropagation();
    removeAddress(_addressId);
    if (addressId === _addressId) updateForm({ addressId: null });
  };

  const handleAddAddressSubmit = data => {
    addAddress(data);
    handleAddModeClick();
    reset();
  };

  return (
    <Stack pt={0} w="100%">
      <Group align="center" pb="1.2rem" position="apart" pt="1.2rem">
        <Group align="center">
          <Title>배송 옵션</Title>
          {isNotMode && <BsCheck2 color={colors.green[8]} size="2.4rem" />}
        </Group>

        {isNotMode && (
          <Button
            color="dark"
            fz="1.4rem"
            size="lg"
            sx={{ ':hover': { background: 'transparent', textDecoration: 'underline' } }}
            variant="subtle"
            onClick={handleEditModeClick}>
            편집
          </Button>
        )}
      </Group>

      {isNotMode &&
        addresses.map(
          ({ id, recipient, mainAddress, detailAddress, postcode, recipientPhone }) =>
            addressId === id && (
              <Stack key={id} spacing={0} w="100%">
                <Title fz="1.6rem" mb="0.4rem">
                  배송 주소
                </Title>
                <Text>{recipient}</Text>
                <Text>{mainAddress}</Text>
                <Text>{detailAddress}</Text>
                <Text>{postcode}</Text>
                <Text>{recipientPhone}</Text>
              </Stack>
            )
        )}
      {mode.edit && (
        <Stack px="2rem">
          {addresses.map(({ id, recipient, mainAddress, detailAddress, postcode, recipientPhone, isDefault }) => (
            <Container
              key={id}
              p="0.8rem"
              size="content-fit"
              sx={{
                width: '100%',
                border: `1px solid ${id === addressId ? colors.blue[6] : colors.gray[6]}`,
                borderRadius: '5px',
                cursor: 'pointer',
                ':hover': { borderColor: colors.blue[6] },
              }}
              onClick={handleSelectAddressClick(id)}>
              <Group align="flex-start" position="apart" sx={{ flexWrap: 'nowrap' }}>
                <Stack spacing={0}>
                  <Group align="center" justify="center" spacing="0.4rem">
                    <Text>{recipient}</Text>
                    {isDefault && <FaHome />}
                  </Group>
                  <Text>{mainAddress}</Text>
                  <Text>{detailAddress}</Text>
                  <Text>{postcode}</Text>
                  <Text>{recipientPhone}</Text>
                </Stack>
                <Stack align="flex-end" h="12.4rem" justify="space-between">
                  <CloseButton
                    color="dark"
                    h="3.2rem"
                    iconSize="1.6rem"
                    p="0.4rem"
                    sx={{ ':hover': { background: 'transparent', border: `1px solid ${colors.blue[6]}` } }}
                    w="3.2rem"
                    onClick={handleRemoveAddressClick(id)}
                  />
                  <Button
                    color="dark"
                    h="3.2rem"
                    py="0.8rem"
                    sx={{ ':hover': { background: 'transparent', border: `1px solid ${colors.blue[6]}` } }}
                    variant="subtle"
                    onClick={handleUpdateDefaultAddressClick(id)}>
                    <Text fw="normal" fz="1.2rem">
                      기본 배송지로 변경
                    </Text>
                  </Button>
                </Stack>
              </Group>
            </Container>
          ))}
          <Group position="right">
            <Button
              color="gray"
              fz="1.6rem"
              h="6rem"
              hw="bold"
              mt="2rem"
              p="1.8rem 2.4rem"
              variant="outline"
              w="20rem"
              sx={{
                borderRadius: '30px',
                width: '20rem',
                ':hover': { backgroundColor: 'transparent', borderColor: colors.blue[6], color: colors.blue[6] },
              }}
              onClick={handleAddModeClick}>
              새 배송지 추가
            </Button>
          </Group>
        </Stack>
      )}
      {mode.add && (
        <Container miw="45rem">
          <form noValidate onSubmit={handleSubmit(handleAddAddressSubmit)}>
            <FormInput
              formState={formState}
              id="name"
              label="이름"
              placeholder="김펜비"
              register={register}
              type="text"
              withAsterisk
            />
            <FormPhoneInput
              formState={formState}
              id="phone"
              label="휴대전화번호"
              placeholder="'-' 없이 입력"
              register={register}
              setValue={setValue}
              trigger={trigger}
              type="tel"
              withAsterisk
            />
            <FormAddressInput
              formState={formState}
              id="postcode"
              label="우편번호"
              placeholder="주소찾기 버튼을 클릭주세요."
              register={register}
              setValue={setValue}
              type="text"
              readOnly
              withAsterisk
            />
            <FormInput
              formState={formState}
              id="mainAddress"
              label="주소"
              placeholder="주소를 선택하시면 자동으로 입력됩니다."
              register={register}
              type="text"
              readOnly
              withAsterisk
            />
            <FormInput
              formState={formState}
              id="detailAddress"
              label="상세주소"
              placeholder="상세 주소를 입력하세요."
              register={register}
              type="text"
            />
            <Center>
              <Button
                color="gray"
                fz="1.6rem"
                h="6rem"
                hw="bold"
                mt="2rem"
                p="1.8rem 2.4rem"
                type="submit"
                variant="outline"
                w="20rem"
                sx={{
                  width: '20rem',
                  ':hover': {
                    backgroundColor: 'transparent',
                    borderColor: colors.blue[6],
                    color: colors.blue[6],
                  },
                  borderRadius: '30px',
                }}>
                배송지 추가
              </Button>
            </Center>
          </form>
        </Container>
      )}
    </Stack>
  );
};

export default Address;
