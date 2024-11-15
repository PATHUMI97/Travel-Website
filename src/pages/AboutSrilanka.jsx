import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const AboutSrilanka = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
    
      <section className="flex flex-col md:flex-row justify-center items-center px-4 py-10 md:py-20">

        {/* Left Side: Description */}
        <div className="w-full md:w-1/2 px-4">
          <p className="text-gray-700 text-center font-semibold mb-6">
            Sri Lanka is a small island almost like a tiny tear drop that lies in the Indian Ocean which is sometimes known by other names such as “The Lost Paradise”, “The Land Of Serendipity”, “The Resplendent Land ” and ” The Pearl Of The Indian Ocean” among others by non-natives. Sri Lanka lies to the southwest of the Bay of Bengal and to the southeast of the Arabian Sea. The island seperates itself from the Indian subcontinent by the Gulf of Mannar and the Palk Strait (named after James Palk ). According to the Indian epic poem Ramayana, written thousands of years ago in Sanskrit and an important Hindu text, states how Rama, with the help of an army of vanaras, built a bridge of stones across the sea to Lanka to rescue his wife Sita from the Asura king Ravana.

            <br /><br />The name Adam’s Bridge is a later play than Rama’s bridge and derives from the story that South India or Sri Lanka was the site of the biblical earthly paradise (and hence the lost paradise), and that Adam’s Bridge was created when Adam was expelled from paradise. However the Rama’s/Adam’s bridge is now only a chain of limestone shoals above the sea level. According to colonial British reports, this is a natural causeway which was formerly complete, but was breached by a violent storm in 1480. The width of the Palk Strait is small enough for the coast of Sri Lanka to be visible from the furthest point near the Indian town of Rameswaram but is not big enough for large ships to pass through so these ships have to make a detour around Sri Lanka to reach the East Asian countries. The island consists mostly of flat-to-rolling coastal plains, with mountains rising only in the south- central part.
          </p>

        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 md:w-1/4 mt-6 ml-10 md:mt-0">
          <img
            src="https://diferanciatours.com/wp-content/uploads/2024/08/pexels-photo-13667937.jpeg"
            alt="Nature landscape"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

      </section>

      <section className="flex flex-col items-center justify-center px-4 py-10 md:py-20">

        {/* Paragraph */}
        <div className="w-full md:w-3/4  mb-8 text-center">
          <p className="text-gray-700 text-base md:text-xl italic">
            “To me the beauty of Ceylon lies not so much in its blue seas and golden beaches, its jungles and its mountain peaks, as in its ancient atmosphere. There is no nation, from Egypt of the Pharaohs to modern Britian, in whose literature this island has not at some time been mentioned by one or other of its many names — Lanka, Serendib, Taprobane, Cellao, Zellan, to recall a few. History lies buried in its sands, and ghosts of romance lurk among its bastioned rocks, for Lanka is very, very old.”

            -D. J. G. Hennessy, GREEN AISLES, 1949 – About Sri Lanka
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-3/4 ">
          <img
            src="https://diferanciatours.com/wp-content/uploads/2024/07/R-2-1-1024x720.jpeg"
            alt="Travel landscape"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

      </section>
      <LogosSection />
      <Footer />
    </>
  )
}

export default AboutSrilanka