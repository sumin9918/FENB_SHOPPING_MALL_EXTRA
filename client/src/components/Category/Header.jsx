import { Container, Select, Flex, useMantineColorScheme } from '@mantine/core';
import { CATEGORIES } from '../../constants';

const Header = ({ sortOption, searchValue, productCount, handleSelectSortOption }) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex
      justify="space-between"
      align="center"
      pos="sticky"
      top="0"
      bg={colorScheme === 'dark' ? 'dark.7' : 'white'}
      sx={{ zIndex: 99 }}>
      <Container m="0" p="1.5rem 1rem" fz="2.4rem" fw="600">
        {CATEGORIES[searchValue] ? `${CATEGORIES[searchValue]}` : `${searchValue}`} {`(${productCount})`}
      </Container>
      <Select
        size="xl"
        maxDropdownHeight={500}
        value={sortOption}
        data={[
          { value: 'favorite', label: '추천순' },
          { value: 'new', label: '최신순' },
          { value: 'high', label: '높은 가격순' },
          { value: 'low', label: '낮은 가격순' },
        ]}
        styles={theme => ({
          input: {
            fontSize: '1.5rem',
            '&:focus': {
              borderColor: theme.colors.gray[4],
            },
          },
          item: {
            '&[data-selected]': {
              '&, &:hover': {
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[1],
                color: theme.colorScheme === 'dark' ? theme.white : 'black',
              },
            },
          },
        })}
        onChange={e => handleSelectSortOption(e)}
      />
    </Flex>
  );
};

export default Header;
