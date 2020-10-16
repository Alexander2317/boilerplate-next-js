// @flow

import * as React from 'react'

import { withTranslation } from '../i18n'

type Props = {
  t: Function,
}

const Custom404 = ({ t }: Props): React.Node => <h1>{t('error-404-status')}</h1>

export default withTranslation('common')(Custom404)
