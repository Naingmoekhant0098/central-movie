import React from "react";
import { UseFetch } from "../../Hooks/UseFetch";
import Carousel from "../Carousel/Carousel";
const Recommend = ({ mediaType, id }) => {
  const { data, loading } = UseFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <div className="recommedationContainer">
      {data?.total_results > 0 && (
        <div>
          <h4 className="mt-5">Recommended {mediaType == "movie" ? "Movies" : "Tv Show"}</h4>
          <Carousel endPoint={mediaType} data={data} />
        </div>
      )}
    </div>
  );
};

export default Recommend;
