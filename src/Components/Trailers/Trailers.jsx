import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Style.css";
import {FiPlayCircle} from 'react-icons/fi'
import { useState } from "react";
import VideoPopUp from "../VideoPopUp/VideoPopUp";
import {IoIosCloseCircleOutline} from 'react-icons/io'
const Trailers = ({ videos }) => {
    const [PopUpClose ,setPopUpClose] = useState(false);
    const [video , setVideo ] = useState()
  return (
    <div className="trailersContainer">
      <h4>Official Videos</h4>
      <div className="trailers">
        <Swiper
          loop={true}
          navigation={true}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
        >
          {videos &&
            videos.map((item, index) => {
              const tr = `https://img.youtube.com/vi/${item?.key}/mqdefault.jpg`;
               
              return (
                
                <div>
                    <SwiperSlide  key={index}>
                  <div className="trailer">
                    <img src={tr} alt="" />
                    <FiPlayCircle className="icon" onClick={()=>
                        {
                            setPopUpClose(true)
                        setVideo(item?.key)
                        }
                        } />
                  </div>
                </SwiperSlide>

                     
                </div>
              );
            })}
        </Swiper>
      </div>

      <VideoPopUp trigger={PopUpClose} videoId={video} >
          <IoIosCloseCircleOutline onClick={()=>setPopUpClose(false)} className='close_btn'/>
          </VideoPopUp>
    </div>
  );
};

export default Trailers;
