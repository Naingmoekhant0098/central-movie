import React from "react";
import { Route, Routes, useFetcher } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Nav from "./Pages/Nav/Nav";
import Footer from "./Pages/Footer/Footer";
import ShareLayout from "./Pages/ShareLayout/ShareLayout";
import { useEffect, useState } from "react";
import { getApiConf, getGenre } from "./CreateSlice/UrlSlice";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { fetchDataFromApi } from "./Utils/Api";
import Detail from "./Pages/Detail/Detail";
import ScrollToTop from "./Components/ScrollToTop";
import PersonDetail from "./Pages/PersonDetail/PersonDetail";

const App = () => {
  // const {url}= useSelector((state)=>state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    getConfgDataFromApi();
    getGenreFromApi();
  }, []);

  const getConfgDataFromApi = () => {
    // const {data} = UseFetch('/configuration')
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        poster: res.images.secure_base_url + "original",
        backdrop: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
       
      dispatch(getApiConf(url));
    });
  };

  const getGenreFromApi = async () => {
    const promise = [];
    const endPoints = ["tv", "movie"];
    const allGenre = {};

    endPoints.forEach((res) => {
      promise.push(fetchDataFromApi(`/genre/${res}/list`));
    });

    const data = await Promise.all(promise);
    data.map(({ genres }) => {
      return genres.map((res) => (allGenre[res.id] = res));
    });

    dispatch(getGenre(allGenre));
  };
  return (
    <>
    <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<ShareLayout />}>

          <Route index element={<Home />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/:mediaType/:id" element={<Detail />} />
          {/* <Route path='*' element={<NotFount/>} /> */}
          <Route path="/person/:id" element={<PersonDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
