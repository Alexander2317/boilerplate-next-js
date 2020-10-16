// @flow

import * as React from 'react'

import { withTranslation } from '../../../../i18n'

import style from './style.module.css'

type Props = {
  t: Function,
}

const Footer = ({ t }: Props): React.Node => (
  <footer className={style.footer}>{t('title')}</footer>
)

export default (withTranslation('footer')(
  Footer,
): React.AbstractComponent<Props>)
