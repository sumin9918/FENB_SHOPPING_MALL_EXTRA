import { ActionIcon } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { SlArrowUpCircle } from 'react-icons/sl';

const ScrollTop = ({ positionY }) => {
  const [scroll, scrollTo] = useWindowScroll();

  const handleScrollTopClick = position => () => {
    scrollTo(position);
  };

  return (
    scroll.y >= positionY && (
      <ActionIcon
        bottom="2rem"
        color="blue.6"
        pos="fixed"
        right="2rem"
        size="3rem"
        sx={{ borderRadius: '50%', zIndex: 1 }}>
        <SlArrowUpCircle size="5rem" onClick={handleScrollTopClick({ y: 0 })} />
      </ActionIcon>
    )
  );
};

export default ScrollTop;
