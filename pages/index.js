import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import NProgress from 'components/NProgress';
import { test } from 'redux/actions/test';

class Home extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(test());
  }
  render() {
    return (
      <div>
        <Head>
          <title>Home Index</title>
        </Head>
        <NProgress />
        Test
      </div>
    );
  }
}

export default connect(state => state)(Home);
