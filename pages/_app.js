import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <Header />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
