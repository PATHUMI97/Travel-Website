import React from 'react'


const TourCard = ({ imageSrc, altText, title }) => {
    return (
        <div className='mt-7 w-full p-3'>
            <div className='shadow overflow-hidden transform transition-transform duration-300 hover:shadow-3xl hover:scale-100
            flex justify-center items-end'>
                <img
                    src={imageSrc}
                    alt={altText} />
                
            </div>
        </div>
    )
}

export default TourCard
