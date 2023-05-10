import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Container } from '@mantine/core';
import { Carousel, Modal, Products, Loading } from '../components/Main';

const Main = () => {
  const [title, setTitle] = useState('');
  const [modalIsOpen, { open, close }] = useDisclosure(false);

  return (
    <Container fluid p="0" mt="-4rem">
      <Carousel modalOpen={open} setModalTitle={setTitle} />
      <Products />
      <Modal title={title} modalIsOpen={modalIsOpen} modalClose={close} />
      <Loading />
    </Container>
  );
};
export default Main;
