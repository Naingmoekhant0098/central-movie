import React from 'react'
import { UseFetch } from '../../../Hooks/UseFetch'
import { useState } from 'react'
import SwitchTabs from '../../../Components/SwitchTabs/SwitchTabs';
import './Style.css'
 import Carousel from '../../../Components/Carousel/Carousel';
const TopRated = () => {
    const [endPoint , setEndPoint] = useState('movie');
    const {data , loading} = UseFetch(`/${endPoint}/top_rated`);
    const onChangeTab = (tab)=>{
        
        setEndPoint(tab==='Movies' ? 'movie' : 'tv');
    }
  return (
    <div className='carouselSection'>
        <div className='carouselHeader '>
            <SwitchTabs title='Top Rated' data={['Movies','Tv Series']} onChangeTab={onChangeTab} />
      <Carousel data={data} endPoint={endPoint} />
        </div>
    </div>
  )
}

export default TopRated