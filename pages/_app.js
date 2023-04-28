import React from 'react'

import {StateContext} from '@/context/StateContext'
import '@/styles/globals.css'

 function App({ Component, pageProps }) {

  return (
    <StateContext>
      <Component {...pageProps}/>
    </StateContext>
  )
}

export default App