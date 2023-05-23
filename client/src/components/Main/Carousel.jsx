import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Container, Image } from '@mantine/core';
import { Carousel as MantineCarousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { addCoupon } from 'api/fetch';
import { slidesQuery, verifyQuery } from 'api/query';
import { PATH } from 'constants';

const Carousel = ({ modalOpen, setModalTitle }) => {
  const navigate = useNavigate();

  const { data: slides } = useQuery(slidesQuery());
  const { data: verify } = useQuery(verifyQuery());

  const [carouselIdx, setCarouselIdx] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const currentBackgroundColor = slides.find((_, idx) => idx === carouselIdx).sideBackgroundColor;

  const handleCarouselClick = couponId => async () => {
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
      bg={currentBackgroundColor}
      maw="100%"
      pos="relative"
      w="100%"
      sx={{
        transition: 'all .1s ',
      }}>
      <MantineCarousel
        maw="120rem"
        mx="auto"
        nextControlIcon={<SlArrowRight color="white" size="5rem" />}
        plugins={[autoplay.current]}
        pos="static"
        previousControlIcon={<SlArrowLeft color="white" size="5rem" />}
        styles={() => ({
          control: {
            border: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
          indicator: {
            width: '1rem',
            height: '1rem',
          },
        })}
        loop
        withIndicators
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        onSlideChange={setCarouselIdx}>
        {slides.map(({ couponId, imgURL, alt }) => (
          <MantineCarousel.Slide key={couponId} sx={{ cursor: 'pointer' }} onClick={handleCarouselClick(couponId)}>
            <Image alt={alt} fit="contain" height="45rem" src={imgURL} />
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </Container>
  );
};

export default Carousel;
