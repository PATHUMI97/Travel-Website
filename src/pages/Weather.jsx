import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const Weather = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <section className="flex flex-col md:flex-row justify-center items-center px-4 py-10 md:py-20">

        {/* Left Side: Description */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className='text-4xl font-bold text-center'>WEATHER CLIMATE AND GEOGRAPHY</h1><br /><br />
          <p className="text-gray-700  font-semibold mb-6">Sri Lanka is a tropical country located quite close to the equatot thus bringing an over all warm climate throughout the year with the exceptions of a couple of monsoons seasons which lasts for a couple of months. Sri Lankan climate suits well for tourists who want to work out on their tan and soak up a couple of vitamin Ds. <br /> <br />
            However, the upland countries have a much cooler temperate than other parts of the country. Still the sun tends to shine almost everywhere. The coastal areas are both warm with abit of humid due to the mixing of the ocean moisture. Sri lanka doesn’t have a clear cut season at all, its all warm and humid throughout the year, even during the monsoons you can always see abit of the sun. <br /> <br />
            Since Sri Lanka doesn’t have marked seasons per say monsoon seasons are usually assumed within a range of a months. The monsoon seasons are generally considered to be with May or August and November to February. January is said to be the coldest during the year whereas the hottest would be from May to June. <br />
            The Average mean temperature along the coast is 26.7 degrees. Colombo has a range of 26-27 degrees. Place with high elevations tend to be around 16 degrees. Relative humidity ranges from 70% daytime to 90% during the night. At the end of the day you can usually describe as being very hot with a very high humidity. But still the Sri Lankan climate wont hinder your plans on having a great holiday of your life.
          </p>

        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 md:w-1/4 mt-6 ml-10 md:mt-0">
          <img
            src="https://diferanciatours.com/wp-content/uploads/2024/07/visit.png"
            alt="Nature landscape"
            className="w-full h-auto rounded-lg "
          />
        </div>

      </section>

      <section className="flex flex-col md:flex-row justify-center items-center px-4 py-10 md:py-20">

        <div className="w-1/2 md:w-1/4 mt-6 ml-10 md:mt-0">
          <img
            src="https://diferanciatours.com/wp-content/uploads/2024/07/srilankamap21-792x1024.png"
            alt="Nature landscape"
            className="w-full h-auto rounded-lg "
          />
        </div>

        <div className="w-full md:w-1/2 px-4">
          <h1 className='text-4xl font-bold text-center'>BEST TIME TO VISIT</h1><br /><br />
          <p className="text-gray-700  font-semibold mb-6">The western and southern areas experience their monsoon season during May to September while the northern and eastern areas are affected by the monsoon between October to January. The island is certainly a year-round destination as while one area is might be off-limits due to poor weather, the other region is likely to be experiencing good conditions. <br /> <br />
          The recommended time for a Sri Lankan getaway is during either coast’s dry season – April to November for the eastern coast and December to March for the west coast and central highlands. Christmas and the New Year are particularly popular times to go to Sri Lanka, while July and August represent festival season on the island – if travelling during either time it is recommended to book well in advance to guarantee accommodation <br /> <br />
          Generally speaking, upland areas of Sri Lanka are cooler and more temperate, with a yearly average around 16-20°C (60-68°F), and coastal areas are warmer with average temperatures around 27°C (80°F). The March-June season experiences slightly higher temperatures of up to 33°C (92°F), while the temperatures in November-January are a few degrees lower at around 24°C (75°F) at the coast. Humidity is typically rather high in Sri Lanka, averaging out at around 80% year-round. As the nation is located in the tropics, the weather can be severely affected by El Niño. Though this irregular phenomenon only occurs around every three to seven years, it can impact an area’s weather for an extended length of time, raising the possibility of severe floods and storms. <br />
          </p>

        </div>

      </section>
      <LogosSection />
      <Footer />
    </>
  )
}

export default Weather