import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import configReducer from "./configSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    config: configReducer,
  },
});

export default appStore;
