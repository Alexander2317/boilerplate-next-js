// @flow

import * as React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'

import { withTranslation } from '../i18n'
import { actions, selectors, constants } from '../__data__'
import { Layout, Link } from '../components'
import smile from '../public/static/img/smile.png'

import style from './index.module.css'

type Props = {
  t: Function,
  count: string,
  startTestAction: Function,
}

const Home = ({ t, count, startTestAction }: Props): React.Node => (
  <>
    <Head>
      <title>{t('home:meta-title')}</title>
      {/* <BaseMetaTags title={t('home:meta-title')} /> */}
    </Head>
    <Layout>
      <div className={style.title}>
        {t('home:title')} {count}
      </div>
      <img src={smile} alt={t('home:img-alt')} />
      <br />
      <button className={style.button} type="button" onClick={startTestAction}>
        {t('home:button')}
      </button>
      <br /> <br />
      <Link route={`${constants.routes.base}${constants.routes.post}`}>
        {t('home:link')}
      </Link>
    </Layout>
  </>
)

Home.getInitialProps = async ({ store }) => {
  await store.dispatch(actions.test.startTest())
  return {
    namespacesRequired: ['home', 'header', 'footer'],
  }
}

const mapStateToProps = (state) => ({
  count: selectors.getTestCount(state),
})

const mapDispatchToProps = { startTestAction: actions.test.startTest }

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation('home')(Home)): React.AbstractComponent<Props>)
