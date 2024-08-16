import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import configReducer from "./configSlice.js";
import gptReducer from "./gptSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    config: configReducer,
    gpt: gptReducer,
  },
});

export default appStore;
