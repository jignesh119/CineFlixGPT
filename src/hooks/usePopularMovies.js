//hook to get and store PopularMovies data from popularMoviesAPI
//imported in components/Browse/secondaryComponent
import { tmdbApiOptions } from "../utils/constants.js";
import { addPopularMovies } from "../utils/moviesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?page=1";
    fetch(url, tmdbApiOptions)
      .then((res) => res.json())
      .then((data) => {
        //adding Popularmovies data to moviesSlice store
        dispatch(addPopularMovies(data.results));
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
