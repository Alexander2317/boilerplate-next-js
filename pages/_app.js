import App from 'next/app'
import 'normalize.css'

import { appWithTranslation } from '../i18n'
import { wrapperStore } from '../__data__'
import '../public/static/css/app.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default wrapperStore.withRedux(appWithTranslation(MyApp))
