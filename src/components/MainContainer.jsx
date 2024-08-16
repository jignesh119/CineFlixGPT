import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle.jsx";
import VideoBackground from "./VideoBackground.jsx";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies?.nowPLayingMovies;
  });
  //
  //EARLY RETURN
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
