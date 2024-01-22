import { createSlice } from '@reduxjs/toolkit';
import { authInitialState } from '../initialStates';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUserInLocalState: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    RemoveUserFromLocalState: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUserInLocalState, RemoveUserFromLocalState } =
  authSlice.actions;
export default authSlice.reducer;
