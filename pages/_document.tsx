/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Script from 'next/script';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html lang="sk" dir="ltr">
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Moderná zubná klinika z Popradu" />
          <meta
            name="keywords"
            content="zub, zuby, ambulancia, zubár, bielenie zubov, dentálna hygiena, stomatologická churirgia, protetická stomatológia, záchovná stomatológia, zubné implantáty"
          />
          <Script
            id="cookieyes"
            strategy="lazyOnload"
            src="https://cdn-cookieyes.com/client_data/60740093020de7fe6cb65261/script.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
