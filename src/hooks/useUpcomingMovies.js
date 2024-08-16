//hook to get and store upcomingMovies data from upcomingMoviesAPI
//imported in components/Browse/secondaryComponent
import { tmdbApiOptions } from "../utils/constants.js";
import { addUpcomingMovies } from "../utils/moviesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
    fetch(url, tmdbApiOptions)
      .then((res) => res.json())
      .then((data) => {
        //adding Popularmovies data to moviesSlice store
        dispatch(addUpcomingMovies(data.results));
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
