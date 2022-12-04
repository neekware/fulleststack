import Head from 'next/head'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import "./layout.module.scss"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Avitrader</title>
      </Head>
      <div className='flex flex-col'>
        <Navbar />
        <main className="content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
