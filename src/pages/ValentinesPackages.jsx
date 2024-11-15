import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const ValentinesPackages = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <div className="p-6 px-10 bg-gray-100 text-gray-800">


        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 01 : Bandaranaike International Airport – Kandy
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>On arrival, you will be met and welcomed by our representative and transferred to Dambulla, en route to Pinnawala Elephant Orphanage & Spice Garden.</li>
            <li>Check-in to the hotel and leisure at the hotel.</li>
            <li>Dinner and overnight stay at the hotel in Dambulla.</li>
          </ul>

          <h1 className='font-semibold mt-5 italic'>Time table of the Elephant Orphanage </h1>

          <ul className="list-disc ml-5 mt-4 space-y-2 italic text-gray-700">
            <li>8:30 AM - Opening the orphanage for visitors.</li>
            <li>9:15 AM - Bottle-feeding the baby elephants.</li>
            <li>10:00 AM - Morning bath at ‘Ma Oya’.</li>
            <li>12:00 PM - Elephants return to the orphanage after the bath.</li>
            <li>1:15 PM - Bottle-feeding the baby elephants.</li>
            <li>2:00 PM - Afternoon bath at ‘Ma Oya’.</li>
            <li>3:00 PM - Elephants return to the orphanage after the bath.</li>
            <li>4:00 PM - Bottle-feeding the baby elephants.</li>
            <li>5:00 PM - Closing the orphanage to visitors.</li>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 02 – Dambulla
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Early morning, proceed to Minneriya National Park (packed breakfast).</li>
            <li>Then proceed to Sigiriya Rock or Hiriwadunna Village tour.</li>
            <li>Then leisure at the hotel.</li>
            <li>Dinner and overnight stay at the hotel in Dambulla.</li>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 03–Dambulla – Nuwara Eliya
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Nuwara Eliya.</li>
            <li>En-route visit the tea factory, tea plantation, Hanuman Temple, and Ramboda Falls.</li>
            <li>Check-in to the hotel and leisure at the hotel.</li>
            <li>Dinner and overnight stay at the hotel in Nuwara Eliya.</li>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 04- Nuwara Eliya
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Nuwara Eliya city tour including Hakgala Garden, strawberry farm, Seetha Amman Temple, and Gregory Lake.</li>
            <li>Leisure at the hotel.</li>
            <li>Dinner and overnight stay at the hotel in Nuwara Eliya.</li>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 05- Nuwara Eliya – Colombo
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Colombo.</li>
            <li>Check-in to the hotel and leisure at the hotel.</li>
            <li>Dinner and overnight stay at the hotel in Colombo.</li>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 06 - Colombo
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Colombo City tour and shopping.</li>
            <li>Then leisure at the hotel.</li>
            <li>Dinner and overnight stay at the hotel in Colombo.</li>

            <p className='mt-5'>City Tour: While on your city tour in Colombo you may visit famous places including Galle Face Green, the Viharamahadevi Park, National Museum, Twin World Trade Center towers, Old Parliament Building, Fort district, Independence Hall at Independence Square, and prominent Buddhist, Hindu, Islam and Christian places of worship. (Entrance fees to sites not included). For shopping, you may visit Odel, House of Fashion, Beverly Street, Majestic City, Noritake, etc

            </p>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 07- Colombo - Bandaranaike International Airport
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After Breakfast at the hotel proceed to Airport for departure</li>
          </ul>
        </div>

        <h1 className='text-center text-3xl font-semibold'>Entrance Fees Supplements per Person Rate in USD:</h1>

        <div class="overflow-x-auto mt-5 px-10">
          <table class="min-w-full w-4/5 border-collapse border border-gray-300">
            <thead className='bg-teal-800 text-white'>
              <tr>
                <th class="border border-gray-300 p-2 text-left">Name of the Sightseeing Location</th>
                <th class="border border-gray-300 p-2 text-left">SAARC / Countries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2">Colombo Lotus Tower</td>
                <td class="border border-gray-300 p-2">20</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Colombo National Museum</td>
                <td class="border border-gray-300 p-2">6</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Gangarama Temple, Colombo</td>
                <td class="border border-gray-300 p-2">3</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Pinnawala Elephant Orphanage</td>
                <td class="border border-gray-300 p-2">10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Sigiriya</td>
                <td class="border border-gray-300 p-2">19</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Minneriya National Park</td>
                <td class="border border-gray-300 p-2">35</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">JEEP HIRE (MIN 02 & MAX 06 PAX)</td>
                <td class="border border-gray-300 p-2">38 (Per Jeep)</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Hiriwaduna Village Tour</td>
                <td class="border border-gray-300 p-2">15</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Kandy Temple</td>
                <td class="border border-gray-300 p-2">10</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Royal Botanical Garden in Kandy</td>
                <td class="border border-gray-300 p-2">12</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Hakgala Gardens, Nuwara Eliya</td>
                <td class="border border-gray-300 p-2">12</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">Gregory Lake</td>
                <td class="border border-gray-300 p-2">5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            The above price is inclusive of
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Accommodation at the hotels mentioned or similar</li>
            <li>Meal plan – HB/MAP</li>
            <li>Meeting and Assistance at the airport</li>
            <li>Transportation in a Pvt Air-conditioned vehicle</li>
            <li>Service of an English-speaking chauffeur</li>
            <li>Local Government Tax</li>
            <li>Toll charges</li>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Value added services on Complementary basis
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>5% ODEL voucher which is high quality clothing store at Colombo</li>
            <li>Free Woodcarvings visit, Kandy</li>
            <li>Free Silk & Batik shop visit at Kandy</li>
            <li>Free head massage at the spice garden & free explanation about the spices in Sri Lanka (Recommended by us)</li>
            <li>Free Tea plantation visit</li>
            <li>Free Tea factory visit and explanation about the tea process</li>
          </ul>
        </div>

        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            The Price is Exclusive of
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Tips to Guides / Chauffeurs</li>
            <li>Entrance fee for any sightseeing</li>
            <li>Any fluctuations in the dollar component will affect the costing</li>
            <li>Any extra meal not mentioned on the above program during the tour</li>
            <li>Early check-in or late checkout charges</li>
            <li>Expenses of a personal nature</li>
            <li>Any service not specifically mentioned in the inclusion</li>
            <li>Visa Fees (please log on to <a className='underline' href="https://eta.gov.lk" class="text-blue-600 underline">eta.gov.lk</a>)</li>
            <li>Lunch or any extra meal not mentioned on the above program during the tour</li>
            <li>Camera or Video permits</li>
          </ul>
        </div>

      </div>
      <LogosSection />
      <Footer />
    </>
  )
}

export default ValentinesPackages