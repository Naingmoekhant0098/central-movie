import React, { useState } from "react";
import "./Style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { UseFetch } from "../../Hooks/UseFetch";
import { Link } from "react-router-dom";

const Actors = ({ data }) => {
  
  const { url } = useSelector((state) => state.home);
   
  
  return (
    data && (
      <div className="castContainer">
        <h4>Top Casts</h4>
        <div className="casts">
          <Swiper
            loop={true}
            navigation={true}
            breakpoints={{
              375: {
                slidesPerView: 4,
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
                slidesPerView: 10,
                // spaceBetween: 10,
              },
            }}
          >
            {data &&
              data.map((item, index) => {
                const profile = item.profile_path
                  ? url.profile + item?.profile_path
                  : "";

                return (
                  <SwiperSlide className="item" key={index}>
                    <Link to={`/person/${item?.id}`} className="" style={{textDecoration : 'none',color : 'white'}}>
                    <div className="cast">
                      <img src={profile} alt="" />
                      <div>
                        <div className="name">{item?.name || item?.original_name}</div>
                        <span className="character">{item?.character}</span>
                      </div>
                    </div>
                    </Link>

                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    )
  );
};

export default Actors;
