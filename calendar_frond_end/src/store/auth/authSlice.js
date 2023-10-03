import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "cheking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
        state.status = 'authenticated';
        state.user = payload;
        state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin } = authSlice.actions;
