import React, { useState, useEffect } from 'react';
import TourCardSlider from '../components/Cardslider/TourCardSlider';
import ExperiencesSection from '../components/Experiance/ExperiencesSection';
import FoodAndDiningSection from '../components/FoodAndDining/FoodAndDiningSection';
import ActivitySection from '../components/Activities/ActivitySection';
import GalleryCardSlider from '../components/Gallery/GalleryCardSlider';
import LogosSection from '../components/LogosSection';
import Footer from '../components/Footer/Footer';
import Slideshow from '../components/Slideshow/Slideshow';
import { motion } from 'framer-motion';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const [activeTab, setActiveTab] = useState('hotels');
  return (
    <>
      <div className="max-w-full relative z-0 h-96 sm:h-[60vh] md:h-[80vh] lg:h-96">
        {/* Background Image Div */}
        <Slideshow/>

        {/* Content Over the Background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="max-w-full overflow-hidden absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-50 z-10 hidden lg:flex">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-300 font-bold">
            DIFERANCIA TOURS
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 font-bold mt-4 lg:mt-6">
            JOURNEY BEYOND THE HAPPY
          </h2>
          <button className="bg-gray-50 py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-full mt-4 lg:mt-6 text-sm sm:text-base md:text-lg lg:text-sm font-bold text-slate-900 hover:bg-gray-300">
            EXPLORE MORE
          </button>
        </motion.div>
      </div>



      {/* second section */}

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="absolute shadow-lg max-w-full h-auto bg-gray-50 flex justify-center py-8 sm:py-16 rounded-3xl">
        <div className="flex justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 absolute bg-gray-200 w-11/12">

          {/* Hotels Tab */}
          <button
            className={`flex-1 py-2 sm:py-4 sm:px-2 md:px-2 text-center text-sm sm:text-base cursor-pointer  
    ${activeTab === 'hotels' ? 'bg-gray-700 text-white' : 'bg-transparent hover:bg-gray-600 hover:text-white text-black'}`}
            onClick={() => setActiveTab('hotels')}
          >
            HOTELS
          </button>

          {/* Transfers Tab */}
          <button
            className={`flex-1 py-2 sm:py-4 sm:px-2 md:px-2 text-center text-sm sm:text-base cursor-pointer 
    ${activeTab === 'transfers' ? 'bg-gray-700 text-white' : 'bg-transparent hover:bg-gray-600 hover:text-white text-black'}`}
            onClick={() => setActiveTab('transfers')}
          >
            TRANSFERS
          </button>

          {/* Packages Tab */}
          <button
            className={`flex-1 py-2 sm:py-4 sm:px-2 md:px-2 text-center text-sm sm:text-base cursor-pointer 
    ${activeTab === 'packages' ? 'bg-gray-700 text-white' : 'bg-transparent hover:bg-gray-600 hover:text-white text-black'}`}
            onClick={() => setActiveTab('packages')}
          >
            PACKAGES
          </button>

        </div>

        {/* tab content */}
        <div className='max-w-full bg-gray-100'>
          <div className="p-6 max-w-full bg-gray-100 mt-16">
            {activeTab === 'hotels' && (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4 overflow-x-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Select Preferred Hotel</label>
                    <select className="border rounded p-2">
                      <option>Select Hotel</option>
                      {/* Add hotel options here */}
                    </select>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Check In</label>
                    <input type="date" className="border rounded p-2" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Check Out</label>
                    <input type="date" className="border rounded p-2" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Pax. Count</label>
                    <select className="border rounded p-2">
                      <option>Person</option>
                      {/* Add person options */}
                    </select>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Nationality</label>
                    <input type="text" className="border rounded p-2" placeholder="Nationality" />
                  </div>
                </div>
                <button className="bg-yellow-500 text-white font-semibold rounded p-2 mt-6 hover:bg-yellow-600">
                  Request
                </button>
              </motion.div>
            )}

            {activeTab === 'transfers' && (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4 overflow-x-hidden">
                {/* Radio Buttons */}
                <div className="flex flex-col sm:flex-row justify-around">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="transferType" className="form-radio" />
                    <label className="font-semibold">Air Port Pickup</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="transferType" className="form-radio" />
                    <label className="font-semibold">Air Port Drop</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="transferType" className="form-radio" />
                    <label className="font-semibold">Local Transfers</label>
                  </div>
                </div>

                {/* Transfer Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <label className="font-semibold">Transfer Date</label>
                    <input type="date" className="border rounded p-2" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold">Pickup Time</label>
                    <input type="time" className="border rounded p-2" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold">From</label>
                    <input type="text" placeholder="From location" className="border rounded p-2" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-semibold">To</label>
                    <input type="text" placeholder="To location" className="border rounded p-2" />
                  </div>
                </div>

                {/* Car Type and People */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="flex flex-col col-span-2">
                    <label className="font-semibold">Car Type</label>
                    <select className="border rounded p-2">
                      <option>Select</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Van</option>
                    </select>
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="font-semibold">People</label>
                    <input type="number" placeholder="Number of people" className="border rounded p-2" />
                  </div>
                </div>

                {/* Inquiry Button */}
                <div className="flex justify-center mt-6">
                  <button className="bg-gray-500 text-white font-semibold rounded p-2 hover:bg-gray-600">
                    Inquire
                  </button>
                </div>
              </motion.div>

            )}

            {activeTab === 'packages' && (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4 overflow-x-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Select Preferred Hotel</label>
                    <select className="border rounded p-2">
                      <option>Select Hotel</option>
                      {/* Add hotel options here */}
                    </select>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Check In</label>
                    <input type="date" className="border rounded p-2" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Check Out</label>
                    <input type="date" className="border rounded p-2" />
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Pax. Count</label>
                    <select className="border rounded p-2">
                      <option>Person</option>
                      {/* Add person options */}
                    </select>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <label className="font-semibold">Nationality</label>
                    <input type="text" className="border rounded p-2" placeholder="Nationality" />
                  </div>
                </div>
                <button className="bg-yellow-500 text-white font-semibold rounded p-2 mt-6 hover:bg-yellow-600">
                  Request
                </button>
              </motion.div>
            )}

          </div>
          {/* welcome to  DIFERANCIA TOURS*/}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="h-auto relative bg-sky-800 py-10 px-5  lg:px-20 text-white flex justify-center items-center text-center">

            <div className='w-3/4 py-11'>
              <h1 className="text-xl lg:text-2xl mb-5">WELCOME TO DIFERANCIA TOURS !</h1>
              <p className="text-lg lg:text-sm font-semibold "
                style={{ lineHeight: '1.8' }}>
                Discover the extraordinary with <span className="font-bold">DIFERANCIA TOURS</span>. Immerse yourself in the heart of Sri Lanka with our curated travel experiences. From the ancient ruins of cultural cities to the pristine beaches and lush rainforests, we offer unforgettable journeys tailored to your desires. Let our expert guides unveil the hidden gems of this tropical paradise. Create lasting memories with <span className="font-bold">DIFERANCIA TOURS</span>.
              </p>
            </div>
          </motion.div>

          {/* WELCOME TO SRI LANKA */}

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='bg-gray-100 h-auto min-h-96 py-5 px-5 flex flex-col items-center justify-center'>

            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="container mx-auto px-4 py-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl mb-4">WELCOME TO SRI LANKA</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome to Sri Lanka, the Pearl of the Indian Ocean. Discover a captivating blend of ancient heritage, stunning landscapes, and warm hospitality.
                    From the golden beaches and lush rainforests to the vibrant cities and serene hill country, Sri Lanka offers an unforgettable adventure for every traveler.
                    Immerse yourself in rich cultures, savor exquisite cuisine, and encounter wildlife wonders. Let the rhythms of this tropical paradise enchant you.
                    Your journey begins here.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <iframe
                    className="max-w-full h-64 md:h-96"
                    src="https://www.youtube.com/embed/watch?time_continue=4&v=YX_u14psRCs&embeds_referring_euri=https%3A%2F%2Fdiferanciatours.com%2F&embeds_referring_origin=https%3A%2F%2Fdiferanciatours.com&source_ve_path=Mjg2NjY"
                    title="Sri Lanka Welcome Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="container mx-auto px-4 py-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl  mb-4">UNIQUE HISTORY OF SRI LANKA</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our history and culture and rich heritage is not something frozen in the relics of our past, but continues on to our present. The wild beauty of
                    our poetic landscapes, the warm hearts of our people; always smiling, willing and sharing, you will experience the wonder of the island with
                    every morning sunrise and every fiery sunset. Visit Sri Lanka, and experience the magic of the island that captivated travelers for thousands of years.
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <iframe
                    className="w-full h-64 md:h-96"
                    src="https://www.youtube.com/embed/watch?time_continue=4&v=YX_u14psRCs&embeds_referring_euri=https%3A%2F%2Fdiferanciatours.com%2F&embeds_referring_origin=https%3A%2F%2Fdiferanciatours.com&source_ve_path=Mjg2NjY"
                    title="Sri Lanka Welcome Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>

          </motion.div>
          <motion.section
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="tour-card-slider-section bg-gray-100">
            <TourCardSlider />
          </motion.section>



          {/* First Background Layer with Content */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative min-h-[130vh] max-w-full bg-cover bg-center bg-fixed bg-[url('/src/assets/slides/beach-glows-with-warm-amber-light-as-waves-gently-lap-sand.jpg')]">
            {/* Background overlay */}


            {/* Content inside the first layer */}
            <motion.section
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
              <ExperiencesSection />
            </motion.section>
          </motion.div>

          {/* Second Background Layer */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative min-h-[130vh] max-w-full bg-cover bg-center bg-fixed bg-[url('/src/assets/slides/glass-cooling-blue-drink-decorated-with-olive-umbrella.jpg')]">
            <motion.section
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=''>
              <FoodAndDiningSection />
            </motion.section>
          </motion.div>

          {/* Third Background Layer */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative min-h-[130vh] max-w-full bg-cover bg-center bg-fixed bg-[url('/src/assets/slides/dolphin-jumping.jpg')]">
            <motion.section
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=''>
              <ActivitySection />
            </motion.section>
          </motion.div>

          <section className="tour-card-slider-section bg-gray-100">
            <GalleryCardSlider />
            <LogosSection />
            <Footer />
          </section>
          <section>

          </section>
        </div>
      </motion.div>


      <div className='fixed bottom-8 left-8'>

        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          Contact Us
        </button>
        {isContactOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 mt-2">
            <p className="text-gray-700">You can reach us at contact@example.com or call us at +1234567890</p>
            <button
              className="mt-2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
              onClick={() => setIsContactOpen(false)}
            >
              Close
            </button>
          </div>
        )}

      </div>
    </>
  )
}

export default Home