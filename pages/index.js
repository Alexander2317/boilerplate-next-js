import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from 'components/Layout';

class Home extends Component {
  static propTypes = {
    version: PropTypes.number,
  };

  static defaultProps = {
    version: 0,
  };

  render() {
    const { version } = this.props;
    return <Layout>Boilerplate {version}</Layout>;
  }
}

export default connect(state => ({
  version: state.test.version,
}))(Home);
