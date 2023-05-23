import { Container, Image, Title } from '@mantine/core';

const NotFound = () => (
  <Container maw="120rem" p="5rem 0">
    <Title color="blue.6" order={1} ta="center">
      원하시는 페이지를 찾을 수 없습니다.
    </Title>
    <Container maw="50rem">
      <Image alt="404 not found" src="images/page/404.jpg"></Image>
    </Container>
  </Container>
);

export default NotFound;
