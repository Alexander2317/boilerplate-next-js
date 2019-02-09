import React, { Fragment } from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import { Router } from 'routes';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <Fragment>
    <Head>
      <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
    </Head>
  </Fragment>
);
