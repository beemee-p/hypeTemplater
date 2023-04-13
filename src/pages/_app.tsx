import type { AppProps } from "next/app";
import Head from "next/head";
// import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HypeTemplate</title>
      </Head>

      {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
