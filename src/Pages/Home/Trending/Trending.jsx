import React from 'react'
import { UseFetch } from '../../../Hooks/UseFetch'
import { useState } from 'react'
import SwitchTabs from '../../../Components/SwitchTabs/SwitchTabs';
import './Style.css'
import Carousel from '../../../Components/Carousel/Carousel';
const Trending = () => {
    const [endPoint , setEndPoint] = useState('day');
    const {data , loading} = UseFetch(`/trending/all/${endPoint}`);
    const onChangeTab = (tab)=>{
        
        setEndPoint(tab==='Daily' ? 'day' : 'week');
    }
  return (
    <div className='carouselSection '>
        <div className='carouselHeader'>
            <SwitchTabs title='Trending' data={['Daily','Weekly']} onChangeTab={onChangeTab} />
            <Carousel data={data} endPoint={endPoint} />

        </div>
    </div>
  )
}

export default Trending