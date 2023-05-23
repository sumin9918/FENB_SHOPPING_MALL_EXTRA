import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Flex, Navbar, Tabs, useMantineColorScheme } from '@mantine/core';

import { useCategory } from 'hooks/products';
import { getDecodeSearch } from 'utils';
import { PATH } from 'constants';

const Category = () => {
  const { colorScheme } = useMantineColorScheme();

  const { search: rawSearch } = useLocation();

  const categories = useCategory();

  const [activeTab, setActiveTab] = useState('');

  const { searchValue } = getDecodeSearch(rawSearch);

  useEffect(() => {
    setActiveTab(searchValue);
  }, [searchValue]);

  return (
    <Navbar.Section h="auto" m="auto" mt="md" grow>
      <Flex justify="space-between" m="auto">
        <Tabs
          color={colorScheme === 'dark' ? 'gray.0' : 'dark'}
          value={activeTab}
          sx={{
            'button[data-active]': {
              fontWeight: 'bold',
              borderBottom: '2px solid',
            },
          }}
          onTabChange={setActiveTab}>
          <Tabs.List fw="bold">
            {categories.map(({ kr, en }) => (
              <Link key={en} to={`${PATH.CATEGORY}?category=${en}`}>
                <Tabs.Tab
                  c={colorScheme === 'dark' ? 'gray.6' : 'gray.7'}
                  fz="1.6rem"
                  value={en}
                  sx={{
                    ':hover': {
                      border: 'none',
                    },
                  }}>
                  {kr}
                </Tabs.Tab>
              </Link>
            ))}
          </Tabs.List>
        </Tabs>
      </Flex>
    </Navbar.Section>
  );
};

export default Category;
