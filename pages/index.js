import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NProgress from 'components/NProgress';
import { test } from 'redux/actions/test';

class Home extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(test());
  }
  render() {
    return (
      <Fragment>
        <NProgress />
        Test
      </Fragment>
    );
  }
}

export default connect(state => state)(Home);
