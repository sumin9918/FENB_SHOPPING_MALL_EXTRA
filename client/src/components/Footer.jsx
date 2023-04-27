import {
  useMantineColorScheme,
  Container,
  Footer as MantineFooter,
  Flex,
  Text,
  Tooltip,
  Group,
  Stack,
  Button,
  Divider,
  Anchor,
} from '@mantine/core';
import { BsGithub } from 'react-icons/bs';

const creators = [
  { name: '김경우', role: '프론트엔드 개발', githubURL: 'https://github.com/KimKyungWoo94', mbti: 'ISTP' },
  { name: '김경재', role: '프론트엔드 개발', githubURL: 'https://github.com/GitHub-KJKim', mbti: 'ISFP' },
  { name: '이동규', role: '프론트엔드 개발', githubURL: 'https://github.com/tenenger7125', mbti: 'INFJ' },
  { name: '최수민', role: '프론트엔드 개발', githubURL: 'https://github.com/sumin9918', mbti: 'INTJ' },
];

const menus = [
  { title: '이용안내', contents: ['검수기준', '이용정책', '페널티 정책', '커뮤니티 가이드라인'] },
  { title: '고객지원', contents: ['공지사항', '서비스 소개', '쇼룸 안내', '판매자 방문접수'] },
];

const services = [
  {
    title: '고객센터',
    phone: '1588-7813',
    limitTime: '운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) 점심시간 평일 13:00 - 14:00',
    notification: '1:1 문의하기는 앱에서만 가능합니다.',
  },
];

const Creator = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack>
      {creators.map(({ name, role, githubURL, mbti }) => (
        <Flex key={name} gap="md" justify="flex-start">
          <Text c={colorScheme === 'dark' ? 'gray.6' : 'rgba(34,34,34,.5)'}>{name}</Text>
          <Text c={colorScheme === 'dark' ? 'gray.6' : 'rgba(34,34,34,.5)'}>{role}</Text>
          <Text c={colorScheme === 'dark' ? 'gray.6' : 'rgba(34,34,34,.5)'}>{mbti}</Text>
          <Tooltip label="깃허브">
            <Anchor href={githubURL} target="_blank">
              <BsGithub />
            </Anchor>
          </Tooltip>
        </Flex>
      ))}
    </Stack>
  );
};

const Menus = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group>
      {menus.map(({ title, contents }) => (
        <Stack key={title} w="16rem" spacing="xs">
          <Text fz="1.6rem" fw="bold">
            {title}
          </Text>
          {contents.map(content => (
            <Text key={content} c={colorScheme === 'dark' ? 'gray.6' : 'rgba(34,34,34,.5)'} fz="1.3rem">
              {content}
            </Text>
          ))}
        </Stack>
      ))}
    </Group>
  );
};

const ServiceArea = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group w="28rem">
      {services.map(({ title, phone, limitTime, notification }) => (
        <Stack key={title}>
          <Text fz="1.6rem" fw="bold">
            {title} {phone}
          </Text>
          <Text c={colorScheme === 'dark' ? 'gray.6' : 'rgba(34,34,34,.5)'}>{limitTime}</Text>
          <p>{notification}</p>
          <Button w="11rem" color={colorScheme === 'dark' ? 'gray.6' : 'dark'}>
            자주 묻는 질문
          </Button>
        </Stack>
      ))}
    </Group>
  );
};

const BusinessTitle = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Text c={colorScheme === 'dark' ? 'gray.6' : 'rgba(34,34,34,.5)'} w="65rem">
      팬비 주식회사 · 대표 우재규민 사업자등록번호 : 486-486486 사업자정보확인통신판매업 : 제 2023-A-00000001호
      사업장소재지 : 서울특별시 강남구 강남대로 364 (역삼동), 미왕빌딩 10층 서비스 : FENB
    </Text>
  );
};

const Footer = () => (
  <MantineFooter sx={{ borderTop: '1px solid #ced4da' }} fz="1.3rem" m="5rem 0" p="5rem">
    <Container size="1200px">
      <Group position="apart" pb="5.6rem" align="center">
        <Menus />
        <Creator />
        <ServiceArea />
      </Group>
      <Divider size="xs" pb="3rem" />
      <Group position="apart" pt="2rem">
        <BusinessTitle />
        <Text color="dimmed" size="md">
          © 2023 FENB. All rights reserved.
        </Text>
      </Group>
    </Container>
  </MantineFooter>
);

export default Footer;
