import React, { useState } from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Genre from "../../Components/Genre/Genre";
import moment from "moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {FiPlayCircle} from 'react-icons/fi'
import "./Style.css";
import {IoIosCloseCircleOutline} from 'react-icons/io'
import VideoPopUp from "../../Components/VideoPopUp/VideoPopUp";
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
    const [PopUpClose ,setPopUpClose] = useState(false);

 const director = crews?.filter((dir)=>dir.job==='Director' || dir.job === 'Executive Producer');
 const writer = crews?.filter((wr)=> wr.job==='Screenplay' || wr.job=== 'Writer' || wr.job === 'Story' || wr.job=== 'Co-Executive Producer')
 
 
  const DateFormat = (time) => {
    const hour = Math.floor(time / 60);
    const minute = Math.floor(time % 60);
    return `${hour}h ${minute > 0 ? `${minute}m` : ""}`;
  };
   

  return (
    <div className="DetailContainer">
      <div className="BannerSection">
        <img src={bgBanner} alt="" />
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
            {
                data?.genres && data?.genres.map((genres,id)=>{
                    return(
                        <div className="Dgenre" key={id}>
                            {genres.name}
                            </div>
                    )
                })

            }
          </div>

          <div className="ratingAndTrailer">
            <div className="rating">
                    <div className="circle">
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

                    </div>
            </div>
            <div className="Dtrailer">
            <FiPlayCircle className="icon" onClick={()=>setPopUpClose(true)}/>
             <p>Watch Trailer</p>
            </div>

          </div>

          <div className="OverView">
            <h5>Overview</h5>
            <div className="overviewText">
                {data?.overview}
            </div>

          </div>

          <div className="stsRelease"> 
          <div className="status">
            Status : <span className="stsAns">{data?.status}</span>
          </div>
          <div className="release">
            Release :  <span className="stsAns">{moment(relaseDate).format('LL')}</span>
          </div>

          <div className="runtime">
            Runtime :  <span className="stsAns">{DateFormat(data?.runtime)}</span>
          </div>

          </div><hr />

          <div className="Director">
            <div className="preName">
            {
                director?.length > 1 ? "Directors : ":"Director : "
            }
            </div>
            <div className="directors">
{
    director && (
        director.map((dir,index)=>{
            return(
                <div className="dirName" key={index}>
                    { dir.name} {director?.length-1 != index && ","}
                    </div>
            )
        })
    )
}
            </div>
          </div><hr/>

          <div className="Director">
            <div className="preName">
            {
                writer?.length > 1 ? "Writers : ":"Writer : "
            }
            </div>
            <div className="directors">
{
    writer && (
        writer.map((dir,index)=>{
            return(
                <div className="dirName" key={index}>
                    { dir.name} {writer?.length-1 != index && ", "}
                    </div>
            )
        })
    )
}
            </div>
          </div><hr/>


          <VideoPopUp trigger={PopUpClose} videoId={video?.key} >
          <IoIosCloseCircleOutline onClick={()=>setPopUpClose(false)} className='close_btn'/>
          </VideoPopUp>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
