import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,  // User should initially be null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;  // Sets user data when logging in
    },
    logout: (state) => {
      state.user = null;  // Clears user data on logout
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;  // Ensure you're accessing the correct user property

export default userSlice.reducer;
