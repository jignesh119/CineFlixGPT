import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

//watched (list of movies)
//    list of movieCards
//now playing
//trending
//documentaries
const SecondaryContainer = () => {
  const nowPlayingMoviesInStore = useSelector((store) => {
    return store.movies?.nowPLayingMovies;
  });
  const popularMoviesInStore = useSelector((store) => {
    return store.movies.popularMovies;
  });
  const topRatedMoviesInStore = useSelector((store) => {
    return store.movies.topRatedMovies;
  });
  const upcomingMoviesInStore = useSelector((store) => {
    return store.movies.upcomingMovies;
  });
  return (
    <div className="bg-black">
      <div className="-mt-72 relative z-10 ">
        <MovieList title={"NowPlaying"} movies={nowPlayingMoviesInStore} />
        <MovieList title={"Popular"} movies={popularMoviesInStore} />
        <MovieList title={"Top Rated"} movies={topRatedMoviesInStore} />
        <MovieList title={"Upcoming"} movies={upcomingMoviesInStore} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
