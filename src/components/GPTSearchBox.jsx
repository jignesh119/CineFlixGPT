import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import useGroqAPI from "../hooks/useGroqAPI";
import { addGptMovieResult } from "../utils/gptSlice";
import { tmdbApiOptions } from "../utils/constants";

const GPTSearchBox = () => {
  const preferredLanguage = useSelector((store) => store.config.lang);
  const [query, setQuery] = useState("");
  const { getGroqCompletion } = useGroqAPI();
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`query is ${query}`);
    (async () => {
      const res = await getGroqCompletion(
        `give me response in form of only names of movies as a ; seperated values for this query '${query}'? if the query is insufficient or inappropriate then only give me 'not found' as response. dont include any other text in the reponse except for ; seperated movie names or 'not found'`,
      );
      const response = res?.choices[0]?.message?.content;
      console.log(`response from groq in gptsearch `, JSON.stringify(response));
      if (response === "not found") setMovies([]);
      else {
        setMovies(response.split(";"));
        const promiseArray = movies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        console.log("tmdbResults", tmdbResults);

        dispatch(
          addGptMovieResult({
            movieNames: movies,
            movieResults: tmdbResults,
          }),
        );
      }
    })();
  };

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      tmdbApiOptions,
    );
    const json = await data.json();

    return json.results;
  };

  return (
    <div className="flex justify-center">
      <input
        className="p-2 border-black rounded-md mx-1"
        type="text"
        placeholder={lang[preferredLanguage].gptSearchPlaceholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        className="col-span-3 bg-red-600 p-2 rounded-lg"
        onClick={handleSubmit}
      >
        {lang[preferredLanguage].search}
      </button>
    </div>
  );
};

export default GPTSearchBox;
