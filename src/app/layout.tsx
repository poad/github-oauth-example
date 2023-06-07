import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import theme from './theme';

export default function Layout({
  children,
}: { children: ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <head>
        {/* PWA primary color */}
        <meta name='theme-color' content={theme.palette.primary.main} />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&display=swap'
          rel='stylesheet'
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel='stylesheet'
          type='text/css'
          href='http://mplus-fonts.sourceforge.jp/webfonts/general-j/mplus_webfonts.css'
        />
      </head>
      <body
        style={{
          fontKerning: 'normal',
          MozFontFeatureSettings: 'kern',
          fontFeatureSettings: 'kern',
          fontFamily: 'IBM Plex Sans, sans-serifM+ Type-1 (general-j) Regular',
        }}
      >
        {' '}
        <SessionProvider session={undefined}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
