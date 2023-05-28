import { Container, Stack, Text } from '@mantine/core';
import { RiEmotionSadLine } from 'react-icons/ri';

const SadIcon = ({ children }) => (
  <Container>
    <Stack align="center">
      <svg height={0} width={0}>
        <linearGradient id="sadIcon" x1="20%" x2="80%" y1="20%" y2="80%">
          <stop offset="0%" stopColor="#cc208e" />
          <stop offset="100%" stopColor="#6713d2" />
        </linearGradient>
      </svg>

      <RiEmotionSadLine style={{ width: '15rem', height: '15rem', fill: 'url(#sadIcon)' }} />
      <Text align="center" fz="2.4rem" lh="6rem">
        {children}
      </Text>
    </Stack>
  </Container>
);

export default SadIcon;
