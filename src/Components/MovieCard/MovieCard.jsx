import React from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import noPoster from '../../Assets/no_poster.jpg'
import Genre from "../Genre/Genre";
 import { useSelector } from 'react-redux';
 import './Style.css'

import './Style.css'
const MovieCard = ({item ,endPoint}) => {
    const { url } = useSelector((state) => state.home);
    const posterUrl = item?.poster_path
    ? url.poster + item?.poster_path
    : noPoster;
  return (
    <div>
           <Link to={`/${item?.media_type||endPoint}/${item?.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="movieCard">
                    <div className="posterImage">
                      <img src={posterUrl} alt="No Image" />

                      <div className="circle">
                        <CircularProgressbar
                        background='white'
                        backgroundPadding={7}
                          maxValue={10}
                          value={item?.vote_average?.toFixed(1)}
                          text={item?.vote_average?.toFixed(1)}
                          styles={buildStyles({
                            textColor: "black",
                            

                            pathColor: `${
                              item.vote_average?.toFixed(1) < 5
                                ? "red"
                                : item.vote_average?.toFixed(1) < 7
                                ? "orange"
                                : "green"
                            }`,
                            textSize: "25px",
                          })}
                        />
                      </div>
                      <div className="genre">
                        <Genre ids={item?.genre_ids?.slice(0, 1)} />
                      </div>
                    </div>

                    <div className="contents">
                      <h5>{item?.title || item?.name}</h5>
                      <div>
                        <h6>{item?.release_date || item?.first_air_date}</h6>
                      </div>
                    </div>
                  </div>
                </Link>
    </div>
  )
}

export default MovieCard