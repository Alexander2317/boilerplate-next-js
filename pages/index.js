import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from 'components/Layout';

class Home extends Component {
  static propTypes = {
    count: PropTypes.number,
  };

  static defaultProps = {
    count: 0,
  };

  render() {
    const { count } = this.props;
    return <Layout>Test {count}</Layout>;
  }
}

export default connect(state => ({
  count: state.test.count,
  state,
}))(Home);
