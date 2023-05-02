import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Carousel as MantineCarousel } from '@mantine/carousel';
import { Container, Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { PATH } from '../../constants';
import { addCoupon } from '../../api/fetch';
import { slidesQuery, verifyQuery } from '../../api/query';

const Carousel = ({ modalOpen, setModalTitle }) => {
  const { data: slides } = useQuery(slidesQuery());
  const { data: verify } = useQuery(verifyQuery());
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [carouselIdx, setCarouselIdx] = useState(0);
  const currentBackgroundColor = slides.find((_, idx) => idx === carouselIdx).sideBackgroundColor;
  const navigate = useNavigate();

  const handleCarouselClick = async couponId => {
    if (!verify) navigate(PATH.SIGNIN);

    try {
      const { message } = await addCoupon(couponId);
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
      bg={currentBackgroundColor}
      sx={{
        transition: 'all .1s ',
      }}>
      <MantineCarousel
        mx="auto"
        maw="120rem"
        withIndicators
        loop
        plugins={[autoplay.current]}
        previousControlIcon={<SlArrowLeft size="5rem" color="white" />}
        nextControlIcon={<SlArrowRight size="5rem" color="white" />}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        onSlideChange={setCarouselIdx}
        pos="static"
        sx={{
          '.mantine-Carousel-control': {
            border: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
          '.mantine-Carousel-indicator': {
            width: '1rem',
            height: '1rem',
          },
        }}>
        {slides.map(({ couponId, imgURL, alt }) => (
          <MantineCarousel.Slide
            key={couponId}
            onClick={() => handleCarouselClick(couponId)}
            sx={{ cursor: 'pointer' }}>
            <Image src={imgURL} alt={alt} fit="contain" height="45rem" />
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </Container>
  );
};

export default Carousel;
