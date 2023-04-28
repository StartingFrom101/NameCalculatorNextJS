
import {useStateContext} from '@/context/StateContext'
import { useRouter } from 'next/router';
import { useRef } from 'react';


export default function Home() {
  // Router to Redirect after form submission
  const router = useRouter();

  const {setName, setNameSubmit} = useStateContext();
  const refFormName = useRef();

  const formNameChange = () => {
    const newName = refFormName.current.value;
    setName(newName)
  }

  const formNameSubmit = (e) => {
    e.preventDefault();
    
    setName(e.target.name.value)
    setNameSubmit(true);
    router.push('/navigation');
  }


  return (
    <main className={`min-h-screen flex flex-col items-center justify-center bg-slate-200`}>
      <div className='animate-pulse'>
      <h1 className="text-center text-sky-400 lg:text-8xl sm:text-6xl text-4xl animate-bounce ">What is your name?</h1>
      </div>
      <form onSubmit={formNameSubmit} className='my-12 container'> 
        <input ref={refFormName} type='text' name='name' onChange={formNameChange}
        className='w-full h-32 text-center text-cyan-700 text-4xl focus:outline-none'
        />
        <div className='text-center'>
        <button className='rounded-full w-1/2 bg-gray-500 p-4 my-4'>Enter</button>
        </div>
      </form>      
    </main>
  )
}
