import { Outlet } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { Footer, SwitchingpageScrollToTop } from '../components';
import NavigationBar from '../components/NavigationBar';
import useTheme from '../hooks/darkmode/useTheme';
import ScrollTop from '../components/ScrollTop';

const Root = () => {
  const { colorScheme, toggleTheme } = useTheme();
  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleTheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NavigationBar />
          <SwitchingpageScrollToTop />
          <Outlet />
          <Footer />
          <ScrollTop positionY={700} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default Root;
