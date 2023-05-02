import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Navbar, Tabs, useMantineColorScheme } from '@mantine/core';
import useCategory from '../../hooks/products/useCategory';
import { getDecodeSearch } from '../../utils/location';
import { PATH } from '../../constants';

const Category = () => {
  const { categories } = useCategory();
  const [activeTab, setActiveTab] = useState('');
  const { search: rawSearch } = useLocation();
  const { searchValue } = getDecodeSearch(rawSearch);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setActiveTab(searchValue);
  }, [searchValue]);

  return (
    <Navbar.Section grow mt="md" m="auto" h="auto">
      <Flex m="auto" justify="space-between">
        <Tabs
          color={colorScheme === 'dark' ? 'gray.0' : 'dark'}
          sx={{
            'button[data-active]': {
              fontWeight: 'bold',
              borderWidth: '.2rem',
            },
          }}
          value={activeTab}
          onTabChange={setActiveTab}>
          <Tabs.List sx={{ border: 'none' }}>
            {categories.map(({ kr, en }) => (
              <Link key={en} to={`${PATH.CATEGORY}?category=${en}`}>
                <Tabs.Tab value={en} fz="1.6rem">
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
