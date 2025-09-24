"use client"

import React from 'react';
import myimage from "@/../public/bg.jpg"
import Image from 'next/image';
import DigitalClock from '../DigitalClock/DigitalClock';
import ShareButton from '../ShareButton/ShareButton';

const About = () => {
  return (
    <>
      <section className='flex gap-4 my-10 mx-auto   md:items-center w-[80vw] flex-col md:flex-row flex-wrap'>

      <div className='flex   gap-8 flex-col lg:flex-row w-full flex-1'> 

        <div className=' flex mr-20 md:mr-0'>
           <Image className='rounded-full w-48 h-48 '  src={myimage} alt=""/>
        </div>
      
      <div className='flex flex-col mt-8'>
     <h2 className='text-amber-50 text-xl'>Suman Patra</h2>
      <h3 className='text-amber-50 text-xl'>Web Developer</h3>
      <h4 className='text-amber-50 text-xl'>patra6319@gmail.com</h4>
      <DigitalClock delay={1}/>
      </div>

      </div>
            
      <div className='flex justify-end  md:justify-between mx-10 md:mx-0'>
        <ShareButton/>
      </div>   
               
               
            
      </section>
    </>
  )
}

export default About
