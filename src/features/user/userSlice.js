import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    setUserLogout: (state) => {
      state.name = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUserLogin, setUserLogout } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserId = (state) => state.user.id;

export default userSlice.reducer;
