import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
   <Head>
    <title>Facebook clone</title>
    <link rel='icon' href='/favicon.ico'/>
   </Head>
   <Header/>
   <main></main>
    </>
  )
}
