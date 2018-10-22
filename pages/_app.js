import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import makeStore from 'redux/store/configureStore';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  createUrl = router => {
    // This is to make sure we don't references the router object at call time
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
    const { Component, pageProps, router, store } = this.props;
    const url = this.createUrl(router);
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} url={url} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga({ async: true })(MyApp));
