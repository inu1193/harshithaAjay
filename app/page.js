import Await from '@/components/Await/Await'
import Button from '@/components/Button/Button'
import Haldhi from '@/components/Haldi/Haldhi'
import Hero from '@/components/Hero/Hero'
import Muhurtham from '@/components/Muhurtham/Muhurtham'
import SaveTheDate from '@/components/Save The Date/SaveTheDate'
import Venue from '@/components/Venue/Venue'
import Image from 'next/image'
import React from 'react'
import flower1 from '../assets/floralRight.png'
import flower2 from '../assets/floralLeft.png'

const page = () => {
  return (
    <div>
      {/* Assign IDs to components for smooth scrolling */}
      <section id="home">
        <Hero />
      </section>

      <div className='flowerContainer'>
        <Image className='flower' src={flower1} alt='flower' priority />
      </div>
      
      <section id="haldhi">
        <Haldhi />
      </section>

      <div className='flowerContainer1'>
        <Image className='flower' src={flower2} alt='flower' priority />
      </div>

      <section id="save-the-date">
        <SaveTheDate />
      </section>

      <div className='flowerContainer'>
        <Image className='flower' src={flower1} alt='flower' priority />
      </div>

      <section id="muhurtham">
        <Muhurtham />
      </section>

      <div className='flowerContainer1'>
        <Image className='flower' src={flower2} alt='flower' priority />
      </div>

      <section id="reception">
        <Venue />
      </section>

      <div className='flowerContainer'>
        <Image className='flower' src={flower1} alt='flower' priority />
      </div>

      <section id="await">
        <Await />
      </section>

      <div className='flowerContainer1'>
        <Image className='flower' src={flower2} alt='flower' priority />
      </div>

      {/* You can add more components here */}
    </div>
  );
};

export default page;

// Working tree clean
