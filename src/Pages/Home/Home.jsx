 import React from 'react'
 import './Style.css'
 import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending'
import TopRated from './TopRated/TopRated'
import Popular from './Popular/Popular'
import Ads from '../AdsSection/Ads'
import Top from '../Top/Top'
 const Home = () => {
   return (
     <div className='IndexPage'>
      <HeroBanner/>
      <Trending/>
      <Ads/>
      <TopRated />
      <Top/>
      <Popular />
     </div>
   )
 }
 
 export default Home