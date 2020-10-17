// @flow

import * as React from 'react'
import Head from 'next/head'

import { withTranslation } from '../i18n'
import { Layout } from '../components'

import style from './_error.module.css'

type Props = {
  statusCode?: any,
  t: Function,
}

const Error = ({ statusCode, t }: Props): React.Node => {
  const message = statusCode
    ? t('error-with-status', { statusCode })
    : t('error-without-status')
  return (
    <>
      <Head>
        <title>{message}</title>
        {/* <BaseMetaTags title={message} /> */}
      </Head>
      <Layout>
        <p style={style.title}>{message}</p>
      </Layout>
    </>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ;({ statusCode } = res)
  } else if (err) {
    ;({ statusCode } = err)
  }
  return {
    statusCode,
    namespacesRequired: ['common', 'header', 'footer'],
  }
}

Error.defaultProps = {
  statusCode: null,
}

export default (withTranslation('common')(
  Error,
): React.AbstractComponent<Props>)
