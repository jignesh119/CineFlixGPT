import React from "react";
import { loginBgImg } from "../utils/constants";
import GPTSearchBox from "./GPTSearchBox";
import GptMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed -z-10">
        <img src={loginBgImg} alt="login-bg-image" className="object-cover " />
      </div>
      <div className=" absolute flex top-7 mt-56 flex-col">
        <GPTSearchBox />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
//w-full h-full -> object-cover
