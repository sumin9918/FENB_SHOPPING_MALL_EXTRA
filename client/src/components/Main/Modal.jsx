import { Button, Modal as MantineModal, Text } from '@mantine/core';

const Modal = ({ title, modalIsOpen, modalClose }) => (
  <MantineModal
    opened={modalIsOpen}
    padding="xl"
    size="xl"
    ta="center"
    transitionProps={{ transition: 'rotate-left' }}
    styles={() => ({
      close: {
        width: '3rem',
        height: '3rem',

        svg: {
          width: '3rem',
          height: '3rem',
        },
      },
    })}
    centered
    onClose={modalClose}>
    <Text p="5rem 0" size="3rem" weight="bold">
      {title}
    </Text>
    <Button h="5rem" size="2rem" fullWidth onClick={modalClose}>
      확인
    </Button>
  </MantineModal>
);

export default Modal;
