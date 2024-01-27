import React from 'react'
import './Style.css'
import { UseFetch } from '../../Hooks/UseFetch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Genre from '../../Components/Genre/Genre'
import DetailBanner from './DetailBanner'
import Recommend from '../../Components/Recommendation/Recommend'
import Similar from '../../Components/Similar/Similar'
import Actors from '../../Components/Actors/Actors'
import Trailers from '../../Components/Trailers/Trailers'
const Detail = () => {
    const {mediaType,id} = useParams();
    const {data,loading} = UseFetch(`/${mediaType}/${id}/videos`)
    const {data : credits , loading:creditLoaing} =  UseFetch(`/${mediaType}/${id}/credits`)
     
  return (
    <div>
        <DetailBanner video={data?.results?.[0]} crews={credits?.crew} />
        <div className='belowSection'>
          <Actors data={credits?.cast} />
          <Trailers videos={data?.results} />
            <Recommend mediaType={mediaType} id={id} />
            <Similar mediaType={mediaType} id={id} />
        </div>
    </div>
  )
}

export default Detail