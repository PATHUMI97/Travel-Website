import React from 'react';

const ExperienceCard = ({ imageSrc, title, description }) => {
  return (
    <div className=' shadow-lg max-w-96  p-3 bg-white'>

      <div className="overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full max-h-60 object-cover" />
      </div>
      <div className="py-4 px-4">
        <h2 className=" text-lg text-center font-semibold text-gray-800">{title}</h2>
        <p className="text-base text-center text-black mt-2">{description}</p>
      </div>

    </div>
  );
};

export default ExperienceCard;
