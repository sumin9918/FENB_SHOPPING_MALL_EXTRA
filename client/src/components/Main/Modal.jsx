import { Button, Modal as MantineModal, Text } from '@mantine/core';

const Modal = ({ title, modalIsOpen, modalClose }) => (
  <MantineModal
    opened={modalIsOpen}
    onClose={modalClose}
    centered
    ta="center"
    size="xl"
    padding="xl"
    transitionProps={{ transition: 'rotate-left' }}
    sx={{
      '.mantine-Modal-close': {
        width: '3rem',
        height: '3rem',
      },
      '.mantine-Modal-close > svg': {
        width: '3rem',
        height: '3rem',
      },
    }}>
    <Text size="3rem" weight="bold" p="5rem 0">
      {title}
    </Text>
    <Button fullWidth size="2rem" h="5rem" onClick={modalClose}>
      확인
    </Button>
  </MantineModal>
);

export default Modal;
