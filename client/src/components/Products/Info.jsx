import { Stack, ColorSwatch, Text, SimpleGrid, useMantineColorScheme } from '@mantine/core';
import styled from '@emotion/styled';
import { SizeButton } from '..';

const SizeButtonContainer = styled(SimpleGrid)`
  border: ${props => props.selected && '1px solid #F36B26'};
  border-radius: 0.4rem;
`;

const Info = ({ currentProduct, isSizeSelected, currentSelectedSize, handleSizeClick }) => {
  const { colorScheme } = useMantineColorScheme();
  const { price, color, brand, stocks } = currentProduct;

  return (
    <>
      {/* 2. 묻기 */}
      <Text fw={500} size="2rem">{`${price.toLocaleString()} 원`}</Text>
      <Text size="1.4rem" color="dimmed" m="1.2rem 0">
        {brand.kr}
      </Text>
      <Stack>
        <Text fw="600">사이즈 선택</Text>
        <SizeButtonContainer cols={5} selected={isSizeSelected === false}>
          {stocks.map(({ size, stock }) => (
            <SizeButton
              key={size}
              variant="default"
              radius="0.4rem"
              fw="normal"
              disabled={stock === 0}
              selected={size === currentSelectedSize}
              styles={theme => ({
                root: {
                  '&:disabled': {
                    color: colorScheme === 'dark' && theme.colors.gray[6],
                  },
                },
              })}
              onClick={() => handleSizeClick(size)}>
              {size}
            </SizeButton>
          ))}
        </SizeButtonContainer>
        {isSizeSelected === false ? (
          <Text fw="500" color="red">
            사이즈를 선택해주세요
          </Text>
        ) : null}
        <Stack align="center" w="5rem" spacing="xs" m="1.4rem 0">
          <ColorSwatch color={color.color} size="2.5rem" />
          <Text m="0" fz="1.4rem" fw="500">
            {color.kr}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Info;
