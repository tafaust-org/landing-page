import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// #7d979d

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BuildinX</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=optional"
          rel="stylesheet"
        />
      </Head>
      <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', color: '#7d979d', background: 'url("bg.jpg") no-repeat center/cover' }}>
        <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2em', borderRadius: '1.5em' }}>
          <Image src={'/logo.svg'} width={'200%'} height={'200%'} />
          <h1>
            Under construction...
          </h1>
        </section>
      </main>
    </>
  );
}

export default Home
