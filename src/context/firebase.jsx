import { useContext, createContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//import { getDatabase, set, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENTID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
//const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FireBaseContext = createContext(null);
export const useFirebase = () => useContext(FireBaseContext);

export const FirebaseProvider = (props) => {
  const signUpWithEmailAndPassword = ({ emailValue, passwordValue }) => {
    return createUserWithEmailAndPassword(
      firebaseAuth,
      emailValue,
      passwordValue,
    );
  };
  //const putData = (key, data) => set(ref(database, key), data);
  //{EMAILVALUE MUST BE SAME NAME WHEN BEING PAASD IN LOGIN.JSX}
  const loginWithEmailAndPassword = ({ emailValue, passwordValue }) => {
    return signInWithEmailAndPassword(firebaseAuth, emailValue, passwordValue);
  };
  const signUpWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };
  const onAuthStateChange = (callback) => {
    return onAuthStateChanged(firebaseAuth, callback);
  };
  const signOutUser = () => {
    signOut(firebaseAuth);
  };
  return (
    <FireBaseContext.Provider
      value={{
        signUpWithEmailAndPassword,
        //putData,
        loginWithEmailAndPassword,
        signUpWithGoogle,
        onAuthStateChange,
        signOutUser,
      }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};
