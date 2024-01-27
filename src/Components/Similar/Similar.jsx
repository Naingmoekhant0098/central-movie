import React from 'react'
import { UseFetch } from '../../Hooks/UseFetch'
import Carousel from '../Carousel/Carousel'
const Similar = ({mediaType , id}) => {
    const {data , loading} = UseFetch (`/${mediaType}/${id}/similar`)
  
  return (
    <div className='recommedationContainer'> 
    {
        data?.results && (
            <div>
                <h4>Similar {mediaType == 'movie' ? "Movies":"Tv Show"}</h4>
    <Carousel endPoint={mediaType} data={data} />
                </div>
        )
    }
    </div>
  )
}

export default Similar