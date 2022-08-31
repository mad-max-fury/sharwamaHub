import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, isLoggedIn: null },
  reducers: {
    // reducers
    setCredentials: (state, action) => {
      console.log(action.payload);
      const { user, access_token } = action.payload;
      state.user = user;
      state.token = access_token;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const getError = (state) => state.auth?.error;
export const getIsLoggedIn = (state) => state.auth?.isLoggedIn;
export const getToken = (state) => state.auth?.token;
export const getUser = (state) => state.auth?.user;
export const getAuth = (state) => state.auth;
export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
