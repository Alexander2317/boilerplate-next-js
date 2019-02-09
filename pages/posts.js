import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';

export default class extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  static getInitialProps({ query }) {
    const { id } = query;
    return { id };
  }

  render() {
    const { id } = this.props;
    return <Layout>Post id: {id}</Layout>;
  }
}
