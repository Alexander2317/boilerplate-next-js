// import App, { Container } from 'next/app';
// import NextSeo from 'next-seo';
// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import { fromJS } from 'immutable';
// import SEO from 'seo/next-seo.config';
// import makeStore from 'redux/store';

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};
//
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }
//
//     return { pageProps };
//   }
//
//   render() {
//     const { Component, pageProps, store } = this.props;
//     return (
//       <Container style={{ height: '100vh' }}>
//         <NextSeo config={SEO} />
//         <Provider store={store}>
//           <Component {...pageProps} />
//         </Provider>
//       </Container>
//     );
//   }
// }
//
// export default withRedux(makeStore, {
//   serializeState: state => state,
//   deserializeState: state => fromJS(state),
// })(MyApp);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
