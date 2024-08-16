import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      console.log(`returning ${JSON.stringify(action.payload)}`);
      state.user = action.payload;
      //return action.payload; //.payload=what we pass during dispatch(addUser(PAYLOAD))
    },
    removeUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
