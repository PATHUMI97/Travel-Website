import React from 'react'
import { FiMapPin } from 'react-icons/fi'

const TourCard = ({ imageSrc, altText, title }) => {
    return (
        <div className='w-full sm:w-2/3 md:w-3/4 lg:w-4/5 xl:w-5/6 p-2 xl:p-0'>
            <div className='rounded-lg shadow overflow-hidden transform transition-transform duration-300 hover:shadow-3xl hover:scale-100
            flex justify-center items-end'>
                <img
                    src={imageSrc}
                    alt={altText} />
                <div className="absolute  py-5 w-64 text-white flex ">

                    <div className="flex flex-row subpixel-antialiased text-2xl font-bold tracking-wide">
                        <FiMapPin className="mr-2" color="white" />
                        {altText}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourCard
