import React from 'react'

const DestinationCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-3xl rounded-lg p-3 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col">
        <h2 className="text-lg text-center font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-center mt-2">{description}</p>
        <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600">
          Read More
        </button>
      </div>
    </div>
  )
}

export default DestinationCard