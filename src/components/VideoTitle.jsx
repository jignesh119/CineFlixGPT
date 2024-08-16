//video title on top of trailer playing in mainComponent in /browse page
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white pt-[20%] px-24 w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className=" bg-white hover:bg-opacity-80 text-black p-4 px-12 text-xl rounded-lg">
          PlayNow
        </button>
        <button className="mx-2 bg-gray-500 hover:bg-gray-700 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
