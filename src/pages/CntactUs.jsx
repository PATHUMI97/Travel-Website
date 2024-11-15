import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';

const CntactUs = () => {
  return (
    <>
      <div className="w-full bg-cover relative z-0 h-96 sm:h-[60vh] md:h-[80vh] lg:h-96"
        style={{ backgroundImage: `url(src/assets/slides/travel-composition-with-camera.jpg)` }}>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-50 z-10 hidden lg:flex">
          <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-5xl text-black font-bold">
            Contact Us
          </h1>
        </div>


      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8 p-8 bg-gray-100">
      {/* Contact Form Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-teal-700 mb-6">Get In Touch</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 bg-white border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="p-3 bg-white border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Website"
            className="p-3 bg-white border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            placeholder="Message"
            className="p-3 bg-white border rounded-md h-32 resize-none outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2 h-96">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251987.54784139332!2d80.61060724202882!3d7.290571521073974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367d0a165bfc3%3A0xe97a2e5ad5db83d!2sKandy!5e0!3m2!1sen!2slk!4v1600000000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border rounded-md"
        ></iframe>
      </div>
    </div>

      <LogosSection />
      <Footer />
    </>
  )
}

export default CntactUs