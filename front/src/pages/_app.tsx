import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store/store';

import '~/scss/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      />
    </Head>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </>
);

export default App;
