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
import ImagePopUp from "../../Components/ImagePopUp/ImagePopUp";

const DetailBanner = ({ video, crews }) => {
  const { url } = useSelector((state) => state.home);
  const { mediaType, id } = useParams();
  const { data, loading } = UseFetch(`/${mediaType}/${id}`);
  const title = data?.original_title || data?.name;
  const relaseDate = data?.release_date || data?.first_air_date;
  const poster = data?.poster_path ? url.poster + data?.poster_path : "";
  const bgBanner = data?.backdrop_path
    ? url.backdrop + data?.backdrop_path
    : "";
  const [PopUpClose, setPopUpClose] = useState(false);
  const[imagePopup ,setImagePopup]=useState(false)
  const [disImage,setDisImage] = useState('')
 
  const { data: reviews, loading: loader } = UseFetch(
    `/${mediaType}/${id}/reviews`
  );
  const { data: images, loading: load } = UseFetch(
    `/${mediaType}/${id}/images`
  );

  const director = crews?.filter(
    (dir) => dir.job === "Director" || dir.job === "Executive Producer"
  );
  const writer = crews?.filter(
    (wr) =>
      wr.job === "Screenplay" ||
      wr.job === "Writer" ||
      wr.job === "Story" ||
      wr.job === "Co-Executive Producer"
  );

  const DateFormat = (time) => {
    const hour = Math.floor(time / 60);
    const minute = Math.floor(time % 60);
    return `${hour}h ${minute > 0 ? `${minute}m` : ""}`;
  };

  if (loading) {
    return <div className=" w-100 d-flex " style={{height : '85vh', justifyContent :'center',alignItems :'center'}}>
       <PuffLoader color="#36d7b7" className=" mx-auto" />
    </div>;
  }

  return (
    <div className="DetailContainer">
      <div className="BannerSection">
        <img src={bgBanner} alt="" />
        <FiPlayCircle className="icon" onClick={() => setPopUpClose(true)} />
        <div className="opacity_layer"></div>
      </div>
      <div className="Dcontents">
        <div className="Poster">
          <img src={poster} alt="" />
        </div>
        <div className="contentDetail">
          <h4>
            {title} ({moment(relaseDate).format("YYYY")})
          </h4>
          <div className="tagLine">{data?.tagline}</div>
          <div className="Detailgenres">
            {data?.genres &&
              data?.genres.map((genres, id) => {
                return (
                  <div className="Dgenre" key={id}>
                    {genres.name}
                  </div>
                );
              })}
          </div>

          <div className="ratingAndTrailer">
            <div className="rating">
              {/* <div className="circle">
                    <CircularProgressbar
                        background='white'
                        backgroundPadding={5}
                          maxValue={10}
                          value={data?.vote_average?.toFixed(1)}
                          text={data?.vote_average?.toFixed(1)}
                          styles={buildStyles({
                            textColor: "black",
                            

                            pathColor: `${
                                data.vote_average?.toFixed(1) < 5
                                ? "red"
                                : data.vote_average?.toFixed(1) < 7
                                ? "orange"
                                : "green"
                            }`,
                            textSize: "25px",
                          })}
                        />

                    </div> */}

              <FaImdb className="rticon1" />
              <span>{data?.vote_average?.toFixed(1)}/10</span>
            </div>
            <div className="rating">
              <FaCalendarDays className="rticon" />
              <span>{moment(relaseDate).format("LL")}</span>
            </div>
            <div className="rating">
              <FaRegClock className="rticon" />
              <span>{DateFormat(data?.runtime)}</span>
            </div>
          </div>
          <Tabs>
            <TabList className="tab">
              <Tab className="tb">Overview</Tab>
              <Tab className="tb">Reviews</Tab>
              <Tab className="tb">Gallery</Tab>
            </TabList>

            <TabPanel>
              <div className="OverView px-2" style={{overflow: 'hidden'}}>
                <h5 className=" mb-2">Overview</h5>
                <div className="overviewText ">{data?.overview}</div>
              </div>

              <div className="stsRelease px-2 ">
                <div className="status">
                  <span className="s"> Status : </span>
                  <span className="stsAns">{data?.status}</span>
                </div>
                <div className="release">
                  <span className="s">Budget :</span>{" "}
                  <span className="stsAns">
                    {data?.budget ? "$" + data?.budget : "Unknown"}
                  </span>
                </div>

                <div className="runtime">
                  <span className="s"> Popularity: </span>
                  <span className="stsAns">{data?.popularity}</span>
                </div>
              </div>
              <hr />

              <div className="Director px-2">
                <div className="preName">
                  {director?.length > 1 ? "Directors" : "Director"}
                </div>
                <div className="directors">
                  {director?.length > 0 ? (
                    director.map((dir, index) => {
                      return (
                        <div className="dirName" key={index}>
                          {dir.name} {director?.length - 1 != index && ","}
                        </div>
                      );
                    })
                  ) : (
                    <div className="dirName">Unknown</div>
                  )}
                </div>
              </div>
              <hr />

              <div className="Director px-2">
                <div className="preName">
                  {writer?.length > 1 ? "Writers " : "Writer "}
                </div>
                <div className="directors">
                  {writer?.length > 0 ? (
                    writer.map((dir, index) => {
                      return (
                        <div className="dirName" key={index}>
                          {dir.name} {writer?.length - 1 != index && " , "}
                        </div>
                      );
                    })
                  ) : (
                    <div className="dirName">Unknown</div>
                  )}
                </div>
              </div>
              <hr />
            </TabPanel>
            <TabPanel>
              {reviews?.results?.length > 0 ? (
                <div className="reviewss">
                  {reviews &&
                    reviews?.results?.map((review) => {
                      return (
                        <div className="review">
                          <div className="user">
                            <img
                              src={
                                review?.author_details?.avatar_path !== null
                                  ? url?.profile +
                                    review?.author_details?.avatar_path
                                  : "https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg"
                              }
                              alt="not found"
                            />
                          </div>
                          <div className="review-content ">
                            <div className="usename">
                              <div className="name">
                                @{review?.author_details?.username}
                              </div>
                              <div className="date">
                                {moment(review?.created_at).fromNow()}
                              </div>
                            </div>

                            <div className="m-0 mb-1">
                              <Rating
                                readonly
                                initialRating={
                                  review?.author_details?.rating - 5
                                }
                                emptySymbol={<FaStar />}
                                fullSymbol={
                                  <FaStar style={{ color: "yellow" }} />
                                }
                              />
                            </div>

                            <div className="content">{review?.content}</div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <h5 style={{fontSize : '16px'}}>No reviews yet</h5>
              )}
            </TabPanel>
            <TabPanel>
              <div className="imagess">
                {images?.backdrops &&
                  images.backdrops?.map((img, index) => {
                    if (index < 20) {
                      return <img src={url?.backdrop + img?.file_path} onClick={()=>{setImagePopup(!imagePopup),setDisImage(url?.backdrop + img?.file_path)}}  />;
                    }
                  })}
              </div>
            </TabPanel>
          </Tabs>

          <VideoPopUp trigger={PopUpClose} videoId={video?.key}>
            <IoIosCloseCircleOutline
              onClick={() => setPopUpClose(false)}
              className="close_btn"
            />
          </VideoPopUp>
          <ImagePopUp trigger={imagePopup} setImagePopup={setImagePopup} image={disImage}/>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
