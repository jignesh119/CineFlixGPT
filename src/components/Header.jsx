import React, { useEffect } from "react";
import userIcon from "../assets/userIcon.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { firebaseAuth, useFirebase } from "../context/firebase.jsx";
import { headerImg } from "../utils/constants.js";

const Header = () => {
  let user = "temp user";
  const firebase = useFirebase();
  let headerForLogin = !user ? "z-10 absolute" : "";
  //let headerStyle = `${headerForLogin} px-8 py-2 bg-gradient-to-b from-black w-screen`;
  let headerStyle = `z-10 fixed px-8 py-2 bg-gradient-to-b from-black w-screen`;
  const navigate = useNavigate();

  const handleSignOutUser = () => {
    firebase.signOutUser();
  };
  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChange((user) => {
      if (user) {
        const { uid, email, displayName } = firebaseAuth.currentUser;
        navigate("/browse");
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={headerStyle}>
      <div className="flex justify-between">
        <img className="w-20" src={headerImg} alt="login-logo" />
        {user && (
          <div className="flex p-2">
            <div className=" font-bold text-mono text-xl my-auto mx-auto flex justify-around">
              <Link to="/browse" className="text-white  p-2">
                Browse
              </Link>
              <Link to="/browse" className="text-white p-2">
                Body
              </Link>
              <Link
                to="/gptsearch"
                className="bg-purple-500 text-white rounded-lg p-2"
              >
                GPTSearch
              </Link>
            </div>
            <div className="flex p-2">
              <img className=" w-12 h-12" alt="userIcon" src={userIcon} />
              <button
                onClick={handleSignOutUser}
                className="font-bold text-white text-xl"
              >
                (SignOut)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
