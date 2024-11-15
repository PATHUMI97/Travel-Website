import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GalleryCard from './GalleryCard';  // Import TourCard component

const TourCardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const tours = [
    { imageSrc: 'src/assets/images/cultural-600', altText: 'Honeymoon Tours' },
    { imageSrc: 'src/assets/images/experience-600.jpg', altText: 'Eco Tour Package' },
    { imageSrc: 'src/assets/images/dsgs.jpg', altText: 'Wildlife Adventure Tours' },
    { imageSrc: 'src/assets/images/nature564.jpg', altText: 'Beach Tours' },
    { imageSrc: 'src/assets/images/golf04-600.jpg', altText: 'Golf Tours' },
    { imageSrc: 'src/assets/images/sri-lanka-house-luxure-600.jpg', altText: 'Ready Made Packages' },
    { imageSrc: 'src/assets/images/cultural-600.jpg', altText: 'Cultural Tours' },
    { imageSrc: 'src/assets/images/dazzle-3.png', altText: 'Nights of Light Package' },
    { imageSrc: 'src/assets/images/Hills-600.jpg', altText: 'Hill Country Tours' },
    { imageSrc: 'src/assets/images/casino5.jpg', altText: 'Glimpse of Sri Lanka' },
    { imageSrc: 'src/assets/images/dazzle-2.png', altText: 'Glimpse of Sri Lanka' },
    { imageSrc: 'src/assets/images/dazzle-1.png', altText: 'Glimpse of Sri Lanka' },
    { imageSrc: 'src/assets/images/beach-600.jpg', altText: 'Glimpse of Sri Lanka' },
    { imageSrc: 'src/assets/images/sri-lanka-house-luxure-600.jpg', altText: 'Glimpse of Sri Lanka' },
    { imageSrc: 'src/assets/images/wild-600.jpg', altText: 'Glimpse of Sri Lanka' },
  ];

  return (
    <div className="slider-container px-4 py-8">
      <h1 className='text-center text-5xl font-bold text-teal-700 '>GALLERY</h1>
      <Slider {...settings}>
        {tours.map((tour, index) => (
          <div key={index}>
            <GalleryCard imageSrc={tour.imageSrc} altText={tour.altText} />
          </div>
        ))}
      </Slider>
    
    </div>
  );
};

export default TourCardSlider;
