import React, { useEffect, useState } from "react";
import "./style.css";
import { UseFetch } from "../../Hooks/UseFetch";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { MdPercent } from "react-icons/md";
import Genre from "../../Components/Genre/Genre";
const Top = () => {
  const [topMovie, setTopMovie] = useState(null);
  const { url } = useSelector((state) => state.home);
  const { data, loading, error } = UseFetch("/movie/upcoming");
  useEffect(() => {
    setTopMovie(data.results?.[0]);
  }, [data]);
 
  
  return (
    <div className="topMovie">
      <div className="leftImageSection">
        <img src={url.poster + topMovie?.poster_path} className="pts" />
        <img src={url.backdrop + topMovie?.backdrop_path}  className="cvs"/>
      </div>
      <div className="rightContentSection">
      <span
          className=" "
          style={{
            color: "rgb(214, 89, 11)",
            textTransform: "uppercase",
            fontWeight: 900,
          }}
        >
          The Top One Movie
        </span>
        
<div>
<h4>{topMovie?.title || topMovie?.original_title
}</h4>
{<Genre ids={topMovie?.genre_ids?.slice(0, 1)}/>}
</div>
<p className="ov">{topMovie?.overview
}</p>
<div className="infos">
    <span >
        <div className="total">{topMovie?.popularity.toFixed(0)} 
        <FaPlus className=" topIcon ms-1"/></div>
        <span className=" botText  ">Popularity</span>
    </span>
    <span >
        <div className="total">{topMovie?.vote_average.toFixed(0)} 
        <MdPercent className=" topIcon ms-1" /></div>
        <span className=" botText ">Popularity</span>
    </span>
    <span className="total">
        <div>{topMovie?.vote_count.toFixed(0)} 
        <FaPlus className=" topIcon ms-1" /></div>
        <span className=" botText ">Popularity</span>
    </span>
     

</div>
      </div>
    </div>
  );
};

export default Top;
