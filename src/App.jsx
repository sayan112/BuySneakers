import React from 'react'
import Hero from './Components/Hero'
import FlexContent from './Components/FlexContent';
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./Data/Data";
import Sales from './Components/Sales';
import Stories from './Components/utils/Stories';
 import Footer from './Components/Footer';
  import Navbar from './Components/Navbar';
const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
      <Navbar/>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifexists />
        <FlexContent endpoint={highlight} ifexists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerapi={footerAPI} />
      </main>
    </>
  );
}

export default App