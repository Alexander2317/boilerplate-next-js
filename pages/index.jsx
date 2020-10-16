// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { NextSeo } from 'next-seo'

import { withTranslation } from '../i18n'
import { actions, selectors } from '../__data__'
import { Layout } from '../components'
import { home } from '../seo/pages'
import smile from '../public/static/img/smile.jpg'

type Props = {
  t: Function,
  version: string,
  setVersion: Function,
}

const Home = ({ t, version, setVersion }: Props): React.Node => (
  <>
    <NextSeo {...home} />
    <Layout>
      <div>
        {t('hello')} {version}
      </div>
      <img src={smile} alt={t('img.alt')} />
      <br />
      <button type="button" onClick={setVersion}>
        {t('button')}
      </button>
    </Layout>
  </>
)

Home.getInitialProps = async ({ store }) => {
  await store.dispatch(actions.test.startTest())
  return {
    namespacesRequired: ['common', 'home'],
  }
}

const mapStateToProps = (state) => ({
  version: selectors.getTestVersion(state),
})

const mapDispatchToProps = { setVersion: actions.test.startTest }

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation(['common', 'home'])(Home)): React.AbstractComponent<Props>)
