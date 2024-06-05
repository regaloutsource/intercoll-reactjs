import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure(state, action) {
      state.token = null;
      state.isAuthenticated = false;
      state.error = action.payload.error;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

const authReducer = authSlice.reducer;

export const {loginSuccess,loginFailure,logout} = authSlice.actions;
export default authReducer ;