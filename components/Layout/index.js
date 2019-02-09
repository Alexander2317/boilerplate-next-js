import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'components/NProgress';
import Header from './header';
import Footer from './footer';
import s from './index.css';

const Layout = ({ children }) => (
  <Fragment>
    <NProgress />
    <section className={s.wrapper}>
      <Header />
      <main className={s.content}>{children}</main>
      <Footer />
    </section>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
