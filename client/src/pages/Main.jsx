import { useState } from 'react';

import { Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Carousel, Modal, Products, Loading } from 'components/Main';

const Main = () => {
  const [modalIsOpen, { open, close }] = useDisclosure(false);

  const [title, setTitle] = useState('');

  return (
    <Container mt="-4rem" p="0" fluid>
      <Carousel modalOpen={open} setModalTitle={setTitle} />
      <Products />
      <Modal modalClose={close} modalIsOpen={modalIsOpen} title={title} />
      <Loading />
    </Container>
  );
};
export default Main;
