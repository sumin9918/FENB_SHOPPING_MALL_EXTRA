import { useQuery } from '@tanstack/react-query';
import { Card, Image, Text, Badge, Button, Group, Flex, Container, Modal } from '@mantine/core';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate } from 'react-router-dom';
import PATH from '../constants/path';
import { carouselQuery, productsQuery, verifyQuery } from '../api/loader';
import { addCoupon } from '../api';

const MainCarousel = ({ modalOpen, setModalTitle }) => {
  const { data: slides } = useQuery(carouselQuery());
  const { data: verify } = useQuery(verifyQuery());
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const sideBackgroundColorsRef = useRef(slides.map(slide => slide.sideBackgroundColor));
  const [sideBackgroundColor, setSideBackgroundColor] = useState(sideBackgroundColorsRef.current.at(0));
  const navigate = useNavigate();

  const handleCarouselClick = async id => {
    if (!verify) navigate(PATH.SIGNIN);

    try {
      const { message } = await addCoupon(id);
      setModalTitle(message);
    } catch (e) {
      const { message } = e.response.data;
      setModalTitle(message);
    } finally {
      modalOpen();
    }
  };

  return (
    <Container
      w="100%"
      maw="100%"
      pos="relative"
      bg={sideBackgroundColor}
      sx={{
        transition: 'all .1s ',
      }}>
      <Carousel
        mx="auto"
        maw="120rem"
        withIndicators
        loop
        plugins={[autoplay.current]}
        previousControlIcon={<SlArrowLeft size="5rem" color="white" />}
        nextControlIcon={<SlArrowRight size="5rem" color="white" />}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        onSlideChange={idx => setSideBackgroundColor(sideBackgroundColorsRef.current.at(idx))}
        pos="static"
        sx={{
          '.mantine-Carousel-control': {
            border: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
        styles={{
          indicator: { width: '1rem', height: '1rem' },
        }}>
        {slides.map(({ id, imgURL, alt }) => (
          <Carousel.Slide key={id} onClick={() => handleCarouselClick(id)} sx={{ cursor: 'pointer' }}>
            <Image src={imgURL} alt={alt} fit="contain" height="45rem" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

const Main = () => {
  const { data: products } = useQuery(productsQuery());
  const [modalTitle, setModalTitle] = useState('');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <MainCarousel modalOpen={open} setModalTitle={setModalTitle} />
      <Container p="0" maw="120rem">
        <Flex gap="xl" justify="center" align="center" direction="row" wrap="wrap" m="5rem 0">
          {products.map(({ id, name, price, imgURL, brand }) => (
            <Link to={`${PATH.PRODUCTS}/${id}`} key={id} state={id}>
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                w="28rem"
                withBorder
                sx={{
                  '@media (max-width: 900px)': {
                    width: '20rem',
                  },
                }}>
                <Card.Section pos="relative">
                  <Image src={imgURL} alt={name}></Image>
                  <Badge
                    variant="light"
                    size="xl"
                    h="3rem"
                    fz="1.3rem"
                    pos="absolute"
                    bottom="1rem"
                    right="1rem"
                    sx={{ backgroundColor: 'rgba(255, 240, 246, 1)', color: '#e64980' }}>
                    무료 배송
                  </Badge>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight="bold" size="2rem" truncate>
                    {name}
                  </Text>
                </Group>

                <Text size="1.5rem" color="dimmed">
                  {brand.kr}
                </Text>
                <Text size="1.5rem" color="dimmed">
                  {price.toLocaleString('ko-KR')}
                </Text>

                <Button variant="light" color="blue" fullWidth mt="md" radius="md" size="2rem" h="4rem">
                  상품 보러 가기
                </Button>
              </Card>
            </Link>
          ))}
        </Flex>
        <Modal
          opened={opened}
          onClose={close}
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
            {modalTitle}
          </Text>
          <Button fullWidth size="2rem" h="5rem" onClick={close}>
            확인
          </Button>
        </Modal>
      </Container>
    </>
  );
};
export default Main;
