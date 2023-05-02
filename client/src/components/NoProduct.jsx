import { Link } from 'react-router-dom';
import { Container, Space, Title, Text, useMantineColorScheme } from '@mantine/core';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { SadIcon } from './index';
import { PATH } from '../constants';

const NoProduct = ({ pageName }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container py="4rem" fz="1.6rem" align="center" c={colorScheme === 'dark' ? 'gray.6' : 'rgb(17,17,17)'}>
      <SadIcon />
      <Space h="xl" />
      <Title>{`${pageName}에 상품이 없습니다`}</Title>
      <Space h="xl" />
      <Link to={PATH.MAIN}>
        <Text color={colorScheme === 'dark' ? 'gray.6' : 'rgba(117,117,117)'} style={{ verticalAlign: 'bottom' }}>
          <FaAngleDoubleRight
            style={{ verticalAlign: 'middle', transform: 'transLate3d(0, -1px, 0)', marginRight: '4px' }}
          />
          <Text span weight="bold" color={colorScheme === 'dark' ? 'gray.6' : 'rgb(17,17,17)'}>
            FENB
          </Text>
          의 신발들을 둘러보세요
        </Text>
      </Link>
    </Container>
  );
};

export default NoProduct;
