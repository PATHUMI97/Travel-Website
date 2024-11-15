import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const Importantfacts = () => {
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <h1 className='text-6xl text-bold text-center'>SRI LANKA VISA AND ETA ONLINE</h1>
      <div className="container mx-auto py-8 px-4">
        {/* Paragraph Section */}
        <div className=" mb-8">
          <p className="text-black">
            Just before departure, it is important to contact the embassies and consulates to ensure that the entry conditions for the destination have not changed. We recommend scanning or photocopying all your mandatory documents, including your passport, air tickets, visa copy (if applied online), national ID, hotel confirmation voucher, travel itinerary, medical and travel insurance, driving permit, and foreign currency. Keep these copies separate from the originals. This will make it easier to replace the documents in case of loss or theft.
          </p>
        </div>
        <h2 className="text-2xl text-black font-bold mb-4">GETTING A VISA ONLINE VIA ETA</h2>
        <p>It is now possible to get a tourist visa for Sri Lanka to advance online. Before visiting Sri Lanka, perform the following steps to obtain a visa of 30 days:</p>
        <br />  <ul className="list-disc list-inside space-y-2">
          <li><strong>Visit the official website of electronic travel authorization Sri Lanka – ETA (www.eta.gov.lk) several days before arrival.</strong> </li>
          <li><strong>Follow the application procedures and pay with a credit card.</strong></li>
          <li><strong>Once authorized, print the confirmation visa.</strong></li>
        </ul>
        <br />
        <p>It is still possible to get visas in embassies abroad Sri Lankan and those arriving without a visa can head to the desk specially provided for this purpose at the Bandaranaike International Airport, but they will have to wait with the crowd other travelers without a visa and pay a small penalty.</p>
        <br />
        <p>On the basis of reciprocity, citizens of the Republic of Singapore and the Republic of Maldives are exempt from the requirement to obtain ETA to visit Sri Lanka.</p>
        <br />
        <p>Only the Department of Immigration and Emigration in Colombo, Sri Lanka (DI & E) has the authority to issue ETA.</p>
        <h1 className='text-base font-bold'>For more details Please visit –</h1>
        <a href="https://www.eta.gov.lk/slvisa/" target="_blank" rel="noopener noreferrer">
        www.eta.gov.lk
        </a> <br />
        <a href="http://www.immigration.gov.lk/" target="_blank" rel="noopener noreferrer">
        www.immigration.gov.lk
        </a>
      </div>
      <LogosSection />
      <Footer />
    </>
  )
}

export default Importantfacts