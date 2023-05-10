import { ActionIcon } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { SlArrowUpCircle } from 'react-icons/sl';

const ScrollTop = ({ positionY }) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      {scroll.y >= positionY && (
        <ActionIcon color="blue.6" size="3rem" pos="fixed" bottom="2rem" right="2rem" sx={{ borderRadius: '50%' }}>
          <SlArrowUpCircle onClick={() => scrollTo({ y: 0 })} size="5rem" />
        </ActionIcon>
      )}
    </>
  );
};

export default ScrollTop;
