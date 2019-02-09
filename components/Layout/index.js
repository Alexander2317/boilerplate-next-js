import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'components/NProgress';
import s from './index.css';

const Layout = ({ children }) => (
  <Fragment>
    <NProgress />
    <section className={s.wrapper}>
      <main className={s.content}>
        <section className={s.flexContainer}>{children}</section>
      </main>
    </section>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
