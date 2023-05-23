import { Stack, Accordion, Checkbox, Button, UnstyledButton, ColorSwatch, SimpleGrid, Text } from '@mantine/core';
import { FaCheck } from 'react-icons/fa';

import { FILTER } from 'constants';

const { PRICES, SIZES, COLORS, GENDER, BRANDS } = FILTER;

const FILTER_LISTS = ['price', 'size', 'color', 'gender', 'brand'];

const Filters = ({
  filters: { priceFilters, sizeFilters, colorFilters, genderFilters, brandFilters },
  handleResetFiltersClick,
  handleCheckFiltersClick,
}) => (
  <>
    <Button
      fw="normal"
      fz="1.6rem"
      h="5rem"
      m="1rem 1rem"
      p="0"
      radius="lg"
      variant="default"
      w="22rem"
      onClick={handleResetFiltersClick}>
      필터 초기화
    </Button>
    <Accordion
      defaultValue={FILTER_LISTS}
      sx={{ label: { fontSize: '1.6rem' }, span: { fontSize: '1.6rem' } }}
      multiple>
      <Accordion.Item value="price">
        <Accordion.Control>가격</Accordion.Control>
        <Accordion.Panel>
          <Stack>
            {PRICES.map(({ rangeIdx, text }, i) => (
              <Checkbox
                key={rangeIdx}
                checked={priceFilters[i]}
                label={text}
                size="lg"
                onChange={handleCheckFiltersClick({ rangeIdx })}
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
              <Button
                key={size}
                fw="normal"
                fz="1.6rem"
                h="4rem"
                radius="md"
                variant="default"
                sx={theme => ({
                  border: `${sizeFilters[i] && `1px solid ${theme.colors.blue[6]}`}`,
                })}
                onClick={handleCheckFiltersClick({ size })}>
                {size}
              </Button>
            ))}
          </SimpleGrid>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="color">
        <Accordion.Control>색상</Accordion.Control>
        <Accordion.Panel>
          <SimpleGrid cols={3} spacing="md">
            {COLORS.map(({ color, en, kr }, i) => (
              <Stack key={color} align="center" spacing={'0.2rem'}>
                <UnstyledButton>
                  <ColorSwatch
                    color={color}
                    selected={colorFilters.at(i)}
                    size="3rem"
                    styles={theme => ({
                      '.mantine-ColorSwatch-shadowOverlay': {
                        boxShadow: en === 'black' && `${theme.colors.gray[7]} 0 0 0 0.0625rem inset`,
                      },
                    })}
                    onClick={handleCheckFiltersClick({ color: en })}>
                    {colorFilters[i] && (
                      <FaCheck color={en === 'white' || en === 'beige' ? 'black' : 'white'} size="1.2rem" />
                    )}
                  </ColorSwatch>
                </UnstyledButton>
                <Text align="center" size="1.2rem">
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
                checked={genderFilters[i]}
                label={kr}
                size="lg"
                onChange={handleCheckFiltersClick({ gender: en })}
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
                checked={brandFilters[i]}
                label={kr}
                size="lg"
                onChange={handleCheckFiltersClick({ brand: en })}
              />
            ))}
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </>
);

export default Filters;
