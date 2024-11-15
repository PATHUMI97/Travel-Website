// src/components/ProfileCard.js
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProfileCard = () => {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:max-w-full">
          {/* Left Side - Image */}
          <div className="relative flex items-center justify-center h-screen">
            {/* Rounded Square */}
            <motion.div
              initial={{ opacity: 0, x: 200 }} // Start from above
              animate={{ opacity: 1, x: 0 }} // Move to default position
              transition={{ duration: 2 }}
            >
              <div
                className="relative w-80 h-64 sm:w-96 sm:h-72 md:w-[32rem] md:h-[20rem] lg:w-[36rem] lg:h-[24rem] bg-blue-500 rounded-xl transform -rotate-12 overflow-hidden"
              >
                {/* Content for the Rounded Rectangle */}
              </div>
            </motion.div>


            {/* Overlay Image */}
            <motion.div
              initial={{ opacity: 0, y: 200 }} // Start from above
              whileInView={{ opacity: 1, y: 0 }} // Move to default position
              transition={{ duration: 1 }}
              className="absolute object-cover max-w-xs max-h-xs sm:max-w-sm sm:max-h-sm md:max-w-md md:max-h-md lg:max-w-lg lg:max-h-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <img
                src="https://diferanciatours.com/wp-content/uploads/2024/07/386704913_813440714117472_1797083696760469308_n.jpg" // Replace with your image URL
                alt="Profile"
                className="absolute object-cover max-w-xs max-h-xs sm:max-w-sm sm:max-h-sm md:max-w-md md:max-h-md lg:max-w-lg lg:max-h-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </motion.div>

          </div>

          {/* Right Side - Content */}
          <div className="lg:ml-20 px-4 text-center lg:text-left lg:w-1/2 flex justify-center items-start flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 200 }} // Start from above
              whileInView={{ opacity: 1, y: 0 }} // Move to default position
              transition={{ duration: 1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Samith Edirisinghe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 200 }} // Start from above
              whileInView={{ opacity: 1, y: 0 }} // Move to default position
              transition={{ duration: 1 }}
              className="italic text-gray-500 text-lg sm:text-xl md:text-2xl mb-6">
              "You were born for greatness; <br /> you were created to be a champion in life."
            </motion.p>

            {/* Icons and Labels */}
            <motion.div
              initial={{ opacity: 0, y: 200 }} // Start from above
              whileInView={{ opacity: 1, y: 0 }} // Move to default position
              transition={{ duration: 1 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <div className="flex items-center space-x-2">
                <FaCheck className="text-yellow-500 w-6 h-6" />
                <span className="text-gray-600 font-bold text-lg sm:text-xl">Safe Travel</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheck className="text-yellow-500 w-6 h-6" />
                <span className="text-gray-600 font-bold text-lg sm:text-xl">Fine Dining</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 200 }} // Start from above
              whileInView={{ opacity: 1, y: 0 }} // Move to default position
              transition={{ duration: 1 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <FaCheck className="text-yellow-500 w-6 h-6" />
                <span className="text-gray-600 font-bold text-lg sm:text-xl">Adventure</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheck className="text-yellow-500 w-6 h-6" />
                <span className="text-gray-600 font-bold text-lg sm:text-xl">Accommodation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 200 }} // Start from above
        whileInView={{ opacity: 1, y: 0 }} // Move to default position
        transition={{ duration: 1 }}
        className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Mission Section */}
          <div className="mission w-full lg:w-1/2 p-4">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-3xl text-gray-400 mt-5">
              Our mission is to provide unparalleled quality service to our guests. We strive to be Sri Lanka's most trusted, innovative, and sustainable Destination Management Company, transforming every journey into a seamless and enriching adventure.
            </p>
          </div>

          {/* Vision Section */}
          <div className="vision w-full lg:w-1/2 p-4 mt-4 lg:mt-0">
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-3xl text-gray-400 mt-5">
              We envision a world where every traveler lives their dreams through unforgettable experiences. Our goal is to craft tours so memorable that they leave an indelible mark on our guests' hearts, inspiring stories and cherished memories for a lifetime.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProfileCard;
