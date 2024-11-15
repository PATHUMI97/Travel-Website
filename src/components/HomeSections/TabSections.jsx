import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

const TabSections = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('hotels');
    return (
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
    )
}

export default TabSections