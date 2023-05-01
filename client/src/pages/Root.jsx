import { Outlet } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider, ActionIcon } from '@mantine/core';
import { SlArrowUpCircle } from 'react-icons/sl';
import { useWindowScroll } from '@mantine/hooks';
import { Footer, NavigationBar, SwitchingpageScrollToTop } from '../components';
import useTheme from '../hooks/darkmode/useTheme';

const Root = () => {
  const { colorScheme, toggleTheme } = useTheme();
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleTheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NavigationBar />
          <SwitchingpageScrollToTop />
          <Outlet />
          <Footer />
          {scroll.y >= 700 && (
            <ActionIcon color="indigo" size="3rem" pos="fixed" bottom="2rem" right="2rem" sx={{ borderRadius: '50%' }}>
              <SlArrowUpCircle onClick={() => scrollTo({ y: 0 })} size="5rem" />
            </ActionIcon>
          )}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default Root;
