import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { Button, Checkbox, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { BsCaretDownSquare } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import { queryClient } from 'components/GlobalProvider';
import { removeUser, signOut } from 'api/fetch';
import { userState } from 'recoil/atoms';
import { useMediaQuery } from 'hooks';
import { PATH, QUERY_KEY, MEDIAQUERY_WIDTH } from 'constants';

const Withdrawal = () => {
  const { colors, colorScheme } = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const setUser = useSetRecoilState(userState);

  const handleMoveToAccountClick = () => {
    navigate(PATH.ACCOUNT);
  };

  const handleWithdrawalClick = async () => {
    await removeUser();
    await signOut();

    setUser(null);
    queryClient.removeQueries(QUERY_KEY.AUTH);

    navigate(PATH.MAIN);
  };

  return (
    <Stack pb="2rem" px="0.8rem" spacing="3.2rem" w="100%">
      <Title
        fz="2.4rem"
        mb="3.2rem"
        pb="2rem"
        sx={{ borderBottom: `2px solid ${colorScheme === 'dark' ? colors.gray[6] : colors.gray[8]}` }}>
        회원탈퇴
      </Title>
      <Stack spacing="3rem">
        <Title fz={matches ? '2.1rem' : '1.9rem'}>회원탈퇴에 앞서 아래 내용을 반드시 확인해 주세요.</Title>
        <Stack p="2.4rem" spacing="3rem" sx={{ border: `1px solid ${colors.gray[5]}` }} w="100%">
          <Stack spacing={0}>
            <Group pb="1.2rem" sx={{ flexWrap: 'nowrap' }}>
              <BsCaretDownSquare
                size={matches ? '2.4rem' : '2.2rem'}
                style={{ minWidth: matches ? '2.4rem' : '2.2rem' }}
              />
              <Title fz={matches ? '2.1rem' : '1.9rem'}>
                486을 탈퇴하면 회원 정보 및 서비스 이용 기록이 삭제됩니다.
              </Title>
            </Group>
            <DotText>
              내 프로필, 관심상품, 보유상품 등 사용자의 모든 정보가 사라지며 재가입 하더라도 복구가 불가능합니다.
            </DotText>
            <DotText>탈퇴 14일 이내 재가입할 수 없으며, 탈퇴 후 동일 이메일로 재가입할 수 없습니다</DotText>
          </Stack>
          <Stack spacing={0}>
            <Group pb="1.2rem" sx={{ flexWrap: 'nowrap' }}>
              <BsCaretDownSquare
                size={matches ? '2.4rem' : '2.2rem'}
                style={{ minWidth: matches ? '2.4rem' : '2.2rem' }}
              />
              <Title fz={matches ? '2.1rem' : '1.9rem'}>
                관련 법령 및 내부 기준에 따라 별도 보관하는 경우에는 일부 정보가 보관될 수 있습니다.
              </Title>
            </Group>
            <Title fz={matches ? '1.8rem' : '1.7rem'} py="0.8rem">
              1. 전자상거래 등 소비자 보호에 관한 법률
            </Title>
            <DotText>계약 또는 청약철회 등에 관한 기록: 5년 보관</DotText>
            <DotText>대금결제 및 재화 등의 공급에 관한 기록: 5년 보관</DotText>
            <DotText>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관</DotText>
            <Title fz={matches ? '1.8rem' : '1.7rem'} py="0.8rem">
              2. 통신비밀보호법
            </Title>
            <DotText>접속 로그 기록: 3개월 보관</DotText>
            <Title fz={matches ? '1.8rem' : '1.7rem'} py="0.8rem">
              3. 내부 기준에 따라 별도 보관
            </Title>
            <DotText>부정이용 방지를 위해 이름, 이메일(로그인ID), 휴대전화번호, CI/DI: 3년 보관</DotText>
          </Stack>
          <Stack spacing={0}>
            <Group pb="1.2rem" sx={{ flexWrap: 'nowrap' }}>
              <BsCaretDownSquare
                size={matches ? '2.4rem' : '2.2rem'}
                style={{ minWidth: matches ? '2.4rem' : '2.2rem' }}
              />
              <Title fz={matches ? '2.1rem' : '1.9rem'}>
                486 탈퇴가 제한된 경우에는 아래 내용을 참고하시기 바랍니다.
              </Title>
            </Group>
            <DotText>진행 중인 거래(판매/구매)가 있을 경우: 해당 거래 종료 후 탈퇴 가능</DotText>
            <DotText>진행 중인 입찰(판매/구매)가 있을 경우: 해당 입찰 삭제 후 탈퇴 가능</DotText>
            <DotText>미납 수수료(착불 발송비/페널티)가 있을 경우: 해당 결제 완료 후 탈퇴 가능</DotText>
            <DotText>이용 정지 상태인 경우: 이용 정지 해제 후 탈퇴 가능</DotText>
          </Stack>
        </Stack>
        <Checkbox
          checked={checked}
          label={<Title fz={matches ? '2.1rem' : '1.9rem'}>회원탈퇴 안내를 모두 확인하였으며 탈퇴에 동의합니다.</Title>}
          size={matches ? '2.8rem' : '2.4rem'}
          sx={{ cursor: 'pointer' }}
          onChange={e => setChecked(e.currentTarget.checked)}
        />
        <Group mt="2rem" position="center" spacing="3rem">
          <Button
            color={colorScheme === 'dark' ? 'gray.2' : 'dark'}
            h="5rem"
            radius="3rem"
            size="1.7rem"
            variant={colorScheme === 'dark' ? 'outline' : 'filled'}
            w="15rem"
            onClick={handleMoveToAccountClick}>
            취소
          </Button>
          <Button
            color={colorScheme === 'dark' ? 'gray.7' : 'gray.5'}
            disabled={!checked}
            h="5rem"
            radius="3rem"
            size="1.7rem"
            variant="outline"
            w="15rem"
            onClick={handleWithdrawalClick}>
            탈퇴하기
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};

const DotText = ({ children }) => {
  const matches = useMediaQuery(`(min-width: ${MEDIAQUERY_WIDTH}px)`);

  return (
    <Group fz={matches ? '1.8rem' : '1.7rem'} py="0.2rem" sx={{ flexWrap: 'nowrap' }}>
      <RxDotFilled size={matches ? '2rem' : '1.8rem'} style={{ minWidth: matches ? '2rem' : '1.8rem' }} />
      <Text>{children}</Text>
    </Group>
  );
};

export default Withdrawal;
