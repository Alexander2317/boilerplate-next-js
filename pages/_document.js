import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1, minimum-scale=1, width=device-width"
          />
        </Head>
        <body style={{ height: '100vh' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
