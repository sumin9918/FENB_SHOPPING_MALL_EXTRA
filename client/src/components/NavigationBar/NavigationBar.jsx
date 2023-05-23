import { Container, Navbar, useMantineTheme } from '@mantine/core';

import { Category, Main } from 'components/NavigationBar';

const NavigationBar = () => {
  const theme = useMantineTheme();

  return (
    <Navbar height="auto" mb="4rem" position={{ top: 0, left: 0, borderBottom: `1px solid ${theme.colors.gray[4]}` }}>
      <Container m="auto" size="120rem" w="100%">
        <Main />
        <Category />
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
