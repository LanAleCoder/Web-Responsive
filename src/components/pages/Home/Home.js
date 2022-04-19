import React from 'react';
import HeroSection from '../../Hero/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo}/>
      <HeroSection {...homeObjThree}/>
    </>
  );
}

export default Home;