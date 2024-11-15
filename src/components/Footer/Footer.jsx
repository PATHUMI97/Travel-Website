import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="relative overflow-y-hidden bg-black bg-cover bg-center bg-no-repeat py-16 px-8 text-white"
      style={{ backgroundImage: `url('src/assets/images/wallpaperflare.com_wallpaper.jpg')` }}>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Main Content */}
      <motion.div
        // initial={{ opacity: 0, y: 200 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 2 }}
        className="relative flex flex-col md:flex-row justify-between items-start">
        {/* Left Section (Address and Contact Info) */}
        <div className="mb-4 px-7 md:mb-0">
          <img src="src/assets/images/cropped-logo-1.png" alt="Diferancia Tours Logo" className="mb-5 w-28" />
          <p className="mb-4">No. 15/1/C,</p>
          <p className="mb-4"> New Digana Road, Kundasale,</p>
          <p className="mb-4"> Kandy, Sri Lanka</p>
          <p className="mb-4">Tel: +94 77 225 0223</p>
          <p>Email: support@diferanciatours.com</p>
        </div>


        {/* Middle Section (Links) */}
        <div className="mb-6 md:mb-0 flex flex-wrap space-x-16">
          <div>

            <ul>
              <li className="mb-4"><a href="#" className="mb-4">Home</a></li>
              <li className="mb-4"><a href="#" className="mb-4">Sri Lanka</a></li>
              <li className="mb-4"><a href="#" className="mb-4">Custom Tours</a></li>
              <li className="mb-4"><a href="#" className="mb-4">Packages</a></li>
            </ul>
          </div>
          <div>

            <ul>
              <li className="mb-4"><a href="#" >Destinations</a></li>
              <li className="mb-4"><a href="#" >Special Offers</a></li>
              <li className="mb-4"><a href="#" >About Us</a></li>
              <li className="mb-4"><a href="#" >Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section (Subscription Form) */}
        <div className="mb-6 md:mb-0 w-auto px-6">
          <div className="flex flex-col md:flex-row p-5 overflow-hidden bg-white rounded-lg">
            <motion.input
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 4 }}
              type="text"
              placeholder="Enter Your Email Address"
              className="w-full bg-white text-black focus:outline-none mb-2 md:mb-0 md:mr-2"
            />
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 6 }}
              className="bg-yellow-500 text-white font-bold h-12 w-full md:text-sm md:w-44 rounded-lg hover:bg-teal-500 transition-shadow duration-300">
              Subscribe
            </motion.button>
          </div>
        </div>

      </motion.div>

      {/* Footer Bottom */}
      <div className="relative mt-8 border-t border-gray-500 pt-4 text-center text-sm">
        © 2024 DIFERANCIA TOURS | All Rights Reserved | Designed & Developed by Silicon Radon Networks
      </div>
    </motion.footer>

  );
};

export default Footer;
