import { useStateContext } from '@/context/StateContext'
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Navigation = () => {
  
  const {name, nameSubmit} = useStateContext();
  const router = useRouter();

  useEffect(() => {
    if(name == "" || !nameSubmit) {
      router.push("/");
    }
  })
  
  return (
    <main className='min-h-screen min-w-screen bg-slate-300 h-full'>
      <div className='p-12 items-center flex justify-center h-1/5vh w-full bg-slate-500'><Link href={"/"} className='group'>
        <h2 className='text-4xl hidden group-hover:inline-flex'>Change name?</h2>
        <h2 className='text-4xl group-hover:hidden'>Welcome {name}</h2>
      </Link></div>
      <div className='h-4/5vh w-full flex md:flex-row flex-col'>
        <Link href="/results/gender" className='md:w-1/3 md:h-full h-1/3 w-full bg-red-300 flex justify-center items-center group '>
          <h1 className='text-6xl font-extrabold group-hover:animate-pulse group-hover:text-7xl'>Genderize.io</h1>
        </Link>
        <Link href={`/results/age`} className='md:w-1/3 md:h-full h-1/3 w-full bg-blue-300 flex justify-center items-center group '>
          <h1 className='text-6xl font-extrabold group-hover:animate-pulse group-hover:text-7xl '>Agify.io</h1>
        </Link>
        <Link href="/results/nationality" className='md:w-1/3 h-1/3 md:h-full bg-green-300 flex justify-center items-center group '>
          <h1 className='text-6xl font-extrabold group-hover:animate-pulse group-hover:text-7xl'>Nationalize.io</h1>
        </Link>
      </div>
    
    </main>
  )
}

export default Navigation