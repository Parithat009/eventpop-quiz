import type { NextPage } from 'next'
import Head from 'next/head'
import HomeViewPage from '../route/home/HomeViewPage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>COVID Timeline</title>
        <meta name="description" content="COVID Timeline App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeViewPage />
    </div>
  )
}

export default Home
