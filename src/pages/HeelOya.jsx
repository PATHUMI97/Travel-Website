import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const HeelOya = () => {
  return (
    <>
     <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <div className="p-6 bg-gray-100 text-gray-800">

        {/* Day and Description Section */}
        <div className="p-10  mb-6">

          <p>Heeloya Tourism Village is situated along Poddalgoda Road in Kandy district. It is a village trekking tour in which visitors get a chance to experience the typical lifestyle of a Sri Lankan villager. Visitors also have the chance to witness some amazing sights such as paddy fields and plantations etc. The tour provides a sneak peek into the daily lives of villagers such as how a court case is heard, paddy cultivation, toddy tapping and bee-keeping etc.</p>
          <br />
          <br />
          <p>
            The Heeloya Village trekking package lets you grasp the rural culture of Sri Lanka and undergo a fun-filled sightseeing activity. Witness the ancient Sri Lankan village composition and the lifestyle of the local people. You shall be able to observe how the proceedings of hearing a case is made by the village-headman and their ways of paddy cultivation, home gardening, livestock, spice plantations, toddy tapping, handicrafts, bee-keeping, etc.
          </p>

          <div className="overflow-x-auto mt-10">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-teal-800 text-white text-left">
                  <th className="p-3 border-b">Nights</th>
                  <th className="p-3 border-b">Hotel</th>
                  <th className="p-3 border-b">Room Category</th>
                  <th className="p-3 border-b">Meal Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b">2N</td>
                  <td className="p-3 border-b">Wild Glamping Knuckles</td>
                  <td className="p-3 border-b">Luxury Tent</td>
                  <td className="p-3 border-b">HB Basis</td>
                </tr>
                <tr>
                  <td className="p-3 border-b">1N</td>
                  <td className="p-3 border-b">The Blackberry Cottage</td>
                  <td className="p-3 border-b">Entire Cottage</td>
                  <td className="p-3 border-b">HB Basis</td>
                </tr>
                <tr>
                  <td className="p-3 border-b">1N</td>
                  <td className="p-3 border-b">Raddison Colombo</td>
                  <td className="p-3 border-b">Standard</td>
                  <td className="p-3 border-b">HB Basis</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className='font-bold text-2xl mt-5'>Package Cost</h1>

          <div className="overflow-x-auto mt-5">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-teal-800 text-white text-left">
                  <th className="p-3 border-b">Mini Pax</th>
                  <th className="p-3 border-b">Vehicle</th>
                  <th className="p-3 border-b">Per Person Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b">10 Pax</td>
                  <td className="p-3 border-b">AC Coaster – 15 Seater</td>
                  <td className="p-3 border-b">USD 420</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6  bg-gray-100 text-gray-800">
            <h2 className="text-center text-3xl font-semibold my-6">Tour Itinerary</h2>
            {/* Day and Description Section */}
            <div className="p-4  mb-6">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                Day 01 : Bandaranaike International Airport – Knuckles

              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
                <li>On arrival, you will be met and welcomed by our representative and transferred to Knuckles.</li>
                <li>Check-in to the hotel and leisure at the hotel.</li>
                <li>Dinner and overnight stay at the hotel in Knuckles.</li>
              </ul>


              <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://diferanciatours.com/wp-content/uploads/2024/08/1.jpg"
                  alt="Temple 1"
                  className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
                />

                <img
                  src="https://diferanciatours.com/wp-content/uploads/2024/08/2.jpg"
                  alt="Temple 1"
                  className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>


            <div className="p-4  mb-6">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                Day 02–Knuckles
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
                <li>Early morning: Proceed to Knuckles Village trekking.</li>
                <li>Lunch at the village.</li>
                <li>Leisure at the hotel.</li>
                <li>Dinner and overnight stay at the hotel in Knuckles.</li>
                <li>06:00: You will be picked up from your hotel and driven to the trailhead near the Rangala village.</li>
                <li>07:30: Your trekking guide will provide a brief description of the village and trekking.</li>
                <li>08:00: You will start the trekking, engaging in plucking fruits and vegetables for a meal prepared according to local taste. You'll also watch aspects of village life, including the Heeloya waterfall and local species and herbs.</li>
                <li>13:00: Enjoy a traditional Sri Lankan lunch at a village house.</li>
                <li>14:00: You will be driven back to your hotel.</li>
                <li>16:00: Arrive back at your hotel with wonderful memories.</li>
              </ul>
              <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto ">
                <img
                  src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-155557.png"
                  alt="Temple 1"
                  className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>


            <div className="p-4  mb-6">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                Day 03- Knuckles – Nuwara Eliya
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
                <li>After breakfast at the hotel, proceed to Nuwara Eliya.</li>
                <li>Then proceed to the Nuwara Eliya city tour, including Hakgala Garden, Seetha Amman Temple, and Gregory Lake.</li>
                <li>Check-in to the hotel and leisure at the hotel.</li>
                <li>Dinner and overnight stay at the hotel in Nuwara Eliya.</li>
              </ul>
              <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto ">
                <img
                  src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-155727.png"
                  alt="Temple 1"
                  className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>


            <div className="p-4  mb-6">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                Day 04- Nuwara Eliya -Colombo
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
                <li>After breakfast at the hotel, proceed to Colombo.</li>
                <li>Then proceed to the Colombo city tour, including Colombo Port City visit and shopping.</li>
                <li>Check-in to the hotel and leisure at the hotel.</li>
                <li>Dinner and overnight stay at the hotel in Colombo.</li>
              </ul>

              <p className='mt-5'>
                City Tour: While on your city tour in Colombo you may visit famous places including Galle Face Green, the Viharamahadevi Park, National Museum, Twin World Trade Center towers, Old Parliament Building, Fort district, Independence Hall at Independence Square, and prominent Buddhist, Hindu, Islam and Christian places of worship. (Entrance fees to sites not included). For shopping, you may visit Odel, House of Fashion, Beverly Street, Majestic City, Noritake, Lotus Tower, Colombo Port City etc.,
                <br /><br />
                Colombo Port City Activities: Port City Public Area / Artificial Beach , Club House  ,Horse Riding ,Private Sailing Cruises ,Speed Bay , The Bay Golf Club , The Beach Park ( entree fee not included for any activities )
              </p> <br />

              <div className="bg-cover mt-10 w-full sm:w-3/4 md:w-1/2 lg:w-4/5 mx-auto ">
                <img
                  src="https://diferanciatours.com/wp-content/uploads/2024/08/Screenshot-2024-08-02-155922.png"
                  alt="Temple 1"
                  className="w-full h-60 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="p-4  mb-6">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                Day 05- Colombo – Bandaranaike International Airport
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
                <li>After Breakfast at the hotel proceed to Airport for departure.</li>
              </ul>
            </div>


            <h1 className='text-xl font-semibold'>Entrance Fees Supplements per Person Rate in USD:</h1>

            <div className="overflow-x-auto mt-5">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-teal-800 text-white text-left">
                    <th className="p-3 border-b">Name of the Sightseeing Location</th>
                    <th className="p-3 border-b">All Countries</th>
                    <th className="p-3 border-b">SAARC / Countries</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b">Colombo Lotus Tower</td>
                    <td className="p-3 border-b">20</td>
                    <td className="p-3 border-b">20</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">Colombo National Museum</td>
                    <td className="p-3 border-b">6</td>
                    <td className="p-3 border-b">6</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">Gangarama Temple, Colombo</td>
                    <td className="p-3 border-b">3</td>
                    <td className="p-3 border-b">3</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">Pinnawala Elephant Orphanage</td>
                    <td className="p-3 border-b">20</td>
                    <td className="p-3 border-b">10</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">Seetha Amman Temple</td>
                    <td className="p-3 border-b">1</td>
                    <td className="p-3 border-b">1</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">Hakgala Gardens, Nuwara Eliya</td>
                    <td className="p-3 border-b">12</td>
                    <td className="p-3 border-b">12</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">Gregory Lake</td>
                    <td className="p-3 border-b">5</td>
                    <td className="p-3 border-b">5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4  mb-6 mt-5">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                Remarks
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 italic">
                <li>Package valid till 31st Oct 2024.</li>
                <li>Aug supplement will be added to above rates.</li>
                <li>Kids are not allowed below 10 years.</li>
                <li>Rooms are subject to availability.</li>
                <li>The above rates are subject to change at any given time (e.g., an increase in government taxes).</li>
              </ul>
            </div>


            <div className="p-4  mb-6 mt-5">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                The above price is inclusive of
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 ">
                <li>Accommodation at the hotels mentioned or similar.</li>
                <li>Meal plan – HB/MAP.</li>
                <li>Heel Oya Village trekking package with lunch.</li>
                <li>Meeting and assistance at the airport.</li>
                <li>Transportation in a private air-conditioned vehicle.</li>
                <li>Service of an English-speaking national guide.</li>
                <li>Per day 2 water bottles per person - 500ml.</li>
                <li>Local government tax.</li>
                <li>Toll charges.</li>
              </ul>
            </div>

            <div className="p-4  mb-6 mt-5">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                Value added services on Complementary basis
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 ">
                <li>Flemingo duty-free discount voucher – 5%.</li>
                <li>Free tea plantation visit.</li>
                <li>20% discount offer at Ishini Gems factory at Colombo Flower Drum.</li>
                <li>20% discount offer at Oak Ray wood carving Colombo Flower Drum.</li>
                <li>5% discount voucher at ODEL, a high-quality clothing store in Colombo.</li>
              </ul>
            </div>

            <div className="p-4  mt-5">
              <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
                The Price is Exclusive of
              </h3>
              <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 ">
                <li>Tips to guides/chauffeurs.</li>
                <li>Entrance fee for any sightseeing.</li>
                <li>Any fluctuations in the dollar component will affect the costing.</li>
                <li>Any extra meal not mentioned in the above program during the tour.</li>
                <li>Early check-in or late checkout charges.</li>
                <li>Expenses of a personal nature.</li>
                <li>Any service not specifically mentioned in the inclusion.</li>
                <li>Visa fees (please log on to <a className='underline' href="https://www.srilankaevisa.lk/">https://www.srilankaevisa.lk/</a>).</li>
                <li>Lunch or any extra meal not mentioned in the above program during the tour.</li>
                <li>Camera or video permits.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <LogosSection />
      <Footer />
    </>
  )
}

export default HeelOya