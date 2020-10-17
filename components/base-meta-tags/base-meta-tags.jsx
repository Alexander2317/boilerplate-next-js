// @flow

import * as React from 'react'

type Props = {
  title: string,
  children?: React.Node,
}

// wait for it to merge https://github.com/vercel/next.js/pull/17770

const BaseMetaTags = ({ title, children }: Props): React.Node => (
  <>
    <title>{title}</title>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/favicon/safari-pinned-tab.svg"
      color="#121212"
    />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#121212" />
    <meta
      name="msapplication-config"
      content="/static/favicon/browserconfig.xml"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="viewport"
      content="initial-scale=1, minimum-scale=1, width=device-width"
    />
    <meta charSet="utf-8" />
    {children}
  </>
)

BaseMetaTags.defaultProps = {
  children: null,
}

export default BaseMetaTags
