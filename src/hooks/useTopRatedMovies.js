//hook to get and store TopRatedovies data from topRatedMoviesAPI
//imported in components/Browse/secondaryComponent
import { tmdbApiOptions } from "../utils/constants.js";
import { addTopRatedMovies } from "../utils/moviesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    fetch(url, tmdbApiOptions)
      .then((res) => res.json())
      .then((data) => {
        //adding Popularmovies data to moviesSlice store
        dispatch(addTopRatedMovies(data.results));
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
