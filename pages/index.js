import Head from 'next/head'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'
import Feed from '@/components/Feed'
import { getSession } from 'next-auth/react'
import Login from '@/components/Login'
export default function Home({session}) {
  if(!session) return <Login/>
  return (
    <>
   <Head>
    <title>Facebook clone</title>
    <link rel='icon' href='/favicon.ico'/>
   </Head>
   <Header/>
  
   <main className="flex bg-gray-100">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />
        {/* Right Sidebar */}
        <RightSidebar />
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props: {session}
  }
}
