import Head from 'next/head'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import RightSidebar from '@/components/RightSidebar'
import Feed from '@/components/Feed'
export default function Home() {
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
