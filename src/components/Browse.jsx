//browse page ->/browse
import React, { useEffect } from "react";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

//on auth state change -> change store state and redirect
const Browse = () => {
  return (
    <div className="w-auto ">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
