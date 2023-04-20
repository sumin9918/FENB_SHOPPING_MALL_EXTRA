import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Notifications } from '@mantine/notifications';

import App from './App';
import GlobalStyle from './styles/Global.style';

const queryClient = new QueryClient({ defaultOptions: { queries: { suspense: true, retry: 0 } } });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyle />
        <App />
        <Notifications position="top-center" />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
