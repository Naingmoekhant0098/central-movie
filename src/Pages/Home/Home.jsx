 import React from 'react'
 import './Style.css'
 import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './Trending/Trending'
import TopRated from './TopRated/TopRated'
import Popular from './Popular/Popular'
 const Home = () => {
   return (
     <div className='IndexPage'>
      <HeroBanner/>
      <Trending/>
      <TopRated />
      <Popular />
     </div>
   )
 }
 
 export default Home