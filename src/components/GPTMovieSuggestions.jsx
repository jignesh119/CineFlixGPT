import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames)
    return <div className="bg-transparent p-4 m-4  text-white ">.</div>;

  return (
    <div className="p-4 m-4 bg-transparent text-white bg-opacity-90">
      <div>
        <p className="text-white font-mono">
          * hit search again if you dont see any movies{" "}
        </p>
        <MovieList title={"Suggested Movies"} movies={movieResults[0]} />
      </div>
    </div>
  );
};
export default GptMovieSuggestions;
