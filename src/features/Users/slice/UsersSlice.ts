import { User } from '../../../models/User.model';
import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './UsersActions';

interface UsersState {
  users: User[];
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
      .addCase(fetchUsers.fulfilled, (state) => {
        state.isLoading = false;
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
