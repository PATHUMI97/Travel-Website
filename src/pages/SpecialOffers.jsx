import React, { useState, useEffect } from 'react';
import OffersCard from '../components/Offers/OffersCard';
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';


const packagesData = [
    {
        image: 'src/assets/images/tea-600-378x550.jpg',
        title: 'ECO TOUR PACKAGE',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/wild-600-378x550.jpg',
        title: 'WILDLIFE ADVENTURE TOURS',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/beach-600-378x550.jpg',
        title: 'BEACH TOURS',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/golf04-600-378x550.jpg',
        title: 'GOLF TOURS',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/sri-lanka-house-luxure-600-378x550.jpg',
        title: 'READY MADE PACKAGES',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/casino5-378x550.jpg',
        title: 'NIGHT OF LIGHT PACKAGES',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/Hills-600-378x550.jpg',
        title: 'HILL COUNTRY TOURS',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/nature564-378x550.jpg',
        title: 'GLIMPS OF SRI LANKA',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/dazzle-3-378x550.png',
        title: 'HONEYMOON TOURS',
        buttonText: 'BOOK NOW',
    },
    {
        image: 'src/assets/images/cultural-600-378x550.jpg',
        title: 'CULTURAL TOURS',
        buttonText: 'BOOK NOW',
    },
];

const SpecialOffers = () => {
    return (
        <>
            <div className="w-full bg-cover relative z-0 h-96 sm:h-[60vh] md:h-[80vh] lg:h-96"
            style={{ backgroundImage: `url(src/assets/slides/travel-composition-with-camera.jpg)` }}>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-50 z-10 hidden lg:flex">
                    <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-5xl text-black font-bold">
                        Special Offers
                    </h1>
                </div>


            </div>
            <div className='container mx-auto p-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packagesData.map((pkg, index) => (
                        <OffersCard
                            key={index}
                            image={pkg.image}
                            title={pkg.title}
                            buttonText={pkg.buttonText}
                        />

                    ))}
                </div>

            </div>

            <LogosSection />
            <Footer />
        </>
    );
};

export default SpecialOffers