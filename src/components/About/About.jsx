"use client"

import React from 'react';
import myimage from "@/../public/bg.jpg"
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Image from 'next/image';
import DigitalClock from '../DigitalClock/DigitalClock';
import ShareButton from '../ShareButton/ShareButton';

const About = () => {
  return (
    <>
      <section className='flex gap-4  justify-between lg:items-center w-[80vw] flex-col lg:flex-row'>

      <div className='flex gap-8 flex-col lg:flex-row  '> 

        <div className=' flex '>
           <Image className='rounded-full w-48 h-48 mix-blend-plus-darker'  src={myimage} alt=""/>
        </div>
      
      <div className='flex flex-col mt-8'>
     <h2><TypingAnimation delay={0} className='text-6xl mb-2 text-amber-300'>Suman Patra</TypingAnimation></h2>
      <TypingAnimation delay={2} className='text-2xl mb-2 text-amber-300'>Web Developer</TypingAnimation>
      <TypingAnimation delay={4} className='text-2xl text-amber-300'>patra6319@gmail.com</TypingAnimation>
      <DigitalClock delay={6}/>
      </div>

      </div>
            
      <div className='flex lg:mr-8'>
        <ShareButton/>
      </div>   
               
               
            
      </section>
    </>
  )
}

export default About
