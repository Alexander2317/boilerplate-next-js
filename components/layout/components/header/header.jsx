// @flow

import * as React from 'react'

import { withTranslation } from '../../../../i18n'

import style from './style.module.css'

type Props = {
  t: Function,
}

const Header = ({ t }: Props): React.Node => (
  <header className={style.header}>{t('title')}</header>
)

export default (withTranslation('header')(
  Header,
): React.AbstractComponent<Props>)
