import { useQuery } from '@tanstack/react-query';
import { Card, Image, Text, Badge, Button, Group, Flex, Container, Blockquote } from '@mantine/core';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { fetchCarousel, fetchProducts } from '../api';

const MainCarousel = () => {
  const { data: slides } = useQuery({
    queryKey: ['carousel'],
    queryFn: fetchCarousel,
  });
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const sideBackgroundColorsRef = useRef(slides.map(slide => slide.sideBackgroundColor));
  const [sideBackgroundColor, setSideBackgroundColor] = useState(sideBackgroundColorsRef.current.at(0));

  return (
    <Container w="100%" maw="100%" pos="relative" bg={sideBackgroundColor}>
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
        {slides.map(({ title, imgURL, alt, feature, buttonColor }) => (
          <Carousel.Slide key={title}>
            <Image src={imgURL} alt={alt} />
            {feature === 'coupon' && (
              <Button color={buttonColor} radius="xl" size="xl" bottom="2rem" left="2rem">
                쿠폰 받기
              </Button>
            )}
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

const Main = () => {
  const { data: products } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });

  return (
    <>
      <MainCarousel />
      <Container p="0" maw="120rem">
        <Flex gap="md" justify="center" align="center" direction="row" wrap="wrap" mt="5rem">
          {products.map(({ id, name, price, imgURL, brand }) => (
            <Card key={id} shadow="sm" padding="lg" radius="md" w="29rem" withBorder>
              <Card.Section>
                <Image src={imgURL} alt={name} />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight="50rem">{name}</Text>
                <Badge color="pink" variant="light">
                  무료 배송
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                {brand.kr}
              </Text>
              <Text size="sm" color="dimmed">
                {name}
              </Text>
              <Text size="sm" color="dimmed">
                {price}
              </Text>

              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
              </Button>
            </Card>
          ))}
        </Flex>
      </Container>
    </>
  );
};
export default Main;
