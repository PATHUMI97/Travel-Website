import React, { useState, useEffect } from 'react';

const Slideshow = () => {
    const imagesSlide = [
        'src/assets/slides/3d-sunset-landscape.jpg',
        'src/assets/slides/tourist-carrying-luggage.jpg',
        'src/assets/slides/view-breathtaking-beach-nature-landscape.jpg',
    ];
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % imagesSlide.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [imagesSlide.length]);
    return (
       
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 z-0"
                style={{ backgroundImage: `url(${imagesSlide[currentImage]})` }}
            >
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-opacity-50 z-10 hidden lg:flex">
                    <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-5xl text-black font-bold">
                        {/* Most Popular Destinations */}
                    </h1>
                </div>

            </div>
        
    )
}

export default Slideshow