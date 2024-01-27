import React from 'react'
import './Style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux';
const Actors = ({data}) => {
    const {url} = useSelector((state)=>state.home)
    
  return (
    data && (
    <div className='castContainer'>

<h4>Top Casts</h4>
<div className="casts">
<Swiper
        loop={true}
        navigation={true}
        breakpoints={{
          375: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 12,
            // spaceBetween: 10,
          },
        }}
      >
        {data &&
          data.map((item, index) => {
        const profile = item.profile_path ? url.profile + item?.profile_path : "";

            return (
              <SwiperSlide className="item" key={index}>
            <div className='cast'>
                <img src={profile} alt="" />
            </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
</div>
    </div>
    )
  )
}

export default Actors