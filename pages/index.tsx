import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BuildinX</title>
        <meta name="title" content="BuildinX"/>
        <meta name="author" content="Thomas Hesse"/>
        <meta name="description" content="We build the next generation construction component tracking"/>
        <meta name="keywords" content="construction, component, tracking, saas, qr"/>
        <meta name="robots" content="index, follow, max-image-preview:none"/>
        <meta name="description" content="Building the next generation of construction component tracking."/>
        <meta httpEquiv="content-language" content="en"/>
        <meta httpEquiv="content-Type" content="text/html; utf-8" />
        <meta httpEquiv="Pragma" content="cache" />
        <meta name="revisit-after" content="7 days" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://buildinx.io/"/>
        <meta property="og:title" content="BuildinX"/>
        <meta property="og:description" content="Building the next generation of construction component tracking."/>
        <meta property="og:image" content=""/>
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://buildinx.io/"/>
        <meta property="twitter:title" content="BuildinX"/>
        <meta property="twitter:description"
              content="Building the next generation of construction component tracking."/>
        <meta property="twitter:image" content=""/>
        <link rel="shortcut icon" href="/favicon.png"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=optional"
          rel="stylesheet"
        />
      </Head>
      <main>
        <section className={'white-box drop-in-shadow'}>
          <Image src={'/logo.svg'} width={'200%'} height={'200%'} alt={'BuildinX'}/>
          <h1>
            Under construction...
          </h1>
        </section>
      </main>
      <footer>
        <span>&copy; 2022 – BuildinX</span>
      </footer>
    </>
  );
}

export default Home
