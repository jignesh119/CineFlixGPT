//hook to fetch trailerVideo and add it store and returns the trailerData read from store
//used in VideoBackground.jsx comp
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tmdbApiOptions } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`;
    fetch(url, tmdbApiOptions)
      .then((res) => res.json())
      .then((json) => {
        const filteredData = json.results.filter(
          (video) => video.type == "Trailer",
        );
        const trailerData = filteredData ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailerData));
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return trailerVideo;
};

export default useMovieTrailer;
