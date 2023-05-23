import { Link } from 'react-router-dom';

import { Container, Space, Title, Text, useMantineColorScheme } from '@mantine/core';
import { FaAngleDoubleRight } from 'react-icons/fa';

import { SadIcon } from 'components/common';
import { PATH } from 'constants';

const NoProduct = ({ pageName }) => {
  const { colorShceme } = useMantineColorScheme();

  return (
    <Container align="center" c={colorShceme === 'dark' ? 'gray.6' : 'gray.9'} fz="1.6rem" py="4rem">
      <SadIcon />
      <Space h="xl" />
      <Title>{pageName}에 상품이 없습니다</Title>
      <Space h="xl" />
      <Link to={PATH.MAIN}>
        <Text sx={{ verticalAlign: 'bottom' }}>
          <FaAngleDoubleRight
            style={{ verticalAlign: 'middle', transform: 'transLate3d(0, -1px, 0)', marginRight: '4px' }}
          />
          <Text weight="bold" span>
            FENB
          </Text>
          의 신발들을 둘러보세요
        </Text>
      </Link>
    </Container>
  );
};

export default NoProduct;
