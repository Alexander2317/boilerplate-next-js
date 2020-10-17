// @flow

import * as React from 'react'

import { constants } from '../../__data__'
import { Link } from '../../components'

import style from './style.module.css'

type Props = {
  t: Function,
  id: string,
}

const PostsId = ({ t, id }: Props): React.Node => (
  <>
    <p className={style.title}>{t('post:title', { id })}</p>
    <br />
    <Link route={constants.routes.base}>{t('link')}</Link>
  </>
)

export default PostsId
