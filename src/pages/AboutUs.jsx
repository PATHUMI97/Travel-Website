import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import ProfileCard from '../components/ProfileCard';

const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-cover relative z-0 h-96 sm:h-[60vh] md:h-[80vh] lg:h-96"
        style={{ backgroundImage: `url(src/assets/slides/travel-composition-with-camera.jpg)` }}>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-50 z-10 hidden lg:flex">
          <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-5xl text-black font-bold">
            About Us
          </h1>
        </div>


      </div>

      <ProfileCard />

      <LogosSection />
      <Footer />
    </>
  )
}

export default AboutUs