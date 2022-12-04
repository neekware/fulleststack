// import { Navbar } from '@avidtrader/shared-components';
// import { AppProps } from 'next/app';
// import Head from 'next/head';
// import './styles.css';

// function CustomApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <title>FullerStack!</title>
//       </Head>
//       <main className="app">
//         <Navbar />
//         <Component {...pageProps} />
//       </main>
//     </>
//   );
// }

// export default CustomApp;
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import './styles.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
