//browse page ->/browse
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

//on auth state change -> change store state and redirect
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const user = useSelector((store) => {
    return store.user.user;
  });
  return (
    <div className="w-auto ">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
