import { createSlice } from '@reduxjs/toolkit';
import { USER } from 'types/User.model';

import { fetchUsers } from './UsersActions';

interface UsersState {
  users: USER[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const usersSlice = createSlice({
  name: 'SIGN_IN',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = '';
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
