import App from 'next/app'
import 'normalize.css'

import { appWithTranslation } from '../i18n'
import { wrapperStore } from '../__data__'
import '../public/static/css/app.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
})

export default wrapperStore.withRedux(appWithTranslation(MyApp))
