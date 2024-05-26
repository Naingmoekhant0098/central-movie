import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchDataFromApi } from "../../Utils/Api";
import { useEffect } from "react";
import Select from "react-select";
import { UseFetch } from "../../Hooks/UseFetch";
import "./Style.css";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { PuffLoader } from "react-spinners";
const SearchResult = () => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [genre, setGenre] = useState("");
  const [sortby, setSortBy] = useState("");
  const { query } = useParams();
  const [Sortbymedia, setMedia] = useState("movie");
  const { data: genreList, loading } = UseFetch(`/genre/${Sortbymedia}/list`);
  const filters = {};
  const fetchSearchData = () => {
    fetchDataFromApi(
      `/search/multi?query=${query}&page=${pageNum}`,
      filters
    ).then((res) => {
      setData(res.results);
      setPageNum((num) => num + 1);
    });
  };
  console.log(Sortbymedia);
  const sortByData = [
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Rating Descending", value: "vote_average.desc" },
    { label: "Rating Ascending", value: "vote_average.asc" },
    { label: "Release Date Descending", value: "primary_release_date.desc" },
    { label: "Release Date Ascending", value: "primary_release_date.asc" },
    { label: "Title (A_Z)", value: "original_title.asc" },
  ];
  const MediaTypes = [
    { label: "Movies", value: "movie" },
    { label: "Tvs", value: "tv" },
  ];

  const NextPageSearchData = () => {
    fetchDataFromApi(
      `/search/multi?query=${query}&page=${pageNum}`,
      filters
    ).then((res) => {
      if (data) {
        setData([...data, ...res?.results]);
      } else {
        setData(res.results);
      }
      setPageNum((num) => num + 1);
    });
  };

  useEffect(() => {
    fetchSearchData();
  }, [query, Sortbymedia]);
  const onChange = (selectedOption, action) => {
    if (action.name === "genre") {
      setGenre(selectedOption);

      if (action.action !== "clear") {
        let genreID = selectedOption.map((gen) => gen.id);

        genreID = JSON.stringify(genreID).slice(1, -1);

        filters.with_genres = genreID;
      } else {
        delete filters.with_genre;
      }
    }
    if (action.name == "media") {
      setMedia(selectedOption.value);
    }

    if (action.name === "sortby") {
      setSortBy(selectedOption);
      if (action.action !== "clear") {
        filters.sort_by = selectedOption.value;
      } else {
        delete filters.sort_by;
      }
    }
    setPageNum(1);
    fetchSearchData();
  };

  if (loading) {
    return <div className=" w-100 d-flex " style={{height : '85vh', justifyContent :'center',alignItems :'center'}}>
       <PuffLoader color="#36d7b7" className=" mx-auto" />
    </div>;
  }

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
        <div className="selectContainer ">
          <Select
            name="media"
            defaultValue={Sortbymedia}
            options={MediaTypes}
            // getOptionLabel={(gen) => gen?.label}
            // getOptionValue={(gen) => gen.value}
            placeholder="Select Type"
            onChange={onChange}
            className=" sort"
            
          />
          <Select
            className=" sort"
            name="genre"
            value={genre}
            placeholder="Select Genres"
            options={genreList?.genres}
            getOptionLabel={(gen) => gen?.name}
            getOptionValue={(gen) => gen?.id}
            isMulti
            isClearable={true}
            onChange={onChange}
          />
          <Select
            name="sortby"
            value={sortby}
            options={sortByData}
            getOptionLabel={(gen) => gen.label}
            getOptionValue={(gen) => gen.value}
            placeholder="Select SortBy"
            onChange={onChange}
            className="sort"
          />
        </div>
      </div>

      <div className="Results">
        {data &&
          data.map((item, index) => {
            return (
              <MovieCard
                item={item}
                endPoint={"all"}
                index={index}
                key={index}
                className="items"
              />
            );
          })}
      </div>

      <div className="more mt-5">
        <button className=" shadow" onClick={() => NextPageSearchData()}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default SearchResult;
