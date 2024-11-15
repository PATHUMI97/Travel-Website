import React, { useState, useEffect } from 'react';
import DestinationCard from '../components/Destination/DestinationCard';
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const cardData = [
  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/1487313899dambulla_cave_temples__sri_lanka-300x300.jpg',
    title: 'DAMBULLA',
    description: 'Dambulla, located in the Central Province of Sri Lanka, is a city rich in history and culture. It is renowned for the Dambulla Cave Temple.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/Sigiri-Apsara-Sigiriya-Frescoes-300x300.jpg',
    title: 'SIGIRIYA',
    description: 'Sigiriya, one of Sri Lanka’s most iconic landmarks, is a majestic rock fortress that towers nearly 200 meters above the surrounding landscape.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/jaffna-065-300x300.webp',
    title: 'JAFFNA',
    description: 'Jaffna, located in northern Sri Lanka, is a city rich in history and culture, reflecting the Tamil heritage of the region.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/Anuradhapura-Ancient-City-300x300.jpg',
    title: 'ANURADHAPURA',
    description: 'Anuradhapura, located in the North Central Province of Sri Lanka, is one of the country’s ancient capitals and a UNESCO World Heritage site.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/The-ancient-stone-statue-of-King-Parakramabahu-the-greatest-monarch-from-the-polonnaruwa-realm-1-300x300.jpg',
    title: 'POLONNARUWA',
    description: 'Polonnaruwa, located in North Central Sri Lanka, is an ancient city that served as the second capital of the Sinhalese Kingdom after the fall of Anuradhapura.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/GettyImages-550859319_full-300x300.jpg',
    title: 'TRINCOMALEE',
    description: 'Trincomalee, located on the northeastern coast of Sri Lanka, is a historic port city known for its stunning natural harbor, one of the largest and deepest in the world.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/kitesurf-arugam-300x300.webp',
    title: 'ARUGAMBAY',
    description: 'Arugam Bay, located on Sri Lanka’s southeastern coast, is a renowned beach destination famous for its stunning surf and laid-back vibe.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/445726_16022516210040224811-300x300.jpg',
    title: 'PASIKUDAH',
    description: 'Passikudah, located on Sri Lanka’s eastern coast, is renowned for its stunningly beautiful and tranquil beach. ',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/360_F_586101414_lWyKPqrGWPx9aqMX2vA1Kx0f8pKCjRQO-300x300.jpg',
    title: 'KALPITIYA',
    description: 'Kalpitiya, situated on Sri Lanka’s northwest coast, is a renowned destination for its stunning natural beauty and vibrant marine life.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/1487313899dambulla_cave_temples__sri_lanka-300x300.jpg',
    title: 'KANDY',
    description: 'Kandy, located in the central highlands of Sri Lanka, is a city known for its rich cultural heritage and scenic beauty.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/OIP-300x300.jpeg',
    title: 'NUWARA ELIYA',
    description: 'Nuwara Eliya, often referred to as “Little England,” is a picturesque town located in the central highlands of Sri Lanka.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/OIP-2-300x300.jpeg',
    title: 'ELLA',
    description: 'Ella, a charming town nestled in the central highlands of Sri Lanka, is known for its breathtaking scenery, lush greenery, and laid-back atmosphere. ',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/destination-kithulgala-sri-lanka-300x300.webp',
    title: 'KITHULGALA',
    description: 'Kitulgala, a picturesque town in western Sri Lanka, is famous for its lush rainforests, adventure activities, and historical significance.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/yala-300x300.jpg',
    title: 'YALA',
    description: 'Yala National Park, located in the southeastern region of Sri Lanka, is the country’s most famous wildlife reserve and a premier destination for safari enthusiasts.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/R-2-300x300.jpeg',
    title: 'MIRISSA',
    description: 'Mirissa, located on the southern coast of Sri Lanka, is a popular beach destination known for its pristine sandy shores, vibrant nightlife, and world-class whale watching opportunities.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/OIP-5-768x768.jpeg',
    title: 'UNAWATUNA',
    description: 'Unawatuna, located on Sri Lanka’s southern coast, is a charming beach town known for its golden sandy beaches, vibrant coral reefs, and laid-back atmosphere.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/OIP-6-300x300.jpeg',
    title: 'GALLE',
    description: 'Galle, a historic city on Sri Lanka’s southwestern coast, is renowned for its well-preserved colonial architecture and rich cultural heritage.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/sri-lanka-gallery-3-300x300.jpg',
    title: 'HIKKADUWA',
    description: 'Hikkaduwa, located on Sri Lanka’s southwestern coast, is a vibrant beach town known for its lively atmosphere, stunning coral reefs, and surf-friendly waves.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/R-3-300x300.jpeg',
    title: 'BENTOTA',
    description: 'Bentota, a picturesque coastal town on Sri Lanka’s southwest coast, is renowned for its pristine beaches, luxurious resorts, and serene atmosphere.',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/Colombo-768x768.webp',
    title: 'COLOMBO',
    description: 'Colombo, the bustling capital of Sri Lanka, is a vibrant city that blends rich history with modern urban life. As the country’s commercial and cultural hub..',
  },

  {
    image: 'https://diferanciatours.com/wp-content/uploads/2024/08/R-4-300x300.jpeg',
    title: 'NEGAMBO',
    description: 'Negombo, a coastal town located just north of Colombo, is known for its beautiful beaches, rich history, and vibrant fishing industry.',
  },

]

const Destination = () => {


  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>

      {/* Card section */}

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <DestinationCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <LogosSection />
      <Footer />


    </>
  )
}

export default Destination