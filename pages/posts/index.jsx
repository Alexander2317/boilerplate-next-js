// @flow

import * as React from 'react'
import Head from 'next/head'

import { constants } from '../../__data__'
import { withTranslation } from '../../i18n'
import { Layout, Link } from '../../components'

import PostId from './[post-id]'
import style from './style.module.css'

type Props = {
  t: Function,
  id?: string,
}

const ID_POST = 10

const Posts = ({ t, id }: Props): React.Node => {
  const title = id ? t('post:meta-title', { id }) : t('posts:meta-title')
  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <BaseMetaTags title={title} /> */}
      </Head>
      <Layout>
        {id ? (
          <PostId t={t} id={id} />
        ) : (
          <>
            <p className={style.title}>{t('posts:title')}</p>
            <br />
            <Link route={constants.routes.post} params={{ id: ID_POST }}>
              {t('posts:link', { id: ID_POST })}
            </Link>
          </>
        )}
      </Layout>
    </>
  )
}

Posts.defaultProps = {
  id: '',
}

Posts.getInitialProps = async ({ query }) => ({
  id: query.id,
  namespacesRequired: ['posts', 'post', 'header', 'footer'],
})

export default (withTranslation(['posts', 'post'])(
  Posts,
): React.AbstractComponent<Props>)
