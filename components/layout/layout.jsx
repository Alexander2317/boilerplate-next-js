import Header from './header'
import Footer from './footer'
import style from './style.module.css'

const Layout = ({ children }) => (
  <section className={style.wrapper}>
    <main className={style.content}>
      <Header />
      {children}
    </main>
    <Footer />
  </section>
)

export default Layout
