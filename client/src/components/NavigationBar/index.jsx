import { Container, Navbar } from '@mantine/core';
import Category from './Category';
import Main from './Main';

const NavigationBar = () => (
  <Navbar height="auto" zIndex={9999} position={{ top: 0, left: 0, borderBottom: '1px solid #ced4da' }}>
    <Container w="100%" size="120rem" m="auto">
      <Main />
      <Category />
    </Container>
  </Navbar>
);

export default NavigationBar;
