//hook to get and store nowPlayingMovies data from api and add to store
//imported in components/Browse.jsx
import { tmdbApiOptions } from "../utils/constants.js";
import { addNowPlayingMovies } from "../utils/moviesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    fetch(url, tmdbApiOptions)
      .then((res) => res.json())
      .then((data) => {
        //adding movies data to moviesSlice store
        dispatch(addNowPlayingMovies(data.results));
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
