import React, { useState } from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import { useFetcher, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Genre from "../../Components/Genre/Genre";
import moment from "moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FiPlayCircle } from "react-icons/fi";
import "./Style.css";
import { IoIosCloseCircleOutline, IoMdAdd } from "react-icons/io";
import VideoPopUp from "../../Components/VideoPopUp/VideoPopUp";
import Spinner from "../Spinner/Spinner";
import { PuffLoader } from "react-spinners";
import { FaImdb } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import MovieCard from "../../Components/MovieCard/MovieCard";
import SmallCard from "../../Components/SmallCard/SmallCard";
import ImagePopUp from "../../Components/ImagePopUp/ImagePopUp";
const PersonDetailBanner = ({ detail, images, movies, series, loading }) => {
  const { url } = useSelector((state) => state.home);
  const [string, setString] = useState(150);
  const[imagePopup ,setImagePopup]=useState(false)
  const [disImage,setDisImage] = useState('')
 
  const bgBanner =
    movies?.[movies?.length - 1]?.backdrop_path != null
      ? url.backdrop + movies?.[movies?.length - 1]?.backdrop_path
      : url.backdrop + movies?.[1]?.backdrop_path;
  const poster = detail?.profile_path ? url.profile + detail?.profile_path : "";

  if (loading) {
    return <div className=" w-100 d-flex " style={{height : '85vh', justifyContent :'center',alignItems :'center'}}>
       <PuffLoader color="#36d7b7" className=" mx-auto" />
    </div>;
  }
  return (
    <div className="DetailContainer">
      <div className="BannerSection">
        <img src={bgBanner} alt="" />
        <div className="opacity_layer"></div>
      </div>
      <div className="Dcontents">
        <div className="Poster">
          <img src={poster} alt="" />
          <div className="stsRelease1">
            <div className="status1">
              <span className="s"> Gender : </span>
              <span className="stsAns">
                {detail?.gender == 2 ? "Male" : "Female"}
              </span>
            </div>
            <div className="status1">
              <span className="s">Birthday :</span>{" "}
              <span className="stsAns">{detail?.birthday}</span>
            </div>

            <div className="status1">
              <span className="s"> Popularity: </span>
              <span className="stsAns">{detail?.popularity}</span>
            </div>
            <div className="status1">
              <span className="s"> Place Of Birth: </span>
              <span className="stsAns">{detail?.place_of_birth}</span>
            </div>
          </div>
        </div>
        <div className="contentDetail">
          <h4>
            {detail?.name}({moment(detail?.birthday).format("YYYY")})
          </h4>
          <div className="tagLine">
            {detail?.biography.substr(0, string)}
            {string < detail?.biography?.length && "....."}
            {string > 150 ? (
              <span
                className=" text-primary cursor-pointer text-sm"
                style={{ cursor: "pointer", fontSize: "12px", fontWeight: 600 }}
                onClick={() => setString(150)}
              >
                Show Less
              </span>
            ) : (
              <span
                className="text-primary "
                style={{ cursor: "pointer", fontSize: "12px", fontWeight: 600 }}
                onClick={() => setString(detail?.biography.length)}
              >
                Show More
              </span>
            )}
          </div>

          <Tabs>
            <TabList className="tab">
              <Tab className="tb">Images</Tab>
              <Tab className="tb">Movies</Tab>
              <Tab className="tb">Series</Tab>
            </TabList>

            <TabPanel>
              <div className="imagesss" style={{ marginTop: "10px" }}>
                {images &&
                  images.map((img, index) => {
                    if (index < 20) {
                      return <img src={url?.backdrop + img?.file_path} onClick={()=>{setImagePopup(!imagePopup),setDisImage(url?.backdrop + img?.file_path)}}  />;
                    }
                  })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="imagesss">
                {movies &&
                  movies.map((movie, index) => {
                    return (
                      <SmallCard
                        item={movie}
                        endPoint={"movie"}
                        key={index}
                        className="items"
                      />
                    );
                  })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="imagesss">
                {series &&
                  series.map((movie, index) => {
                    return (
                      <SmallCard
                        item={movie}
                        endPoint={"tv"}
                        key={index}
                        className="items"
                      />
                    );
                  })}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <ImagePopUp trigger={imagePopup} setImagePopup={setImagePopup} image={disImage}/>
    </div>
  );
};

export default PersonDetailBanner;
