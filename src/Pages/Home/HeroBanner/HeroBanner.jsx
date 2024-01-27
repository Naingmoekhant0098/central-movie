import React from "react";
import { UseFetch } from "../../../Hooks/UseFetch";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
 import { useNavigate } from "react-router-dom";
import "./Style.css";
const HeroBanner = () => {
  const [bg, setBg] = useState();
  const [query,setQuery] = useState();
  const { url } = useSelector((state) => state.home);
const navigate = useNavigate();
  const { data, loading, error } = UseFetch("/movie/upcoming");

  useEffect(() => {
    const bgd =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBg(bgd);
  },[data]);

 const searchSubmit=()=>{
  navigate(`/search/${query}`)

 }

  return (
    <div className="Banner">
      {!loading && (
        <div className="bgImage">
          <img src={bg} alt="Background Image error" />
        </div>
      )}

      <div className="opacity_layer"></div>

      <div className="wrapper">
        <div className="contentWrapper">
          <h1>Welcome</h1>
          <p>
            Million of movies , Tv shows and people to discover . Explore now
          </p>
          <div className="search d-flex">
            <input
              type="search"
              
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onKeyUp={(e)=>setQuery(e.target.value)}
            />

            
              <button className="searchBtn" onClick={()=>searchSubmit()}>
              <CiSearch />
              </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
