import { combineReducers } from '@reduxjs/toolkit';

import { cachedAPI } from './cachedAPI';

import usersReducer from '../pages/Users/slice/UsersSlice';

export const rootReducer = combineReducers({
  usersReducer,
  [cachedAPI.reducerPath]: cachedAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
