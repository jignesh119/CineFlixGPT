import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import configReducer from "./configSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer,
  },
});

export default appStore;
