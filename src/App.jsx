import React from 'react'
import Hero from './Components/Hero'
import FlexContent from './Components/FlexContent';
import { heroapi, popularsales, toprateslaes , highlight,sneaker, story } from './Data/Data'
import Sales from './Components/Sales';
import Stories from './Components/utils/Stories';
const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifexists />
        <FlexContent endpoint={highlight} ifexists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story}/>
      </main>
    </>
  );
}

export default App