import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const KandyPerahera = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <div className="p-6  bg-gray-100 text-gray-800">
        <h2 className="text-center text-3xl font-semibold my-6">Tour Itinerary</h2>
        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 01 : Bandaranaike International Airport – Dambulla

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>On arrival, you will be met and welcomed by our representative and transferred to Dambulla.</li>
            <li>En route: Pinnewela Elephant Orphanage & Spice Garden.</li>
            <li>Proceed to Dambulla Cave Temple.</li>
            <li>Check-in to the hotel, leisure at the hotel, dinner & overnight stay at the hotel in Dambulla.</li>
          </ul>
          <h1 className='mt-5 italic underline'>Time table of the Elephant Orphanage</h1>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>30 AM: Opening the orphanage for visitors</li>
            <li>00 AM: Morning bath at ‘Ma Oya’</li>
            <li>12 Noon: Elephants return to the orphanage after the bath</li>
            <li>00 PM: Afternoon bath at ‘Ma Oya’</li>
            <li>00 PM: Elephants return to the orphanage after the bath</li>
            <li>00 PM: Closing the orphanage to visitors</li>
          </ul>

          <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto">
            <img
              src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-162544.png"
              alt="Temple 1"
              className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>


        <div className="p-6 bg-gray-100 text-gray-800">
          {/* Day and Description Section */}
          <div className="p-4  mb-6">
            <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
              Day 02: Dambulla - Kandy

            </h3>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
              <li>After breakfast at the hotel, proceed to Sigiriya Rock and Elephant Back Ride.</li>
              <li>Then transfer to Kandy.</li>
              <li>Check-in to the hotel and leisure at the hotel.</li>
              <li>Evening: Proceed to Kandy Esala Perahera Visit.</li>
              <li>Dinner and overnight stay at the hotel in Kandy.</li>
            </ul>

            <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto">
              <img
                src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-162626.png"
                alt="Temple 1"
                className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>


        <div className="p-6 bg-gray-100 text-gray-800">
          {/* Day and Description Section */}
          <div className="p-4  mb-6">
            <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
              Day 03: Kandy

            </h3>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
              <li>Breakfast at the hotel.</li>
              <li>Leisure at the hotel.</li>
              <li>Evening: Proceed to Cultural Dance Show.</li>
              <li>Dinner and overnight stay at the hotel in Kandy.</li>
              <li>Dinner and overnight stay at the hotel in Kandy.</li>
            </ul>

            <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto">
              <img
                src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-162712.png"
                alt="Temple 1"
                className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>


        <div className="p-6 bg-gray-100 text-gray-800">
          {/* Day and Description Section */}
          <div className="p-4  mb-6">
            <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
              Day 04: Kandy - Bentota

            </h3>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
              <li>After breakfast at the hotel, Kandy city tour including Gem Museum, Temple of the Tooth Relic, and Royal Botanical Garden.</li>
              <li>Then transfer to Bentota.</li>
              <li>Check-in to the hotel and leisure at the hotel.</li>
              <li>Dinner and overnight stay at the hotel in Bentota.</li>
            </ul>

            <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto">
              <img
                src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-162939.png"
                alt="Temple 1"
                className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>


        <div className="p-6 bg-gray-100 text-gray-800">
          {/* Day and Description Section */}
          <div className="p-4  mb-6">
            <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
              Day 05: Bentota

            </h3>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
              <li>After breakfast at the hotel, proceed to water sports, Madu River boat ride, and Turtle Farm.</li>
              <li>Leisure at the hotel.</li>
              <li>Dinner and overnight stay at the hotel in Bentota.</li>
            </ul>

            <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto">
              <img
                src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-162839-1.png"
                alt="Temple 1"
                className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>


        <div className="p-6 bg-gray-100 text-gray-800">
          {/* Day and Description Section */}
          <div className="p-4  mb-6">
            <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
              Day 06: Bentota – Colombo - Bandaranayke International Airport

            </h3>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
              <li>Breakfast at the hotel and transfer to Colombo.</li>
              <li>En-route: Proceed to Pearl Bay Water Park in Bandaragama.</li>
              <li>Then proceed to Colombo city tour, including Colombo Port City visit and shopping.</li>
              <li>Proceed to the airport for departure.</li>
            </ul>

            <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto">
              <img
                src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-163040.png"
                alt="Temple 1"
                className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-100 text-gray-800">
        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            The above price is Inclusive of
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Accommodation at the hotels mentioned or similar</li>
            <li>Meal plan – HB/MAP</li>
            <li>Meeting and Assistance at the airport.</li>
            <li>Transportation in a Pvt Air conditioned vehicle.</li>
            <li>Service of an English speaking Chauffer / National guide</li>
            <li>Per day 2 water bottles per person -500ml (Only for 10 Pax above groups)</li>
            <li>Local Government Tax</li>
            <li>Toll charges.</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Value Added Services on Complementary Basis
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>5% ODEL voucher which is high quality clothing store at Colombo</li>
            <li>Free Woodcarvings visit, Kandy</li>
            <li>Free Silk & Batik shop visit at Kandy. </li>
            <li>Free Gem Factory visit and explanation about the gem progress at Kandy. (If any guest visit Gem Museum, he will get chance to visit Cultural Dance Show) (Recommended by us)</li>
            <li>Free head massage at the spice garden & free explanation about the spices In Sri Lanka which will be direct by us & (Recommended by us)</li>
            <li>Per day 2 water bottles per person -500ml (Only for 10 Pax above groups)</li>
            <li>Free Tea plantation visit.</li>
            <li>Free Tea factory visit and explanation about the tea progress.</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            The above price is Exclusive of

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>5% ODEL voucher which is high quality clothing store at Colombo</li>
            <li>Free Woodcarvings visit, Kandy</li>
            <li>Free Silk & Batik shop visit at Kandy. </li>
            <li>Free Gem Factory visit and explanation about the gem progress at Kandy. (If any guest visit Gem Museum, he will get chance to visit Cultural Dance Show) (Recommended by us)</li>
            <li>Free head massage at the spice garden & free explanation about the spices In Sri Lanka which will be direct by us & (Recommended by us)</li>
            <li>Per day 2 water bottles per person -500ml (Only for 10 Pax above groups)</li>
            <li>Free Tea plantation visit.</li>
            <li>Free Tea factory visit and explanation about the tea progress.</li>
          </ul>
        </div>
      </div>

      </div>
      <LogosSection />
      <Footer />
    </>
  )
}

export default KandyPerahera