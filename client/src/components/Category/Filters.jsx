import { FaCheck } from 'react-icons/fa';
import {
  Stack,
  Accordion,
  Checkbox,
  Button,
  UnstyledButton,
  ColorSwatch,
  SimpleGrid,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { SizeButton } from '..';
import { PRICES, SIZES, COLORS, GENDER, BRANDS } from '../../constants';

const Filters = ({ filters, handleResetFilters, handleCheckFilters }) => {
  const theme = useMantineTheme();
  const { priceFilters, sizeFilters, colorFilters, genderFilters, brandFilters } = filters;

  return (
    <>
      <Button
        variant="default"
        m="1rem 1rem"
        p="0"
        w="22rem"
        h="5rem"
        fz="1.6rem"
        radius="lg"
        fw="normal"
        onClick={handleResetFilters}>
        필터 초기화
      </Button>
      <Accordion
        defaultValue={['price', 'size', 'color', 'gender', 'brand']}
        sx={{ label: { fontSize: '1.6rem' }, span: { fontSize: '1.6rem' } }}
        multiple>
        <Accordion.Item value="price">
          <Accordion.Control>가격</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {PRICES.map(({ rangeIdx, text }, i) => (
                <Checkbox
                  key={rangeIdx}
                  size="lg"
                  label={text}
                  checked={priceFilters.at(i)}
                  onChange={() => handleCheckFilters({ rangeIdx })}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="size">
          <Accordion.Control>사이즈</Accordion.Control>
          <Accordion.Panel>
            <SimpleGrid cols={3} spacing="sm" verticalSpacing="sm">
              {SIZES.map((size, i) => (
                <SizeButton
                  key={size}
                  variant="default"
                  radius="md"
                  selected={sizeFilters.at(i)}
                  fw="normal"
                  onClick={() => handleCheckFilters({ size })}>
                  {size}
                </SizeButton>
              ))}
            </SimpleGrid>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="color">
          <Accordion.Control>색상</Accordion.Control>
          <Accordion.Panel>
            <SimpleGrid cols={3} spacing="md">
              {COLORS.map(({ color, en, kr }, i) => (
                <Stack key={color} spacing={'0.2rem'} align="center">
                  <UnstyledButton>
                    <ColorSwatch
                      color={color}
                      size="3rem"
                      selected={colorFilters.at(i)}
                      onClick={() => handleCheckFilters({ color: en })}
                      sx={{
                        '.mantine-ColorSwatch-shadowOverlay': {
                          boxShadow: en === 'black' && `${theme.colors.gray[6]} 0 0 0 0.0625rem inset`,
                        },
                      }}>
                      {colorFilters.at(i) && (
                        <FaCheck size={'1.2rem'} color={en === 'white' || en === 'beige' ? 'black' : 'white'} />
                      )}
                    </ColorSwatch>
                  </UnstyledButton>
                  <Text size="1.2rem" align="center">
                    {kr}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="gender">
          <Accordion.Control>성별</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {GENDER.map(({ en, kr }, i) => (
                <Checkbox
                  key={en}
                  size="lg"
                  label={kr}
                  checked={genderFilters.at(i)}
                  onChange={() => handleCheckFilters({ gender: en })}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="brand">
          <Accordion.Control>제조사</Accordion.Control>
          <Accordion.Panel>
            <Stack>
              {BRANDS.map(({ en, kr }, i) => (
                <Checkbox
                  key={en}
                  size="lg"
                  label={kr}
                  checked={brandFilters.at(i)}
                  onChange={() => handleCheckFilters({ brand: en })}
                />
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Filters;
