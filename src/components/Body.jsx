import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const userInStore = useSelector((store) => {
    return store.user.user;
  });
  return (
    <div>
      <div className="my-7 text-center font-bold text-xl">
        <p>Body </p>
        <p>user: {userInStore?.email} </p>
      </div>
    </div>
  );
};

export default Body;
