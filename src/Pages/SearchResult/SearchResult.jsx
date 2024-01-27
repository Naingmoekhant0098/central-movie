import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchDataFromApi } from "../../Utils/Api";
import { useEffect } from "react";

import "./Style.css";
import MovieCard from "../../Components/MovieCard/MovieCard";
const SearchResult = () => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const { query } = useParams();

  const fetchSearchData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res.results);
        setPageNum((num) => num + 1);
      }
    );
  };

  const NextPageSearchData =()=>{
    
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
    .then((res)=>{
       
       if(data){
        setData([...data,...res?.results])
 
       }else{
        setData(res.results);
       }
       setPageNum((num) => num + 1);
    })
   }
 

  useEffect(() => {
    fetchSearchData();
  }, [query]);

  return (
    <div className="searchContainer">
      <div className="searchResults mb-4">
        {data?.length > 0 ? (
          <div className="searchResulttitle">
            <h5 className="">
              Search {data.total_results > 1 ? "results" : "result"} of "{query}
              ""
            </h5>
          </div>
        ) : (
          <div className="searchResultNotFound">
            <h6>Search Result No Found</h6>
          </div>
        )}
      </div>

      <div className="Results">
        {
          data && (
            data.map((item,index)=>{
              
              return(
                <MovieCard item={item} endPoint={'all'}  key={index} className='items'/>
              )
            })
          )
        }
      </div>
       
    <div className="more">
    <button onClick={()=>NextPageSearchData()}>More</button>
    </div>
      
    </div>
  );
};

export default SearchResult;
