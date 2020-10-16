// @flow

import * as React from 'react'

import { withTranslation } from '../i18n'

type Props = {
  statusCode?: any,
  t: Function,
}

const Error = ({ statusCode, t }: Props): React.Node => (
  <p>
    {statusCode
      ? t('error-with-status', { statusCode })
      : t('error-without-status')}
  </p>
)

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null
  if (res) {
    ;({ statusCode } = res)
  } else if (err) {
    ;({ statusCode } = err)
  }
  return {
    statusCode,
    namespacesRequired: ['common'],
  }
}

Error.defaultProps = {
  statusCode: null,
}

export default withTranslation('common')(Error)
