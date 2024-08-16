import React, { useRef, useState } from "react";
import validateData from "../utils/validate.js";
import { firebaseAuth, useFirebase } from "../context/firebase.jsx";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { loginBgImg } from "../utils/constants.js";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const firebase = useFirebase();
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn((prevState) => {
      return !prevState;
    });
  };
  const handleSubmit = () => {
    const msg = validateData(email.current.value, password.current.value);
    const userNameValue = userName?.current?.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (!isSignIn) {
      //signup
      if (!msg) {
        firebase
          .signUpWithEmailAndPassword({ emailValue, passwordValue })
          .then((val) => {
            const { uid, email } = firebaseAuth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: userNameValue }),
            );
          })
          .catch((err) => {
            setErrorMsg(err.code);
          });
      } else {
        dispatch(removeUser());
        setErrorMsg(msg);
      }
    } else {
      //signin
      if (!msg) {
        firebase
          .loginWithEmailAndPassword({ emailValue, passwordValue })
          .then((val) => {
            const { uid, email } = firebaseAuth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: userNameValue }),
            );
          })
          .catch((err) => {
            setErrorMsg(err.code);
          });
      } else {
        dispatch(removeUser());
        setErrorMsg(msg);
      }
    }
  };
  return (
    <div>
      <div className="absolute">
        <img src={loginBgImg} alt="login-bg-image" className="object-cover" />
      </div>
      <form
        className="p-12 w-3/12 absolute mx-auto my-36 right-0 left-0 bg-black text-white rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "SignUp"}
        </h1>
        {!isSignIn && (
          <input
            ref={userName}
            type="text"
            name="userName"
            placeholder="User Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="font-bold text-red-600 text-sm py-2">{errorMsg}</p>
        <button
          className="p-4 my-6 w-full rounded-lg bg-red-700 "
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p className="text-gray-400 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn ? (
            <>
              New to Netflix
              <span className="text-white font-bold"> SignUp now</span>
            </>
          ) : (
            <>
              Already a user?
              <span className="text-white font-bold"> Login now</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
