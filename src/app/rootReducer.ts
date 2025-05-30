import { combineReducers } from '@reduxjs/toolkit';

import { cachedAPI } from '@services/cachedAPI';

import usersReducer from '@redux/UsersSlice/UsersSlice';

export const rootReducer = combineReducers({
  usersReducer,
  [cachedAPI.reducerPath]: cachedAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
