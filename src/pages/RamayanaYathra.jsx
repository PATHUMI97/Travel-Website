import React from 'react'
import Footer from '../components/Footer/Footer';
import LogosSection from '../components/LogosSection';
import Slideshow from '../components/Slideshow/Slideshow';

const RamayanaYathra = () => {

  const sightseeingData = [
    { location: 'Colombo Lotus Tower', saarc: 20 },
    { location: 'Colombo National Museum', saarc: 6 },
    { location: 'Gangarama Temple, Colombo', saarc: 3 },
    { location: 'Pinnawala Elephant Orphanage', saarc: 10 },
    { location: 'Dambulla Rock Temple', saarc: 12 },
    { location: 'Sigiriya', saarc: 19 },
    { location: 'Kandy Temple', saarc: 10 },
    { location: 'Royal Botanical Garden in Kandy', saarc: 12 },
    { location: 'Hakgala Gardens, Nuwara Eliya', saarc: 12 },
    { location: 'Gregory Lake', saarc: 5 },
  ];
  return (
    <>
      <div className='relative z-0 h-60 sm:h-[20vh] md:h-[80vh] lg:h-60'>
        <Slideshow />
      </div>
      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Title Section */}
        <h2 className="text-center text-3xl font-semibold my-6">Tour Itinerary</h2>

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 01 : Bandaranaike International Airport – Kandy
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>On arrival you will be met and welcomed by our representative and transferred to Dambulla.</li>
            <li>En-route Munneshwaram Temple & Manavari temple in Negombo</li>
            <li>Then proceed to Dambulla Cave Temple</li>
            <li>Check-in to the hotel & Leisure at the hotel</li>
            <li>Dinner & Overnight stay at hotel- Dambulla</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Munneshwaram temple is an important regional Hindu temple complex in Sri Lanka. It has been in existence at least since 1000 CE, although myths surrounding the temple associate it with the popular Indian epic Ramayana, and its legendary hero-king Rama. The temple is one of five ancient temples dedicated to Shiva in the region.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-134303-1-qs0bq4kpxscdev9cu0ycn47oqzox9jlerbvv9p71l0.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-134318-1-qs0bpqh539t2kptu4cuy3prru7mf231fpe3l2jry6c.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

          <p className="mt-4 text-gray-700">Many a noted historians believe Sigiriya to have a connect with Ramayana’s Ravana. It is believed that the plateau top was the site of Ravana’s majestic palace, made of solid gold and crafted by Kubera, the God of Wealth, around 50 centuries ago. One look at the site, and you would know how big an architectural feat this place must have been. With around 1000 stairs to the top, it used to have a lift for Ravana and his visitors to get to the top. Imagine this place with a lift that worked some 50 centuries ago! Would have surely given Tesla a run for money back then.If you look closely towards the bottom of this rock plateau, you will find a number of caves. As believed, one of these caves is where Ravana imprisoned Sita, after abducting her. This story can very well be true for the cave walls have (still) brightly-coloured paintings, depicting scenes from the age of Ramayana. Other than that, you will spot a number of women portraits, believed to be portraits of the many wives of Ravana.</p>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-135512-qs0bxxmgp913u9x48wfsunaid77o71l5hyy1rfmbwk.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-135523-qs0bxzi52x3ohhudxx91zmtfjyyemfsm6890pzjjk4.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

          <p className="mt-4 text-gray-700">
            Amidst Sri Lanka’s volatile history, the Dambulla Golden Cave Temple, a UNESCO World Heritage Site, is a peaceful refuge. During the reign of Anuradha Pura kings, promoting Buddhism was quintessential to their campaign. They built several monasteries with Buddhist murals enshrined inside.
          </p>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-135659-qs0c0li02cocqi1up1vqwz3iyi34065rv5hkpno69w.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-135707-qs0c13cxo7csv3bwsrlnqcla8tn32f4o9lvstwxozo.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>
        </div>


      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Title Section */}

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 02 : Dambulla – Trincomalee
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After Breakfast at the hotel proceed to Trincomalee</li>
            <li>Then proceed to Koneshwaram temple, Kinniya hot well spring, Nilaveli beach</li>
            <li>Check-in to the hotel & Leisure at the hotel</li>
            <li>Dinner & Overnight stay at hotel- Trincomalee</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Thirukoneswaram temple is a classical medieval Hindu temple complex located in Trincomalee the Eastern Capital of Sri Lanka which is directly linked to the Ramayana Yatra in Sri Lanka as well. This is also known as the Thirukonamalai Konesar Temple – the temple of the thousand pillars and Daskina, Then Kailasam. This is important Hindu religious pilgrimage center in Eastern Province which is famous Ramayana trail related site in Sri Lanka. According to the Ramayana story in Sri Lanka , this is a wonderful temple located on a rock promontory which is built by Rishi Agastya on the instructions of Lord Shiva who was impressed by the devotion of king Ravana. It is also said in the epic of Ramayana that Lord Rama built the second lingam here to get rid of the Brahmahasthi Dosham which was caused by malediction of killing Ravana who was a Brahmin. It is also believed that Lord Rama has offered his prayers here too to get rid of this Dosham. This temple is respected as one among the Pancha Ishwarams in Sri Lanka and Ramayana related sites in Sri Lanka.
          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-152427-qs0ftp8ixed06wwf3tdq3vky8sbhqtgb1r47pmdwp0.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-152434-qs0ftr47b2fku4tosu6z8v3vfk2867nrq0f6o6b4ck.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

          <p className="mt-4 text-gray-700">
            Kanniya Hot Springs is a site with hot water wells located in Eastern Province, Trincomalee District of Sri Lanka. Average temperature of these wells is 42 Celsius and the temperature is slightly different to one another. Kanniya Hot spring is popular tourist destination in Trincomalee district and both local & foreign travelers.
          </p>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-152558-qs0fwezqo62tqcyf8zmxb6ww0uxnzc8e36ypmecypw.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-152608-qs0fwfxkv0441yx23i1jvoocm8t171c4fbm73obkjo.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

        </div>


      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Title Section */}

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 03 : Trincomalee – Nuwara Eliya
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After Breakfast at the hotel proceed to Nuwara Eliya</li>
            <li>En-route Tea Factory, Tea Plantation, Hanuman temple & Ramboda Falls</li>
            <li>Check-in to the hotel & Leisure at the hotel</li>
            <li>Dinner & Overnight stay at hotel- Nuwara Eliya</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Sri Bhakta Hanuman Temple is one of the important Hanuman Temples in Sri Lanka located on summit of the very beautiful picturesque mountain in Ramboda 30 KM north to Nuwara Eliya, the gateway to the tea country hill station of Sri Lanka. This Hanuman Temple in Ramboda was constructed by Chinmaya Mission of Sri Lanka. Shri Bhakta Hanuman temple is dedicated to the God Hanuman and this is one of important sites of Ramayana Tour in Sri Lanka. Visitors can witness the 18 feet Hanuman statue which is the tallest Hanuman statue in Sri Lanka established inside the Shri Bhakta Hanuman Temple in Ramboda.This Hanuman Temple was constructed in 1999 and it is believed that Hanuman was searching for Sita Devi and still there are some Ramayana facts available in this area e.g. a village called “Ravana Goda” close to this Bhakta Hanuman Temple. The Tamil word for Ramboda, Rampadai, means “Rama’s force”, this is why Ramboda is believed to be the area where Rama collected his troops. Also its is believed this was the place where Lord Hanuman took rest while on his way to search Sita as per the Ramayana yatra Sri Lanka. Traditionally, Hanuman was not much popular among Sri Lankan Tamil devotees as he indeed is in India, because he devastated parts of the island with his burning tail. But in recent times Hindu missionaries and local Tamil spiritual leaders began building shrines for worshipping Hanuman in Sri Lanka also.
          </p>

          {/* Images Section */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-152902-qs0g1smhs1fw6155ubc2ku1ue8fa0zl3htcqhedv44.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-152931-qs0g1ui65pigt92fjc5bptkrl060gdsk62npfyb2ro.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

          <p className="mt-4 text-gray-700">
            Sita Amman temple is the only Hindu Temple which dedicated to Princess Sita in Sri Lanka. This is one of the important Ramayana related places of Sri Lanka. Sita Amman Temple is located in Nuwara Eliya. Sita Eliya area (10 Min drive from Nuwara Eliya Town) close to Ashoka Vatika (This Ashoka Vatika has converted as a Hakgala Botanic Gardens Sri Lank). Sita Amman temple is one of the important Sri Lanka Ramayana Sites Which we can find when travelling along the Ramayana Trail Tour Sri Lanka from Kandy towards Ella via Nuwara Eliya.With reference to the Ramayana proof of Sri Lanka it is believed that the Sita devi was kept captive at this site by King Ravana. There is a stream by the side of the temple where that runs from the hill, catered to the needs of Sita Devi during her stay at Ashok Vatika. She is also said to have bathed in this stream. About a century ago of three idols were discovered in the stream.
          </p>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-154027-qs0giz4ap0ykdg6riqol5hz59rqsptsh6um89gwtdw.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-154038-qs0gj0zz2p150o417rhuahi2gjhj57zxv3x780u11g.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

        </div>


      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Title Section */}

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 04 : Nuwara Eliya
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After Breakfast at the hotel proceed to Nuwara Eliya city tour including Hakgala Garden, Seetha Amman temple & Gregory Lake</li>
            <li>En-route Tea Factory, Tea Plantation, Hanuman temple & Ramboda Falls</li>
            <li>Leisure at the hotel</li>
            <li>Dinner & Overnight stay at hotel- Nuwara Eliya</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Hakgala Botanical Garden is the second largest garden among the five botanical gardens in Sri Lanka and is contiguous to Hakgala Strict Nature Reserve, which is the home to a variety of wild life, including bears, monkeys and birds. Situated some 5 kilometers South of Nuwara Eliya, the road to Hakgala along the Badulla road is a pleasant downhill drive, mostly through pine forests. The comfortable cool weather that prevails throughout the year compliments the exotic flora and fauna, creating a true paradise. It boasts thousands of flora species.The main sections of the garden are the rock garden, water garden, fern garden, Japanese garden and the seed room. Hakgala is a temperate hill-country garden, where the lovely low-country lotus and water lily mingles in their serene simplicity with sophisticated English roses, pre-historic looking ferns, and endemic orchids. The intimidating Hakgala rock provides an awe inspiring backdrop to the garden, rising 450 meters over it. According to the legends, the history of Hakgala Gardens dates back to the time of Ramayanaya; an epic love story of the east. Queen Sita, captured and brought to Sri Lanka, is said to have been hidden in this vicinity and the Hakgala Gardens is said to be one of the pleasure gardens of King Ravana called Ashok Vatika.Originally used for the cultivation of cinchona and tea, the present day Hakgala Gardens was established in 1861 under the patronage of Dr. G H W Thawaites. The development of Hakgala Gardens as a botanic garden was initiated by Mr William Nock in 1884 and since then many varieties of flowers and trees, both local and foreign, have been introduced.A network of small creeks, complete with wooden bridges, is seen throughout the garden, creating a magical atmosphere for the magnificent rose garden, conifers, cedars, cypresses, variety of pines and English oaks that make their home in the garden. The flora of the garden include Old tea trials, Eucalyptus, Camphor, Pinus, Melaleuca, Casuarina, Cupressusmacrocarpa, Cinnamomumcamphora, Syncarpiaglomulifera, Rhodoleiachampioni, Michelianilagirica, Rhododendron zeylandicum, Streptosolenjamesonii, and Santolinachamaecyparissus.
          </p>

          {/* Images Section */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-154602-qs0gs6xbpjks7sssp83w3o8uysbd6zdq4gwmo58udg.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-154619-qs0gs7v5wdm2jerfjqiio60bk66qeohgglk45f7g78.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 05 : Nuwara Eliya – Ella
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After Breakfast at the hotel proceed to Ella</li>
            <li>Then proceed to Ravana Caves, Ravana falls, Dowa Rock temple, Divurumpola temple</li>
            <li>Check-in to the hotel & Leisure at the hotel</li>
            <li>Check-in to the hotel & Leisure at the hotel</li>
            <li>Dinner & Overnight stay at hotel- Ella</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Ravana cave and tunnel network is a massive creation by King Ravana located in Ella Sri Lanka connected with cities / dairy farms & airports. It is proved beyond doubt of the architecture brilliance of the King Ravana.          </p>
          {/* Images Section */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155227-qs0h21aha31vssi27za8potmx1sqsvgj56uolgnf7o.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155239-qs0h26xif39lqg9vb1q04neehd0y322x5yrlh4f26c.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

          <p className="mt-4 text-gray-700">
            Divurumpola is a Buddhist Temple located close to Welimada town (4 KM) on Nuwara Eliya – Badulla main road in the Central Province of Sri Lanka. Divrumpola temple or Divrumpola Raja Maha Viharaya is directly connected with Ramayana trail in Sri Lanka. According to the Ramayana in Sri Lanka It is believed that Divurumpola temple is the place where Sita underwent the famous fire ordeal Agni Pariksha or “Agni” test in order to prove her chastity to God Rama after being rescued by him where she came unscathed and proved her innocence and purity. Considering these historical factors, Divurumpola is one of the important Ramayana Historical places in Sri Lanka. In Sinhala language Divurumpola means a “Place of oath”. Divurumpola Temple (Raja Maha Viharaya) is a major religious site for Hindus. This temple is a revered site and hundreds of Hindus visit it daily. Divurumpola Raja Maha Viharaya is also a Buddhist temple and we can find some Buddhist stupas and sculptures of Buddha in the complex. There are sculptures of Hindu God Rama, Devi Sita, and Lord Hanuman here. From here we can clearly see the Isthreepura Mountain where Sita was held captive in a cave castle. So this place is considered as the Ramayana sites in Sri Lanka . Today this Buddhist Temple is worship by both Buddhist and Hindu people of Sri Lanka and this Ramayana Site is considering as one of the Ramayana Historical Place in Sri Lanka.
          </p>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155458-qs0h5weldkcbj2vznnf0yppuu2r2g2st0bejmex5ms.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155505-qs0h5ya9r8ew6at9co8a3p8s0uhsvh09okpikyudac.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>

          <p className="mt-4 text-gray-700">
            Dowa Rajamaha Viharaya lies on the Badulla-Bandarawela road. The temple is quite famous because of its 38 feet Buddha statue which is carved in the granite rock. It has been built King Walagamba while he was taking refuge in the Uva province after an Indian invasion.Dowa Rajamaha Viharaya has been built in the 1st century BC by King Walagamba. It is one of the mysterious and legendary temples in the hill country. It also consists of a very unique sculpture named Mahayana which tells an interesting story of the previous lives lived by Lord Buddha. There is also an uncompleted image of Buddha that is slowly breaking away.There are a small stupa and a cave functions as a stupaghara for the stupa. There is also a tunnel behind this cave which is guarded by a figure of Clay King Cobras. The tunnel is 11-kilo meters long and it has been cemented off due to the evil acts of treasure hunters. This tunnel used to connect the Ravana Maha Viharaya at Ella and the Bogoda Raja Maha viharaya.There is also an image house and it has colorful Buddha statues and consists of 3 chambers. There are two guardians named as Watuka and Kuvera at the entrance. In the second chamber, there is a stunning Makara Thorana and a row of Buddha images along with paintings. There are a wooden door and two reclining Buddha statues in the entrance to the 3rd chamber. On a higher elevation is a Bo tree and a small pond surrounding a rock which has a natural water sprout and water keeps continuously flowing.
          </p>

          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155648-qs0h8dp9etqk61aa680l1l6n9oixrbnb0ldo7p8r7o.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155655-qs0h8fkxsht4t97jv8tu6kpkgg9o6purouon695yv8.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>
        </div>


      </div>

      <div className="p-6 bg-gray-100 text-gray-800">
        {/* Title Section */}

        {/* Day and Description Section */}
        <div className="p-4  mb-6">
          <h3 className="bg-teal-800 text-white px-4 py-2 font-semibold text-lg rounded">
            Day 06 : Ella - Colombo
          </h3>
          <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700">
            <li>After Breakfast at the hotel & proceed to Colombo</li>
            <li>Then Proceed to Colombo City tour including Kelaniya Temple & Shopping</li>
            <li>Check-in to the hotel & Leisure at the hotel</li>
            <li>Dinner & Overnight stay at hotel- Colombo</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Kelaniya Temple built on the banks of the Kelaniya River is one of the most sacred sites of Sri Lanka. It is believed Buddha together with 500 Arahats (Supremely enlightened beings) visited Kelaniya on the Wesek day of the Buddhist Era 2531 and expounding of the Dhamma, the Buddhist doctrine to the inhabitants of the island. Buddha’s timely visit to the island resulted in quelling an imminent war between two kings named Chulodara and Mahodara over a jewel–encrusted throne. Buddha having preached the doctrine on the disputed throne offered to him ensued lasting peace between the two kings. The great stupa built upon the site enshrining the throne was since then called Kelaniya Raja Maha Vihara.Kelaniya Temple believed to had been built in the era prior to the chronologically recorded history of   Sri Lanka (since 543 B.C) was renovated by Prince Uttiya, brother of King Devanampiyatissa following the arrival Arahat Mahinda in 307 BC. According to the Mahawansa, King Devanampiyatissa’s brother Uttiya renovated the vihara for the first time. Prince Uttiya also built the first ever residential quarters of the Buddhist monks (Sanghawasa) there. The ancient temple was destroyed time and again by the Dravidian invaders from Southern India. Each time the temple had been reconstructed. The medieval temple was destroyed by the Portuguese in 1510 yet reconstructed by King Kirthi Sri Rajasingha in the year 1967. New Temple was initiated in 1927 and completed in 1946 under the patronage of philanthropist Mrs. Helena Wijewardene.
          </p>

          {/* Images Section */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-4">
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155853-qs0hcckq9n656riqzxrvkl4pk8yq9bei88jh5rcwxw.png" alt="Temple 1" className="w-full h-60 object-cover rounded-lg shadow-md" />
            <img src="https://diferanciatours.com/wp-content/uploads/elementor/thumbs/Screenshot-2024-08-02-155926-qs0hcdikgh7fidhdug6i52w65mu3h0i8kd6yn1biro.png" alt="Temple 2" className="w-full h-60 object-cover rounded-lg shadow-md" />
          </div>
        </div>

        <h2 className="text-center text-3xl font-semibold my-6">Entrance Fees Supplements per Person Rate in USD:</h2>

        <div className="p-8">
          {/* Responsive container */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="p-4 text-left min-w-[250px]">Name of the Sightseeing Location</th>
                  <th className="p-4 text-left min-w-[100px]">SAARC /Countries</th>
                </tr>
              </thead>
              <tbody>
                {sightseeingData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4">{item.location}</td>
                    <td className="p-4">{item.saarc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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


      <LogosSection />
      <Footer />
    </>
  )
}

export default RamayanaYathra