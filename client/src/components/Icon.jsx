import { Container, Stack, Text } from '@mantine/core';

const Icon = () => (
  <svg viewBox="0 0 24 24" width="50%" height="50%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="icon" x1="20%" x2="80%" y1="20%" y2="80%">
        <stop offset="0%" stopColor="#cc208e" />
        <stop offset="100%" stopColor="#6713d2" />
      </linearGradient>
    </defs>

    <g>
      <path
        fill="url(#icon)"
        fillRule="nonzero"
        d="M12 2c5.523 0 10 4.477 10 10 0 .727-.077 1.435-.225 2.118l-1.782-1.783a8 8 0 1 0-4.375 6.801 3.997 3.997 0 0 0 1.555 1.423A9.956 9.956 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm7 12.172l1.414 1.414a2 2 0 1 1-2.93.11l.102-.11L19 14.172zM12 15c1.466 0 2.785.631 3.7 1.637l-.945.86C13.965 17.182 13.018 17 12 17c-1.018 0-1.965.183-2.755.496l-.945-.86A4.987 4.987 0 0 1 12 15zm-3.5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
    </g>
  </svg>
);

const SadIcon = ({ children }) => (
  <Container>
    <Stack align="center">
      <Icon />
      <Text align="center" fz="2.4rem" lh="6rem">
        {children}
      </Text>
    </Stack>
  </Container>
);

export default SadIcon;
