import React from 'react'

import heroImg from '../assets/wave.svg';
import Hero from '../components/Hero';

const Home = () => {
  return (
   <div className='relative min-h-[calc(100vh-150px)] flex flex-col justify-center items-center'>
    <Hero />
    <img className='absolute bottom-0 w-full' src={heroImg} alt="" />
   </div>
  )
}

export default Home
