import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import { useTheme } from 'hooks';
import GlobalStyle from 'styles/Global.style';

export const queryClient = new QueryClient();

const GlobalProvider = ({ children }) => {
  const { colorScheme, toggleTheme } = useTheme();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleTheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <GlobalStyle />
            {children}
            <Notifications position="top-center" />
          </QueryClientProvider>
        </RecoilRoot>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default GlobalProvider;
