import React from 'react'

const OffersCard = ({ image, title, buttonText }) => {
  return (
    <div className="bg-cyan-800 shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 ">
        <h2 className="text-center text-lg font-semibold text-white mb-4">{title}</h2>
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default OffersCard