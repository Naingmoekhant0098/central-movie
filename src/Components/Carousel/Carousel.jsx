import React from "react";
import "./Style.css";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import "swiper/css";
import MovieCard from "../MovieCard/MovieCard";

const Carousel = ({ data, endPoint }) => {
  return (
    <div className="Movies ">
      <Swiper
        loop={true}
        navigation={true}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {data?.results &&
          data?.results.map((item, index) => {
            return (
              <SwiperSlide className="item" key={index} >
                <MovieCard item={item} endPoint={endPoint} index={index} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carousel;
