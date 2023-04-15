import React from 'react'
import Hero from './Components/Hero'
import { heroapi, popularsales, toprateslaes } from './Data/Data'
import Sales from './Components/Sales';
const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  );
}

export default App