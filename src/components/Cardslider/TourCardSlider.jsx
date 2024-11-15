import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TourCard from './TourCard';  // Import TourCard component

const TourCardSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    { imageSrc: 'src/assets/images/dazzle-3-378x550.png', altText: 'Honeymoon Tours' },
    { imageSrc: 'src/assets/images/tea-600-378x550.jpg', altText: 'Eco Tour Package' },
    { imageSrc: 'src/assets/images/wild-600-378x550.jpg', altText: 'Wildlife Adventure Tours' },
    { imageSrc: 'src/assets/images/beach-600-378x550.jpg', altText: 'Beach Tours' },
    { imageSrc: 'src/assets/images/golf04-600-378x550.jpg', altText: 'Golf Tours' },
    { imageSrc: 'src/assets/images/sri-lanka-house-luxure-600-378x550.jpg', altText: 'Ready Made Packages' },
    { imageSrc: 'src/assets/images/cultural-600-378x550.jpg', altText: 'Cultural Tours' },
    { imageSrc: 'src/assets/images/casino5-378x550.jpg', altText: 'Nights of Light Package' },
    { imageSrc: 'src/assets/images/Hills-600-378x550.jpg', altText: 'Hill Country Tours' },
    { imageSrc: 'src/assets/images/nature564-378x550.jpg', altText: 'Glimpse of Sri Lanka' },
  ];

  return (
    <div className="slider-container px-4 py-8">
      <Slider {...settings}>
        {tours.map((tour, index) => (
          <div key={index}>
            <TourCard imageSrc={tour.imageSrc} altText={tour.altText} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TourCardSlider;
