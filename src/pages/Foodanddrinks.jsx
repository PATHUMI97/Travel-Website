import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';
import { motion } from "framer-motion"
import { scroll } from "framer-motion"


const Foodanddrinks = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <h1 className='text-6xl text-bold text-center'>DELICIOUS FOODS AND BEVERAGES OF SRI LANKA</h1>
      <section className="flex flex-col md:flex-row justify-center items-center px-4 py-10 md:py-20">

        {/* Left Side: Description */}
        <div className="w-full md:w-1/2 px-4">
          <p className="text-gray-700  font-semibold mb-6">
            Sri Lankan cuisine is very unique and exotic. The culinary delicacies of Sri Lanka is very aromatic and healthy. Most of the time the recipes have some influence from the colonists and Indian and Arab traders from back in time.
          </p><br />

          <p className="text-gray-700 r font-bold mb-6">
            The best thing about Sri Lankan food is that the same dish is made in different ways, especially when it comes to different regions in the country, people make a lot of variations to the way a particular dish is made but at the end of the day it always turns out to be mouth-watering.
          </p>

        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 md:w-1/4 mt-6 ml-10 md:mt-0">
          <motion.img animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src="https://diferanciatours.com/wp-content/uploads/2024/07/kurudu.png"
            alt="Nature landscape"
            className="w-full h-auto rounded-lg "
          />
        </div>

      </section>

      <div className="container mx-auto py-8 px-4">
        {/* Paragraph Section */}
        <div className=" mb-8">
          <h2 className="text-4xl text-center font-bold mb-4">MAIN DISHES</h2>
          <h2 className="text-2xl text-teal-600 font-bold mb-4">Rice & Curry</h2>
          <p className="text-black">
            The cuisine mainly consists of (steamed) rice and curry. Curry usually takes various forms and thereby brings versatility to dishes. Curries can not only be made using meat or fish but with vegetables and fruits where the dish becomes a delicacy. <br />
            <br />
            Spices and coconut milk are always generally used to make the Sri Lankan cuisine. Sri Lankan food is generally considered to be more spicier than Indian food because of various types of chilli used. As a matter of fact Sri Lankan cuisine is considered to be among the hottest and spiciest cuisine in the world. However, tourist hotels prepare most Sri Lankan foods to favour the foreign palate since most people aren’t used to very spicy food.
          </p>
        </div>

        {/* Image Cards Section */}
        <motion.div
          initial={{ x: 1000 }}
          whileInView={{ x: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/spice4.jpg" alt="Image 1" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/spice3.jpg" alt="Image 2" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/spice2.jpg" alt="Image 3" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/spice1.jpg" alt="Image 4" className="w-full h-60 object-cover" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {/* Paragraph Section */}
        <div className=" mb-8">
          <h2 className="text-4xl text-center font-bold mb-4">STREET FOOD</h2>
          <h2 className="text-2xl text-teal-600 font-bold mb-4">Hoppers</h2>
          <p className="text-black">
            Hoppers are also very popular. A batter of rice flour and coconut milk is cooked in a small wok into a bowl shape. The base is thicker and is like a crumpet, while the thin ‘walls’ are crispy. Hoppers are often served with a sambal and what wikipedia tells us is lunu miris. These are insanely good. An egg hopper is a regular hopper with a googie cooked into the bottom.
          </p>
        </div>

        {/* Image Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/aaa.jpg" alt="Image 1" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/aaaaaaaaa.jpg" alt="Image 2" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/aaaaa.jpg" alt="Image 3" className="w-full h-60 object-cover" />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="https://diferanciatours.com/wp-content/uploads/2024/07/aaaa.jpg" alt="Image 4" className="w-full h-60 object-cover" />
          </div>
        </div>
      </div>

      <LogosSection />
      <Footer />
    </>
  )
}

export default Foodanddrinks