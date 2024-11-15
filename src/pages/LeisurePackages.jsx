import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const LeisurePackages = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>

      <div className="p-6 px-10 bg-gray-100 text-gray-800">
        <h2 className="text-center text-3xl font-semibold my-6">Tour Itinerary</h2>

        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 01 : Bandaranaike International Airport – Dambulla
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>On arrival, you will be met and welcomed by our representative and transferred to Dambulla, en route Pinnewela Elephant Orphanage & Spice Garden</li>
            <li>Then proceed to Dambulla Cave Temple</li>
            <li>Check-in to the hotel & leisure at the hotel</li>
            <li>Dinner & overnight stay at hotel - Dambulla</li>
          </ul>

          <h1 className='italic mt-5 font-semibold'>Time table of the Elephant Orphanage</h1>

          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>30am Opening the orphanage for visitors</li>
            <li>15am Bottle-feeding the baby elephants</li>
            <li>00am Morning bath at ‘Ma Oya’</li>
            <li>12noon Elephants return to the orphanage after the bath</li>
            <li>15pm Bottle-feeding the baby elephants</li>
            <li>00pm Afternoon bath at ‘Ma Oya’</li>
            <li>00pm Elephants return to the orphanage after the bath</li>
            <li>00pm Bottle-feeding the baby elephants</li>
            <li>00pm Closing the orphanage to visitors</li>
          </ul>
        </div>


        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 02: Dambulla - Kandy
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Sigiriya Rock</li>
            <li>Then transfer to Kandy and proceed to Kandy city tour including Gem Museum, Temple Tooth Relic Temple & Royal Botanical Garden</li>
            <li>Check-in to the hotel & leisure at the hotel</li>
            <li>Dinner & overnight stay at hotel - Kandy</li>
          </ul>

          <h1 className='italic mt-5 font-semibold'>Temple of the Tooth Relic, Kandy</h1>

          <p className='mt-5 italic'>
            The Temple of the Sacred Tooth relic of the Buddha Is the most important temple for the Sri Lankan Buddhists and was built in the 16th Century A.D. by king Wimaladharmasooriya, solely for the purpose of housing the tooth relic.
          </p>

          <h1 className='italic mt-5 font-semibold'>Opening hours:</h1>
          <ul className="list-disc  ml-5 mt-4 space-y-2 text-gray-700">
            <li>Temple: 5.30am - 8pm</li>
            <li>Puja: 5.30 - 6.45am, 9.30 - 11am & 6.30 - 8pm</li>
            <li>Dress code: Wear clothes that cover your legs and shoulders, and remove your shoes outside the temple</li>
          </ul>
        </div>


        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 03: Kandy – Nuwara Eliya
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Nuwara Eliya</li>
            <li>En-route visit Tea Factory, Tea Plantation, Hanuman Temple & Ramboda Falls</li>
            <li>Check-in to the hotel & leisure at the hotel</li>
            <li>Dinner & overnight stay at hotel - Nuwara Eliya</li>
          </ul>
        </div>

        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 04: Nuwara Eliya - Bentota
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <ul class="list-disc pl-5">
              <li>After breakfast at the hotel, proceed to Nuwara Eliya city tour including Hakgala Garden, Seetha Amman Temple & Gregory Lake</li>
              <li>Then transfer to Bentota</li>
              <li>Check-in to the hotel & leisure at the hotel</li>
              <li>Dinner & overnight stay at hotel - Bentota</li>
            </ul>
          </ul>
        </div>

        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 05: Bentota
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <ul class="list-disc pl-5">
              <li>After breakfast at the hotel, proceed to Water Sports, Madu River Boat Ride & Turtle Farm</li>
              <li>Leisure at the hotel</li>
              <li>Dinner & overnight stay at hotel - Bentota</li>
            </ul>
          </ul>
        </div>

        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 06: Bentota - Colombo
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">

            <li>Breakfast at the hotel & transfer to Colombo</li>
            <li>Then proceed to Colombo City tour & shopping</li>
            <li>Check-in to the hotel & leisure at the hotel</li>


            <p className='mt-5'>
              City Tour: While on your city tour in Colombo you may visit famous places including Galle Face Green, the Viharamahadevi Park, National Museum, Twin World Trade Center towers, Old Parliament Building, Fort district, Independence Hall at Independence Square, and prominent Buddhist, Hindu, Islam and Christian places of worship. (Entrance fees to sites not included). For shopping, you may visit Odel, House of Fashion, Beverly Street, Majestic City, Noritake, etc.,
            </p>
          </ul>
        </div>

        <div className="p-4  mb-6 mt-5">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 07: - Colombo – Bandaranayke International Airport
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Breakfast at the hotel & transfer to the airport for departure</li>
          </ul>

          <h1 className='text-xl mt-5 text-center font-bold'>Entrance Fees Supplements per Person Rate in USD:</h1>
          <div className="overflow-x-auto px-10 mt-5">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-teal-800 text-white">
                  <th className="py-2 px-4 border-b">Name of the Sightseeing Location</th>
                  <th className="py-2 px-4 border-b">SAARC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Pinnawala Elephant Orphanage</td>
                  <td className="py-2 px-4 border-b">10</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Kandy Temple</td>
                  <td className="py-2 px-4 border-b">6</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Royal Botanical Garden in Kandy</td>
                  <td className="py-2 px-4 border-b">12</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Hakgala Gardens, Nuwara Eliya</td>
                  <td className="py-2 px-4 border-b">12</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Seetha Amman Temple, Nuwara Eliya</td>
                  <td className="py-2 px-4 border-b">Free</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Gregory Lake</td>
                  <td className="py-2 px-4 border-b">3</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Madu River Boat ride, Bentota</td>
                  <td className="py-2 px-4 border-b">10</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Turtle Hatchery, Bentota</td>
                  <td className="py-2 px-4 border-b">3</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Water sports in Bentota (Combo) Jet ski / Banana Boat Ride / Ringo Ride (01 round)</td>
                  <td className="py-2 px-4 border-b">24</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Colombo National Museum</td>
                  <td className="py-2 px-4 border-b">6</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Gangarama Temple, Colombo</td>
                  <td className="py-2 px-4 border-b">3</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">Lotus Tower</td>
                  <td className="py-2 px-4 border-b">20</td>
                </tr>
              </tbody>
            </table>
          </div>

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

export default LeisurePackages