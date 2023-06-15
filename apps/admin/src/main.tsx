import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/App';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import {
  Client as UrqlClient,
  cacheExchange,
  fetchExchange,
  Provider as UrqlProvider,
} from 'urql';
import { WebSocketClient } from '@gubgoo-backoffice/react-module';

const urqlClient = new UrqlClient({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    mode: 'cors',
    credentials: 'same-origin',
    headers: { accept: '*/*' },
  },
});

if (process.env.NODE_ENV === 'development') {
  import('@gubgoo-backoffice/react-module/mock');
}
const queryClient = new QueryClient();
WebSocketClient.init();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UrqlProvider value={urqlClient}>
        <App />
      </UrqlProvider>
    </QueryClientProvider>
  </StrictMode>
);
