import * as React from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../styles/theme';
import createCache from '@emotion/cache';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

export default class NextDocument extends Document {
  static getInitialProps: (ctx: DocumentContext) => Promise<DocumentInitialProps>;

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&display=swap" rel="stylesheet" />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" type="text/css" href="http://mplus-fonts.sourceforge.jp/webfonts/general-j/mplus_webfonts.css"></link>
        </Head>
        <body style={{
          fontKerning: 'normal',
          MozFontFeatureSettings: 'kern',
          fontFeatureSettings: 'kern',
          fontFamily: 'IBM Plex Sans, sans-serifM+ Type-1 (general-j) Regular',
        }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

NextDocument.getInitialProps = async (ctx: DocumentContext) => {

  const originalRenderPage = ctx.renderPage;

  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any,react/display-name
      enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const emotionStyleTags = emotionStyles.styles.map((style: { key: React.Key | null | undefined; ids: any[]; css: any; }) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
