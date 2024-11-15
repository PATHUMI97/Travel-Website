import React from 'react';
import ExperienceCard from './ExperienceCard';

const experiencesData = [
  {
    imageSrc: 'src/assets/images/slbeach-300x200-1.jpeg',
    title: 'STAY IN THE TEA & BEACH SRI LANKA',
    description: 'Sri Lanka provides the chance to immerse oneself in the rich cultural heritage of the country, with easy access to ancient temples, ruins, and other historical sites, while enjoying luxurious accommodations in a stunning setting., surrounded by lush gardens that provide a secluded oasis.',
  },
  {
    imageSrc: 'src/assets/images/df-300x200-1.jpg',
    title: 'SRI LANKAN NATIONAL PARKS',
    description: 'A leopard basking in the fork of a tree. A family of elephants lumbering out of the tropical undergrowth. A solitary jackal gazing across an open plain in the early morning sun. These are just some of the sights awaiting in Sri Lanka’s national parks – some of the wildest, most beautiful places on earth.',
  },
  {
    imageSrc: 'src/assets/images/TA_20170424132727642_323947-300x200-1.jpg',
    title: 'SRI LANKAN HOSPITALITY',
    description: 'Sri Lanka provides the chance to immerse oneself in the rich cultural heritage of the country, with easy access to ancient temples, ruins, and other historical sites, while enjoying luxurious accommodations in a stunning setting., surrounded by lush gardens that provide a secluded oasis.',
  },
  {
    imageSrc: 'src/assets/images/Madol-duwa-qf8xouyozvlhiae8phsdrj8qi0r6eaxqz2xw962mz4.jpg',
    title: 'WILD LIFE',
    description: 'Sri Lankan wildlife is incredibly diverse, with over 26 national parks home to elephants, leopards, sloth bears, and a variety of bird species. The island’s unique ecosystems, from dense rainforests to coastal wetlands, make it a biodiversity hotspot, offering thrilling opportunities for nature enthusiasts and wildlife photographers alike.',
  },
];

const ExperiencesSection = () => {
  return (

    <div className="relative w-full">
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Background overlay */}
      <div className="relative p-3 w-full">
        <h2 className="text-3xl font-semibold text-white mt-24 py-2 px-10">
          EXPERIENCES IN SRILANKA
        </h2>
        <hr className="border-t-2 border-white my-4" />
        <div className="flex flex-wrap justify-center p-4 gap-8">
          {experiencesData.map((experience, index) => (
            <ExperienceCard
              key={index}
              imageSrc={experience.imageSrc}
              title={experience.title}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </div>


  );
};

export default ExperiencesSection;
