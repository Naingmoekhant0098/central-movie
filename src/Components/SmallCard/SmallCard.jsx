import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import noPoster from "../../Assets/no_poster.jpg";
import Genre from "../Genre/Genre";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import "react-tabs/style/react-tabs.css";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

import moment from "moment";
import "./style.css";

const SmallCard = ({ item, endPoint, index }) => {
  const { url } = useSelector((state) => state.home);
  const posterUrl = item?.poster_path
    ? url.poster + item?.poster_path
    : noPoster;

  return (
    
      <Link
        to={`/${item?.media_type || endPoint}/${item?.id}`}
        style={{ textDecoration: "none" , position : 'relative' }}
        className="movieCardOne"
      >
        <div className={`  movieCard${item?.id}`}>
          <div className="posterImage1">
            <img
              src={posterUrl}
              alt="No Image"
              style={{ backdropFilter: "blur(10px)" }}
            />

            <div className="circle">
              <CircularProgressbar
                backgroundPadding={7}
                maxValue={10}
                value={item?.vote_average?.toFixed(1)}
                text={item?.vote_average?.toFixed(1)}
                styles={buildStyles({
                  textColor: "white",

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
          </div>

          <div className="contents">
            <h5>{item?.title || item?.name}</h5>
            <div>
              <h6>
                {item?.release_date || item?.first_air_date} |
                {<Genre ids={item?.genre_ids?.slice(0, 1)} />}
              </h6>
            </div>
          </div>

          <Tooltip
            anchorSelect={`.movieCard${item?.id}`}
            place="right"
            style={{ zIndex: 30 }}
            className="maintool"
          >
            <div className="tooltipBox ">
              <h5 className="mb-1">{item?.title || item?.name}</h5>
              <div
                className="mb-1"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                {" "}
                <Rating
                  readonly
                  initialRating={item?.vote_average.toFixed(0) - 5}
                  emptySymbol={<FaStar />}
                  fullSymbol={<FaStar style={{ color: "yellow" }} />}
                />
                <span style={{ fontSize: "12px" }}>({item?.vote_count})</span>
              </div>
              <span
                className="mb-1"
                style={{ opacity: 0.6, marginLeft: "-5px" }}
              >
                {" "}
                {<Genre ids={item?.genre_ids?.slice(0, 1)} />}
              </span>
              <span className="mb-1" style={{ fontSize: "12px", opacity: 0.6 }}>
                {moment(item?.release_date).format("LL")}
              </span>

              <span style={{ fontSize: "13px" }}>
                {item?.overview.substr(0, 200)}...
              </span>
            </div>
          </Tooltip>
        </div>
      </Link>
     
  );
};

export default SmallCard;
