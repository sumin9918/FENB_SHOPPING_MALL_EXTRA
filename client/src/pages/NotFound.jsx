import { Container, Image, Title } from '@mantine/core';

const NotFound = () => (
  <Container maw="120rem" p="5rem 0">
    <Title order={1} color="#027dff" ta="center">
      원하시는 페이지를 찾을 수 없습니다.
    </Title>
    <Container maw="50rem">
      <Image src="images/page/404.jpg"></Image>
    </Container>
  </Container>
);

export default NotFound;
