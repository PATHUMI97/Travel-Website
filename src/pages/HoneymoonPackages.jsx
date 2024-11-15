import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const HoneymoonPackages = () => {
  const data = [
    { location: 'Madu River Boat ride, Bentota', saarc: 10 },
    { location: 'Turtle Hatchery, Bentota', saarc: 3 },
    { location: 'Water sports in Bentota (Combo) Jet ski / Banana Boat Ride / Ringo Ride (01 round)', saarc: 24 },
    { location: 'Colombo National Museum', saarc: 6 },
    { location: 'Gangarama Temple, Colombo', saarc: 3 },
    { location: 'Lotus Tower', saarc: 20 },
  ];

  const data1 = [
    { no: "01", place: "Rhythm and Blues", timing: "8 pm – 5 am", address: "R. A. De Mel Mawatha, Colombo" },
    { no: "02", place: "Bally's Casino", timing: "24 hours", address: "34 McCallum Rd, Colombo 01000" },
    { no: "04", place: "W Lounge", timing: "7 pm – 5 am", address: "31 Horton Pl, Colombo 7" },
    { no: "06", place: "Floor by O! - Pub", timing: "11 am - 11 pm", address: "NO 43 1/2, Maitland Crescent 20000 Colombo, Sri Lanka" },
    { no: "07", place: "Cleopatra Nightclub", timing: "24 hours", address: "R. A. De Mel Mawatha, Liberty Plaza - Basement, Colombo 00700" },
  ];
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        <h2 className="text-center text-3xl font-semibold my-6">Tour Itinerary</h2>
        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 01 : Bandaranaike International Airport – Kandy

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>On arrival, you will be met and welcomed by our representative and transferred to Kandy.</li>
            <li>En route to Pinnewela Elephant Orphanage and spice garden.</li>
            <li>Proceed to Kandy city tour including Gem Museum, Temple of the Tooth Relic, and Royal Botanical Garden.</li>
            <li>Check-in to the hotel.</li>
            <li>Leisure at the hotel.</li>
            <li>Dinner and overnight stay at the hotel in Kandy.</li>
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

          <h1 className='text-teal-800 text-3xl font-semibold my-6'>Temple of the Tooth Relic, Kandy</h1>
          <p className='mt-5 italic'>The Temple of the Sacred Tooth relic of the Buddha Is the most important temple for the Sri Lankan Buddhists and was built in the 16th Century A.D. by king Wimaladharmasooriya, solely for the purpose of housing the tooth relic.</p>
          <h1 className='font-semibold italic mt-5'>Opening hours:</h1>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Temple 5:30 AM - 8:00 PM</li>
            <li>Puja 5:30 AM - 6:45 AM, 9:30 AM - 11:00 AM & 6:30 PM - 8:00 PM</li>
            <li>Dress code: Wear clothes that cover your legs and shoulders, and remove your shoes outside the temple.</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 02: Kandy – Nuwara Eliya

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Nuwara Eliya.</li>
            <li>En-route: Tea Factory, Tea Plantation, Hanuman Temple & Ramboda Falls.</li>
            <li>Check-in to the hotel and leisure at the hotel.</li>
            <li>Dinner & overnight stay at the hotel in Nuwara Eliya.</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 03: Nuwara Eliya - Bentota

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to Nuwara Eliya city tour including Hagkala Garden, Seetha Amman Temple & Gregory Lake.</li>
            <li>Then transfer to Bentota.</li>
            <li>Check-in to the hotel and leisure at the hotel.</li>
            <li>Dinner & overnight stay at the hotel in Bentota.</li>
          </ul>
          <p className='mt-5 px-5'>City Tour: While on your city tour in Colombo you may visit famous places including Galle Face Green, the Viharamahadevi Park, National Museum, Twin World Trade Center towers, Old Parliament Building, Fort district, Independence Hall at Independence Square, and prominent Buddhist, Hindu, Islam and Christian places of worship. (Entrance fees to sites not included). For shopping, you may visit Odel, House of Fashion, Beverly Street, Majestic City, Noritake, etc.,

          </p>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 04: Bentota

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After breakfast at the hotel, proceed to water sports, Madu River boat ride, and Turtle Farm.</li>
            <li>Leisure at the hotel.</li>
            <li>Dinner at the hotel.</li>
            <li>Overnight stay at the hotel in Bentota.</li>
          </ul>
        </div>
        <h2 className="text-center text-3xl font-semibold my-6">Entrance Fees Supplements per Person Rate in USD:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-teal-700 text-white">
                <th className="p-4 text-left min-w-[250px] border-b">
                  Name of the Sightseeing Location
                </th>
                <th className="p-4 text-left min-w-[250px] border-b">
                  SAARC
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b border-gray-200">{item.location}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.saarc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-center text-3xl font-semibold my-6">Night Life Places in Colombo</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-teal-700 text-white">
                <th className="p-4 text-left min-w-[100px] border-b">NO</th>
                <th className="p-4 text-left min-w-[250px] border-b">Place</th>
                <th className="p-4 text-left min-w-[200px] border-b">Timing</th>
                <th className="p-4 text-left min-w-[300px] border-b">Address</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b border-gray-200">{item.no}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.place}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.timing}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{item.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            The Above price inclusive of:

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Accommodation at the hotels mentioned</li>
            <li>Meal plan – HB/MAP</li>
            <li>Meeting and Assistance at the airport</li>
            <li>Transportation in a private air-conditioned vehicle</li>
            <li>Service of an English-speaking chauffeur guide/National Guide</li>
            <li>Per day, 2 water bottles per person (for groups above 10 people)</li>
            <li>A guide will be provided for nightlife experience</li>
            <li>Local Government Tax</li>
            <li>Toll charges</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Value Added Services on Complementary Basis:

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>5% ODEL voucher which is high quality clothing store at Colombo</li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            The Above price Exclusive of:

          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>Tips to guides/chauffeurs</li>
            <li>Entrance fee for any sightseeing</li>
            <li>Any fluctuations in the dollar component will affect the costing</li>
            <li>Any extra meal not mentioned in the above program during the tour</li>
            <li>Early check-in or late checkout charges</li>
            <li>Expenses of a personal nature</li>
            <li>Any service not specifically mentioned in the inclusion</li>
            <li>Visa fees (please log on to <a href="https://www.eta.gov.lk">www.eta.gov.lk</a>)</li>
            <li>Lunch or any extra meal not mentioned in the above program during the tour</li>
            <li>Camera or video permits</li>
          </ul>
        </div>
      </div>

      <LogosSection />
      <Footer />
    </>
  )
}

export default HoneymoonPackages