// @flow

import * as React from 'react'
import Head from 'next/head'

import { constants } from '../__data__'
import { withTranslation } from '../i18n'
import { Layout, Link } from '../components'

import style from './404.module.css'

type Props = {
  t: Function,
}

const Custom404 = ({ t }: Props): React.Node => (
  <>
    <Head>
      <title>{t('error-404-status')}</title>
      {/* <BaseMetaTags title={t('error-404-status')} /> */}
    </Head>
    <Layout>
      <h1 className={style.title}>{t('error-404-status')}</h1>
      <Link route={constants.routes.base}>{t('error-404-link')}</Link>
    </Layout>
  </>
)

export default (withTranslation(['common', 'header', 'footer'])(
  Custom404,
): React.AbstractComponent<Props>)
