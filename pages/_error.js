import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error404 from 'pages/Errors/Page404';
import Error500 from 'pages/Errors/Page500';
import s from 'pages/Errors/index.css';

export default class Error extends Component {
  static getInitialProps({ res, err }) {
    if (!res) {
      return { statusCode: err ? err.statusCode : null };
    }
    return { statusCode: res.statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <section className={s.container}>
        {statusCode ? <Error404 /> : <Error500 />}
      </section>
    );
  }
}

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
};
