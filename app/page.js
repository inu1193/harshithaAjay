import Await from '@/components/Await/Await'
import Button from '@/components/Button/Button'
import Hero from '@/components/Hero/Hero'
import Muhurtham from '@/components/Muhurtham/Muhurtham'
import SaveTheDate from '@/components/Save The Date/SaveTheDate'
import Venue from '@/components/Venue/Venue'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* Assign IDs to components for smooth scrolling */}
      <section id="home">
        <Hero />
      </section>
      
      <section id="save-the-date">
        <SaveTheDate />
      </section>

      <section id="muhurtham">
        <Muhurtham />
      </section>

      <section id="reception">
        <Venue />
      </section>

      <section id="reception">
        <Await />
      </section>

      {/* You can add more components here */}
    </div>
  );
};

export default page;
