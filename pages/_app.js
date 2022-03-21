import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'
import useSession from '../lib/session'

export default function MyApp({ Component, pageProps }) {
  const session = useSession();
  const newPageProps = {
    ...pageProps,
    session,
  };
  return (
    <div>
      <Head>
        <Header />
      </Head>
      <Component {...newPageProps} />
    </div>
  )
}

