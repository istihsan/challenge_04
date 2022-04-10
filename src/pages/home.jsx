import React from 'react'
import Navbar from './components/Navbar';
import DropdownBox from './components/DropdownBox'
import BackgroundHero from './components/BackgroundHero'
import FooterMain from './components/Footer'

function Home() {
    return (
      <>
      <Navbar />
      <BackgroundHero />
      <DropdownBox />
      <FooterMain />
      </>
    );
  }
  
  export default Home;