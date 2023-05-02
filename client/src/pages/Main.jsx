import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Carousel, Modal, Products, Loading } from '../components/Main';

const Main = () => {
  const [title, setTitle] = useState('');
  const [modalIsOpen, { open, close }] = useDisclosure(false);

  return (
    <>
      <Carousel modalOpen={open} setModalTitle={setTitle} />
      <Products />
      <Modal title={title} modalIsOpen={modalIsOpen} modalClose={close} />
      <Loading />
    </>
  );
};
export default Main;
