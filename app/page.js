import Await from '@/components/Await/Await'
import Button from '@/components/Button/Button'
import Hero from '@/components/Hero/Hero'
import Muhurtham from '@/components/Muhurtham/Muhurtham'
import Venue from '@/components/Venue/Venue'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Muhurtham />
      <Venue/>
      <Await />

      {/* Rest everything goes here */}
      {/* Make everything as a seperate components as I did for Navbar and Footer and work on it and Then place it over here in a order */}
      {/* If there is a common css means write that in a global.css file */}
    </div>
  )
}

export default page
