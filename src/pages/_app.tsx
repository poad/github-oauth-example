import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import theme from '../styles/theme';


const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps): JSX.Element => (
  <SessionProvider session={session}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ThemeProvider makes the theme available down the React
          tree thanks to React context. */}

      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>
);
export default App;
