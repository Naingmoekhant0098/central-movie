import React, { useState } from 'react'
import './Style.css'
import { UseFetch } from '../../Hooks/UseFetch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PersonDetailBanner from './PersonDetailBanner'
 
const PersonDetail = () => {
    const {id} = useParams();
     
    const {data : persons , loading} = UseFetch(`/person/${id}`);
    const {data : images , loading : loader} = UseFetch(`/person/${id}/images`);
    const {data : movies} = UseFetch(`/person/${id}/movie_credits`);
    const {data : series} = UseFetch(`/person/${id}/tv_credits`);
   
   
  return (
    <div>
        {/* <DetailBanner video={data?.results?.[0]} crews={credits?.crew} /> */}
        <PersonDetailBanner detail={persons} images={images?.profiles} loading={loading} movies={movies.cast}  series={series.cast}/>
    </div>
  )
}

export default PersonDetail