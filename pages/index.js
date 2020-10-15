// @flow

import * as React from 'react'
import { connect } from 'react-redux'

import { withTranslation } from '../i18n'
import { actions, selectors } from '../__data__'
import style from './index.module.css'

type Props = {
  t: Function,
  version: string,
  setVersion: Function,
}

const Home = ({ t, version, setVersion }: Props): React.Node => {
  return (
    <div className={style.container}>
      <div>
        {t('hello')} {version}
      </div>
      <button type="button" onClick={setVersion}>
        update version
      </button>
    </div>
  )
}

Home.getInitialProps = async ({ store }) => {
  await store.dispatch(actions.test.startTest())
  return {
    namespacesRequired: ['common'],
  }
}

const mapStateToProps = (state) => ({
  version: selectors.getTestVersion(state),
})

const mapDispatchToProps = { setVersion: actions.test.startTest }

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTranslation('common')(Home)): React.AbstractComponent<Props>)
