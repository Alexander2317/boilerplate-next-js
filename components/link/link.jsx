// @flow

import * as React from 'react'

import { Link } from '../../routes'

import style from './style.module.css'

type Props = {
  children: React.Node,
  route: string,
  params?: Object,
}

const CustomLink = ({ children, route, params }: Props): React.Node => (
  <span className={style.link}>
    <Link route={route} params={params}>
      {children}
    </Link>
  </span>
)

CustomLink.defaultProps = {
  params: null,
}

export default CustomLink
