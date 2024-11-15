import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';
import { motion } from "framer-motion"

const Festivalsandevents = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <section>
        <div className="bg-gray-100 p-6">
          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">JANUARY</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>January – Duruthu Full Moon Poya</strong> – (Religious/Buddhist)</li>
              <li><strong>January – The Initial Aluth Sahal Mangallaya</strong> (New Rice Festival)</li>
              <li><strong>January – Patti Pongal</strong> – (Religious/Hindu/Agriculture related)</li>
              <li><strong>January – Patti Kiri Ithirima</strong> – (Customary/Sinhalese/Agriculture related)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              The southern coast and the North West coast are ideal for Whale and Dolphin spotting during the season from January
              to April. Large pods of Dolphins can be spotted a few miles offshore. Those who are lucky might also experience the
              sighting of a gigantic Blue Whale swimming in the deep seas. January is also a celebration of the creative arts and
              traditional Buddhist rituals. At the end of January, local artists gather in Colombo to exhibit their creative talents
              at the Annual Kala Pola – art fair. Meanwhile, during the full moon in January, the ancient Kelaniya Buddhist temple,
              just minutes away from the island’s capital, holds its annual perahera – a dazzling cultural procession with scores of
              elephants dressed in their finery, traditional dancers, drummers, flag bearers, and Buddhist monks, all walking in a
              procession in honor of Lord Buddha.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">FEBRUARY</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>February – The National Day</strong> – (Independence Day) (Customary/Political/Commemorating the Political Freedom attained from the British Empire)</li>
              <li><strong>February – Navam Full Moon Poya</strong> (Religious/Buddhist)</li>

            </ul>
            <p className="text-gray-700 mt-6">
              In the Kandyan capital, the much awaited Donald Steele Golf Tournament is held in February in the picturesque Victoria
              Golf and Country Resort. More excitement is unveiled on the streets of Colombo in February with the Navam Perehara that
              takes place on full-moon day. A treat for children and adults alike, this perehara show cases all the traditional dance
              forms including mask dancers, Kandyan and Kavadi dancers, drummers and glittering elephants. A number of elephants from
              various parts of the country make the long journey to Colombo along with their mahouts for this event.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">MARCH</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>March – Maha Shivaratri</strong> – (Religious/Hindu)</li>
              <li><strong>March – Milad-Un-Nabi</strong> (Religious/Islam)</li>
              <li><strong>March – Medin Full Moon Poya</strong> – (Religious/Buddhist)</li>
              <li><strong>March – Good Friday</strong> – (Religious/Catholic/Christian)</li>
              <li><strong>March – Easter </strong> – (Religious/Catholic/Christian)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              School cricket in Sri Lanka is very popular and many of the annual ‘big’ matches are held in March of these the annual Royal Thomian and Mahinda Richmond cricket matchs are much anticipated and is good fun for both players and spectators. The annual hot air balloon festival also takes place in Colombo during March. Participants from around the world attend this festival.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">APRIL</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>April  – Watching the new moon for the new Lunar year </strong> – (Customary/Astrology related)</li>
              <li><strong>April  – Day Prior to Sinhala and Tamil New Year</strong> (Religious/Customary/Buddhist/Hindu/Sinhalese/Agriculture related/Astrology related)</li>
              <li><strong>April  – Sinhala and Tamil New Year</strong> – (Religious/Customary/Buddhist/Hindu/Sinhalese/Agriculture related/Astrology related)</li>
              <li><strong>April  – National herbal oil ceremony</strong> – (Customary/Buddhist/Sinhalese/Astrology related)</li>
              <li><strong>April  – Bak Full Moon Poya</strong> – (Religious/Buddhist)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              April is a holiday month in Sri Lanka where the Sinhalese and Tamil communities celebrate the dawning of the New Year. It’s a time when families get together to conduct traditional rituals, religious ceremonies, offer thanks for a good rice harvest, an wish peace and prosperity to all for the coming new year. Celebrations and traditional rituals are best seen in the rural areas. Colombo empties out during this time when most escape to the cooler hills or the sandy beaches. In anticipation of the holiday rush, Nuwara Eliya – the upcountry hill station, spruces itself up and various activities ranging from golf tournaments, motor cross races, and flower shows are all held.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">MAY</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>May  – May Day</strong> – (Customary/Political)</li>
              <li><strong>May  – Watching the new moon for the new Solar year</strong> (Customary/Astrology related)</li>
              <li><strong>May  – Vesak Full Moon Poya (Vesak)</strong> – (Religious/Buddhist)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              On Vesak full-moon Poya day in May, Buddhists all over the world venerate the life of Lord Buddha – his birth, enlightenment and passing away. Homes, villages and cities in Sri Lanka are lit up in serene splendor with oil lamps, intricate hand made lanterns, and colourful Pandals depicting the life story of Lord Buddha are erected across the island. May is also the beginning of the surfing period in Arugam Bay in the southeast. Listed as one of ten top surf spots in the world, Arugam Bay is a popular youthful haunt for surfers and holiday makers. The turquoise seas of the coast off Trincomalee in the East are also perfect at this time for snorkelling as well as whale and dolphin spotting excursions.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">JANUARY</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>January – Duruthu Full Moon Poya</strong> – (Religious/Buddhist)</li>
              <li><strong>January – The Initial Aluth Sahal Mangallaya</strong> (New Rice Festival)</li>
              <li><strong>January – Patti Pongal</strong> – (Religious/Hindu/Agriculture related)</li>
              <li><strong>January – Patti Kiri Ithirima</strong> – (Customary/Sinhalese/Agriculture related)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              The southern coast and the North West coast are ideal for Whale and Dolphin spotting during the season from January
              to April. Large pods of Dolphins can be spotted a few miles offshore. Those who are lucky might also experience the
              sighting of a gigantic Blue Whale swimming in the deep seas. January is also a celebration of the creative arts and
              traditional Buddhist rituals. At the end of January, local artists gather in Colombo to exhibit their creative talents
              at the Annual Kala Pola – art fair. Meanwhile, during the full moon in January, the ancient Kelaniya Buddhist temple,
              just minutes away from the island’s capital, holds its annual perahera – a dazzling cultural procession with scores of
              elephants dressed in their finery, traditional dancers, drummers, flag bearers, and Buddhist monks, all walking in a
              procession in honor of Lord Buddha.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">JANUARY</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>January – Duruthu Full Moon Poya</strong> – (Religious/Buddhist)</li>
              <li><strong>January – The Initial Aluth Sahal Mangallaya</strong> (New Rice Festival)</li>
              <li><strong>January – Patti Pongal</strong> – (Religious/Hindu/Agriculture related)</li>
              <li><strong>January – Patti Kiri Ithirima</strong> – (Customary/Sinhalese/Agriculture related)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              The southern coast and the North West coast are ideal for Whale and Dolphin spotting during the season from January
              to April. Large pods of Dolphins can be spotted a few miles offshore. Those who are lucky might also experience the
              sighting of a gigantic Blue Whale swimming in the deep seas. January is also a celebration of the creative arts and
              traditional Buddhist rituals. At the end of January, local artists gather in Colombo to exhibit their creative talents
              at the Annual Kala Pola – art fair. Meanwhile, during the full moon in January, the ancient Kelaniya Buddhist temple,
              just minutes away from the island’s capital, holds its annual perahera – a dazzling cultural procession with scores of
              elephants dressed in their finery, traditional dancers, drummers, flag bearers, and Buddhist monks, all walking in a
              procession in honor of Lord Buddha.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">JANUARY</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>January – Duruthu Full Moon Poya</strong> – (Religious/Buddhist)</li>
              <li><strong>January – The Initial Aluth Sahal Mangallaya</strong> (New Rice Festival)</li>
              <li><strong>January – Patti Pongal</strong> – (Religious/Hindu/Agriculture related)</li>
              <li><strong>January – Patti Kiri Ithirima</strong> – (Customary/Sinhalese/Agriculture related)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              The southern coast and the North West coast are ideal for Whale and Dolphin spotting during the season from January
              to April. Large pods of Dolphins can be spotted a few miles offshore. Those who are lucky might also experience the
              sighting of a gigantic Blue Whale swimming in the deep seas. January is also a celebration of the creative arts and
              traditional Buddhist rituals. At the end of January, local artists gather in Colombo to exhibit their creative talents
              at the Annual Kala Pola – art fair. Meanwhile, during the full moon in January, the ancient Kelaniya Buddhist temple,
              just minutes away from the island’s capital, holds its annual perahera – a dazzling cultural procession with scores of
              elephants dressed in their finery, traditional dancers, drummers, flag bearers, and Buddhist monks, all walking in a
              procession in honor of Lord Buddha.
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-yellow-600 mb-4">JANUARY</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>January – Duruthu Full Moon Poya</strong> – (Religious/Buddhist)</li>
              <li><strong>January – The Initial Aluth Sahal Mangallaya</strong> (New Rice Festival)</li>
              <li><strong>January – Patti Pongal</strong> – (Religious/Hindu/Agriculture related)</li>
              <li><strong>January – Patti Kiri Ithirima</strong> – (Customary/Sinhalese/Agriculture related)</li>
            </ul>
            <p className="text-gray-700 mt-6">
              The southern coast and the North West coast are ideal for Whale and Dolphin spotting during the season from January
              to April. Large pods of Dolphins can be spotted a few miles offshore. Those who are lucky might also experience the
              sighting of a gigantic Blue Whale swimming in the deep seas. January is also a celebration of the creative arts and
              traditional Buddhist rituals. At the end of January, local artists gather in Colombo to exhibit their creative talents
              at the Annual Kala Pola – art fair. Meanwhile, during the full moon in January, the ancient Kelaniya Buddhist temple,
              just minutes away from the island’s capital, holds its annual perahera – a dazzling cultural procession with scores of
              elephants dressed in their finery, traditional dancers, drummers, flag bearers, and Buddhist monks, all walking in a
              procession in honor of Lord Buddha.
            </p>
          </div>
        </div>
      </section>
      <LogosSection />
      <Footer />
    </>
  )
}

export default Festivalsandevents