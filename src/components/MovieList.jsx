//component of list of movies (array of movie cards)
//used in /browse->secondaryContainer
import React from "react";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-white font-bold text-2xl py-4">{title}</h1>
      <div className="flex justify-center items-center overflow-x-scroll ">
        {movies ? (
          movies.map((movie) => {
            return (
              <div>
                <MovieCard
                  className="block"
                  key={movie?.id}
                  posterPath={movie?.poster_path}
                />
              </div>
            );
          })
        ) : (
          <MovieCard posterPath={"1E5baAaEse26fej7uHcjOgEE2t2.jpg"} />
        )}
      </div>
    </div>
  );
};

export default MovieList;
