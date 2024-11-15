import React from 'react';
import ExperienceCard from './ActivityCard';

const experiencesData = [
  {
    imageSrc: 'src/assets/images/FLZd-oYXoAI5et2_auto_x2-300x298-1.jpg',
    title: 'SURFING',
    description: 'Surfing is a surface water sport in which an individual, a surfer (or two in tandem surfing), uses a board to ride on the forward section, or face, of a moving wave of water, which usually carries the surfer towards the shore. Waves suitable for surfing are primarily found on ocean shores, but can also be found in standing waves in the open ocean.',
  },
  {
    imageSrc: 'src/assets/images/fgr-1024x1024.jpg',
    title: 'BEACH PARTIES',
    description: 'A beach party is a celebration that takes place on a beach or near the ocean. It usually involves activities like swimming, surfing, playing games, dancing, eating and drinking. Some beach parties are casual and informal, while others are more organized and themed. Here are some examples of beach party descriptions.',
  },
  {
    imageSrc: 'src/assets/images/8d-1024x1024.jpg',
    title: 'BOAT RIDES',
    description: 'There are many different types of boat rides available in Sri Lanka, each offering its own unique experience. You can take a whale watching tour and see some of the largest creatures on Earth, go on a mangrove safari and explore the unique ecosystem of the mangroves, or take a river cruise and relax as you take in the sights and sounds of the countryside.',
  },

];

const ExperiencesSection = () => {
  return (

    <div className="relative w-full">
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Background overlay */}
      <div className="relative p-3 w-full">
        <h2 className="text-3xl font-semibold text-white mt-24 py-6 px-10">
         POPULAR ACTIVITIES
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
