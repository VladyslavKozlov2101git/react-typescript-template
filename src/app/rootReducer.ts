import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from '../features/Users/slice/UsersSlice';
import { cachedAPI } from './cachedAPI';

export const rootReducer = combineReducers({
  usersReducer,
  [cachedAPI.reducerPath]: cachedAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
