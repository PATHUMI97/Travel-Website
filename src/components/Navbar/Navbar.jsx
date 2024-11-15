import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSriLankaOpen, setIsSriLankaOpen] = useState(false); // Toggle for SRI LANKA dropdown
  const [isPackagesOpen, setIsPackagesOpen] = useState(false); // Toggle for PACKAGES dropdown

  return (
    <header className="relative z-50">
      {/* Logo */}
      <div className="absolute top-0 left-9">
        <motion.img
          initial={{ scale: 0.5 }}
          animate={{
            scale: 1,
            rotate: [-180, 180, -160, 160, -120, 120, -90, 90, -60, 60, -45, 45, -20, 20, 0]  // Swinging between -180° to 180°, gradually stopping
          }}
          transition={{
            duration: 3,  // Duration of the entire swing
            ease: "easeInOut"  // Smooth in and out swing motion
          }}
          src="https://diferanciatours.com/wp-content/uploads/2024/08/cropped-logo-1.png"
          alt="logo"
          className="h-24"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="absolute top-5 right-8 md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-4xl text-gray-800">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Full-Screen Overlay Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 text-4xl text-gray-800 font-bold">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">HOME</a>

          {/* SRI LANKA with Dropdown */}
          <div>
            <button
              onClick={() => setIsSriLankaOpen(!isSriLankaOpen)}
              className="hover:text-gray-500 flex items-center"
            >
              SRI LANKA +
            </button>
            {isSriLankaOpen && (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center space-y-4 text-2xl">
                <a href="/aboutsrilanka" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>ABOUT SRI LANKA</a>
                <a href="/whentovisitsrilanka" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>WHEN TO VISIT SRI LANKA</a>
                <a href="/festivalandevents" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>FESTIVALS & EVENTS</a>
                <a href="/foodanddrinks" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>FOOD & DRINK</a>
                <a href="/facts" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>IMPORTANT FACTS</a>
                <a href="/weather" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>WEATHER, CLIMATE & GEOGRAPHY</a>
              </motion.div>
            )}
          </div>

          {/* PACKAGES with Dropdown */}
          <div>
            <button
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
              className="hover:text-gray-500 flex items-center"
            >
              PACKAGES +
            </button>
            {isPackagesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center space-y-4 text-2xl">
                <a href="/ramayanayathra" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>Ramayana Yatra in Sri Lanka</a>
                <a href="/nightLife" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>Sri Lanka Night Life Package</a>
                <a href="/honeymoonpackages" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>Sri Lanka Honeymoon Package</a>
                <a href="/kandyperahera" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>Kandy Perahera Package</a>
                <a href="/heeloya" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>Heel Oya Village Trail</a>
                <a href="/valentinedpackages" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>Valentine Package</a>
                <a href="/leisurepackages" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>Leisure Package</a>
                <a href="/fivedayspackages" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>5 Days – Culture / Nature</a>
                <a href="/sevendayspackages" className="hover:text-gray-500" onClick={() => setIsMenuOpen(false)}>7 Days – Culture / Nature</a>

              </motion.div>
            )}
          </div>

          <a href="#destination" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">DESTINATIONS</a>
          <a href="#specialoffers" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">SPECIAL OFFERS</a>
          <a href="#aboutus" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">ABOUT US</a>
          <a href="#contactus" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">CONTACT US</a>
        </motion.div>
      )}

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="hidden md:flex absolute top-0 right-0 p-5 space-x-8">
        <ul className="flex space-x-8 text-lg text-gray-800">
          <li><a href="/" className="hover:text-gray-500">HOME</a></li>

          {/* Dropdown for "SRI LANKA" */}
          <li className="relative group">
            <a href="#srilanka" className="hover:text-gray-500 flex items-center">
              SRI LANKA
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <motion.ul
              className="absolute hidden group-hover:block bg-white text-xs shadow-lg w-48  z-50">
              <li><a href="/aboutsrilanka" className="block px-4 py-2 hover:bg-gray-100">ABOUT SRI LANKA</a></li>
              <li><a href="/whentovisitsrilanka" className="block px-4 py-2 hover:bg-gray-100">WHEN TO VISIT SRI LANKA</a></li>
              <li><a href="/festivalandevents" className="block px-4 py-2 hover:bg-gray-100">FESTIVALS & EVENTS</a></li>
              <li><a href="/foodanddrinks" className="block px-4 py-2 hover:bg-gray-100">FOOD & DRINK</a></li>
              <li><a href="/facts" className="block px-4 py-2 hover:bg-gray-100">IMPORTANT FACTS</a></li>
              <li><a href="/weather" className="block px-4 py-2 hover:bg-gray-100">WEATHER, CLIMATE & GEOGRAPHY</a></li>
            </motion.ul>
          </li>

          {/* Dropdown for "PACKAGES" */}
          <li className="relative group">
            <a href="#packages" className="hover:text-gray-500 flex items-center">
              PACKAGES
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white text-xs shadow-lg  w-48  z-50">
              <li><a href="/ramayanayathra" className="block px-4 py-2 hover:bg-gray-100">Ramayana Yatra in Sri Lanka</a></li>
              <li><a href="/nightLife" className="block px-4 py-2 hover:bg-gray-100">Sri Lanka Night Life Package</a></li>
              <li><a href="/honeymoonpackages" className="block px-4 py-2 hover:bg-gray-100">Sri Lanka Honeymoon Package</a></li>
              <li><a href="/kandyperahera" className="block px-4 py-2 hover:bg-gray-100">Kandy Perahera Package</a></li>
              <li><a href="/heeloya" className="block px-4 py-2 hover:bg-gray-100">Heel Oya Village Trail</a></li>
              <li><a href="/valentinedpackages" className="block px-4 py-2 hover:bg-gray-100">Valentine Package</a></li>
              <li><a href="/leisurepackages" className="block px-4 py-2 hover:bg-gray-100">Leisure Package</a></li>
              <li><a href="/fivedayspackages" className="block px-4 py-2 hover:bg-gray-100">5 Days – Culture / Nature</a></li>
              <li><a href="/sevendayspackages" className="block px-4 py-2 hover:bg-gray-100">7 Days – Culture / Nature</a></li>
            </ul>
          </li>

          <li><a href="/destination" className="hover:text-gray-500">DESTINATIONS</a></li>
          <li><a href="/specialoffers" className="hover:text-gray-500">SPECIAL OFFERS</a></li>
          <li><a href="/aboutus" className="hover:text-gray-500">ABOUT US</a></li>
          <li><a href="/contactus" className="hover:text-gray-500">CONTACT US</a></li>
        </ul>
      </motion.nav>
    </header>
  );
}

export default Navbar;
