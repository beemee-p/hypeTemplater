import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/global.css";
import "@/styles/GlobalTheme.ts";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "@/styles/GlobalTheme";
import Layout from "@/components/common/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HypeTemplate</title>
      </Head>

      <ThemeProvider theme={GlobalTheme.theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
