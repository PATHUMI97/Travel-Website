import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Whentovisit = () => {

  const imageData = [
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/1-13.jpg", alt: "Image 1", title: "Image 1", description: "Description of Image 1" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/2-12.jpg", alt: "Image 2", title: "Image 2", description: "Description of Image 2" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/3-13.jpg", alt: "Image 3", title: "Image 3", description: "Description of Image 3" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/4-12.jpg", alt: "Image 4", title: "Image 4", description: "Description of Image 4" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/5-11.jpg", alt: "Image 5", title: "Image 5", description: "Description of Image 5" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/6-11.jpg", alt: "Image 6", title: "Image 6", description: "Description of Image 6" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/7-9.jpg", alt: "Image 7", title: "Image 7", description: "Description of Image 7" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/8-11.jpg", alt: "Image 8", title: "Image 8", description: "Description of Image 8" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/8-11.jpg", alt: "Image 9", title: "Image 9", description: "Description of Image 9" },
    { src: "https://diferanciatours.com/wp-content/uploads/2024/07/12-3.jpg", alt: "Image 10", title: "Image 10", description: "Description of Image 10" }
  ];

  const settings = {
    dots: false,   // No dots below the carousel
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // Show 3 images at once
    slidesToScroll: 1, // Scroll one image at a time
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,   // For tablet
        settings: {
          slidesToShow: 2,  // Show 2 images on smaller screens
        },
      },
      {
        breakpoint: 600,    // For mobile
        settings: {
          slidesToShow: 1,  // Show 1 image on very small screens
        },
      },
    ],
  };

  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <section className="flex flex-col items-center justify-center px-4 py-10 md:py-20">

        {/* Paragraph */}
        <div className="w-full md:w-3/4  mb-8 text-center">
          <p className="text-gray-700 text-sm  md:text-xl">
            Sri Lanka climate is rather complicated for such a small country, due to the fact that the island is affected by two separate monsoons – though this also means that there is usually good weather somewhere on the island, at most times of the year. When thinking about the best time to visit Sri Lanka, however, it’s worth bearing in mind that the basic pattern described below can vary significantly from year to year, and that global warming has disrupted these already complex weather patterns.
            <br /><br />
            The basic rainfall pattern is as follows. The main southwest (“yala”) monsoon brings rain to the west and southwest coasts and hill country from April/May to September (wettest from April to June). The less severe northeast (“maha”) monsoon hits the east coast from November to March (wettest from November to December); there’s also a inter- monsoonal period of unsettled weather preceding the Maha monsoon in October and November during which heavy rainfall and thunderstorms can occur anywhere across the island. In practical terms, this means that the best time to visit the west and south coasts and hill country is from December to March, while the best weather on the east coast is from April/May to September.
            <br /><br />
            Sri Lanka’s position close to the Equator means that temperatures remain fairly constant year-round. Coastal and lowland areas enjoy average daytime temperatures of around 26-30°C (often climbing up well into the 30°Cs during the hottest part of the day). Temperatures decrease with altitude, reducing to a temperate 18-22°C in Kandy, and a pleasantly mild 14-17°C in Nuwara Eliya and the highest parts of the island – nights in the hills can be quite chilly, with temperatures sometimes falling close to freezing. Humidity is high everywhere, rising to a sweltering ninety percent at times in the southwest, and averaging sixty to eighty percent across the rest of the island.

          </p>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Slider {...settings}>
            {imageData.map((image, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-md rounded-lg">
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <LogosSection />
      <Footer />
    </>

  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 cursor-pointer text-white bg-black rounded-full p-2 hover:bg-gray-700"
      onClick={onClick}
    >
      ➡️
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 cursor-pointer text-white bg-black rounded-full p-2 hover:bg-gray-700"
      onClick={onClick}
    >
      ⬅️
    </div>
  );
};

export default Whentovisit