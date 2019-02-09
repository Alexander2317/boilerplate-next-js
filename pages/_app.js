import App, { Container } from 'next/app';
import React from 'react';
import NextSeo from 'next-seo';
import { Provider } from 'react-redux';
import withReduxSaga from 'next-redux-saga';
import SEO from 'seo/next-seo.config';
import store from 'redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  createUrl = router => {
    const { pathname, asPath, query } = router;
    return {
      get query() {
        return query;
      },
      get pathname() {
        return pathname;
      },
      get asPath() {
        return asPath;
      },
      back: () => {
        router.back();
      },
      push: (url, as) => router.push(url, as),
      pushTo: (href, as) => {
        const pushRoute = as ? href : null;
        const pushUrl = as || href;

        return router.push(pushRoute, pushUrl);
      },
      replace: (url, as) => router.replace(url, as),
      replaceTo: (href, as) => {
        const replaceRoute = as ? href : null;
        const replaceUrl = as || href;

        return router.replace(replaceRoute, replaceUrl);
      },
    };
  };

  render() {
    const { Component, pageProps, router } = this.props;
    const url = this.createUrl(router);
    return (
      <Container style={{ height: '100vh' }}>
        <NextSeo config={SEO} />
        <Provider store={store}>
          <Component {...pageProps} url={url} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxSaga({ async: true })(MyApp);
