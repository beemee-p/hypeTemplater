import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/global.css';
import '@/styles/GlobalTheme.ts';
import { ThemeProvider } from 'styled-components';
import { GlobalTheme, MainTheme } from '@/styles/GlobalTheme';
import Layout from '@/components/common/Layout';
import useDarkMode from '@/components/hooks/useDarkMode';
import { createContext } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

export interface ContextProps {
  colorTheme: MainTheme | null;
  setToggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  colorTheme: GlobalTheme.light,
  setToggleTheme: () => null,
});

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  const { colorTheme, setToggleTheme } = useDarkMode();
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>HypeTemplate</title>
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeContext.Provider value={{ colorTheme, setToggleTheme }}>
            <ThemeProvider theme={{ ...colorTheme }}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
