//comp displayed in movieLists of browse page
import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 px-3">
      <img alt="movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
