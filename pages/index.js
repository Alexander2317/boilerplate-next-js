import React, { Component } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import NProgress from 'components/NProgress';
import s from '../components/index.css';

class PostsIndex extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Posts Index</title>
        </Head>
        <NProgress />
        Post
        <div className={s.example}>sd</div>
      </div>
    );
  }
}

PostsIndex.propTypes = {};

export default PostsIndex;
