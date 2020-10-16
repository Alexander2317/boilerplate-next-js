// @flow

import * as React from 'react'

import { Header, Footer } from './components'
import style from './style.module.css'

type Props = {
  children: React.Node,
}

const Layout = ({ children }: Props): React.Node => (
  <section className={style.wrapper}>
    <main className={style.content}>
      <Header />
      {children}
    </main>
    <Footer />
  </section>
)

export default Layout
