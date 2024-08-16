import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    addGptMovieResult: (state, action) => {
      state.movieNames = action.payload.movieNames;
      state.movieResults = action.payload.movieResults;
    },
  },
});

export const { addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
