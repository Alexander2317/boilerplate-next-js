// @flow

import * as React from 'react'
import { connect } from 'react-redux'

import { actions, selectors } from '../__data__'

type Props = {
  version: string,
  setVersion: Function,
}

const Home = ({ version, setVersion }: Props): React.Node => {
  return (
    <>
      <div>hello {version}</div>
      <button type="button" onClick={setVersion}>
        update version
      </button>
    </>
  )
}

Home.getInitialProps = async ({ store }) => {
  await store.dispatch(actions.test.startTest())
  return {}
}

const mapStateToProps = (state) => ({
  version: selectors.getTestVersion(state),
})

const mapDispatchToProps = { setVersion: actions.test.startTest }

export default (connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home): React.AbstractComponent<Props>)
