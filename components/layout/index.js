import Header from './header'
import Footer from './footer'
import style from './style.module.css'

const Layout = ({ children }) => (
  <>
    <section className={style.wrapper}>
      <Header />
      <main className={style.content}>{children}</main>
      <Footer />
    </section>
  </>
)

export default Layout
