import React from 'react'
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Destination from './pages/Destination'
import SpecialOffers from './pages/SpecialOffers'
import AboutUs from './pages/AboutUs'
import CntactUs from './pages/CntactUs'
import AboutSrilanka from './pages/AboutSrilanka'
import Whentovisit from './pages/Whentovisit'
import Festivalsandevents from './pages/Festivalsandevents'
import Foodanddrinks from './pages/Foodanddrinks'
import Importantfacts from './pages/Importantfacts'
import Weather from './pages/Weather'
import RamayanaYathra from './pages/RamayanaYathra'
import NightLife from './pages/NightLife'
import HoneymoonPackages from './pages/HoneymoonPackages'
import KandyPerahera from './pages/KandyPerahera'
import HeelOya from './pages/HeelOya'
import ValentinedPackages from './pages/ValentinesPackages'
import LeisurePackages from './pages/LeisurePackages'
import FiveDaysPackage from './pages/FiveDaysPackage'
import SevenDaysPackages from './pages/SevenDaysPackages'




// import PlacesRoute from './pages/PlacesRoute'
// import NoPage from './pages/NoPage'

const App = () => {
  useEffect(() => {
    document.body.classList.add("m-0");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/specialoffers' element={<SpecialOffers />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contactus' element={<CntactUs />} />
            <Route path='/aboutsrilanka' element={<AboutSrilanka />} />
            <Route path='/whentovisitsrilanka' element={<Whentovisit />} />
            <Route path='/festivalandevents' element={<Festivalsandevents />} />
            <Route path='/foodanddrinks' element={<Foodanddrinks />} />
            <Route path='/facts' element={<Importantfacts />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/ramayanayathra' element={<RamayanaYathra />} />
            <Route path='/nightLife' element={<NightLife />} />
            <Route path='/honeymoonpackages' element={<HoneymoonPackages />} />
            <Route path='/kandyperahera' element={<KandyPerahera />} />
            <Route path='/heeloya' element={<HeelOya />} />
            <Route path='/valentinedpackages' element={<ValentinedPackages />} />
            <Route path='/leisurepackages' element={<LeisurePackages />} />
            <Route path='/fivedayspackages' element={<FiveDaysPackage />} />
            <Route path='/sevendayspackages' element={<SevenDaysPackages />} />
            
            {/* <Route path='/blogs' element={<Blogs />} />
            <Route path='/blog/:id' element={<BlogsDetails />} />
            <Route path='/places' element={<PlacesRoute />} />
            <Route path='*' element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App