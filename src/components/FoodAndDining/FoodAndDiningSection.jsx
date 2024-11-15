import React from 'react';
import ExperienceCard from './FoodAndDiningCard';

const experiencesData = [
  {
    imageSrc: 'src/assets/images/rtyu-300x300-1.jpeg',
    title: 'FINE DINING',
    description: 'Mouth Watering Delicious meals from our special menu rich in international and local cuisine, served by highly trained and informed personnel that provide personalized attention to each client. Menu explanations, wine pairing ideas, and other sorts of assistance can all be provided to ensure that guests have a wonderful dining experience.',
  },
  {
    imageSrc: 'src/assets/images/fbbfb.jpeg',
    title: 'SEA FOODS',
    description: 'Seafood is any form of sea life regarded as food by humans. It prominently includes fish and shellfish. Shellfish include various species of molluscs (e.g., bivalve molluscs such as clams, oysters and mussels, and cephalopods such as octopus and squid), crustaceans (e.g. shrimp, crabs, and lobster), and echinoderms (e.g. sea cucumbers and sea urchins).',
  },
  {
    imageSrc: 'src/assets/images/rthm.jpeg',
    title: 'BBQ NIGHTS',
    description: 'Experience the ultimate BBQ night at our enchanting villa, where the ambiance meets the sizzle of delicious flavors under the open sky. Picture a perfect evening filled with laughter and the irresistible aroma of grilled delights. Our outdoor party setup at the villa is tailor-made for those who relish the combination of great company and delectable barbecue.',
  },
  {
    imageSrc: 'src/assets/images/1685523091174.jpeg',
    title: 'TRADITIONAL FOODS',
    description: 'Sri Lankan traditional foods are a delightful fusion of flavors, showcasing dishes like rice and curry, hoppers, coconut sambol, and kottu roti. Richly spiced with ingredients like cinnamon, cardamom, and chili, these meals reflect the island’s diverse cultural heritage, offering a unique culinary experience rooted in centuries-old traditions.',
  },
];

const ExperiencesSection = () => {
  return (

    <div className="absolute w-full">
      <div className="absolute inset-0 bg-white opacity-60"></div> {/* Background overlay */}
      <div className="relative p-3 w-full">
        <h2 className="text-3xl font-semibold text-black mt-24 py-2 px-10">
          FOOD AND DINING IN SRI LANKA
        </h2>
        <hr className="border-t-2 border-black my-4" />
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
