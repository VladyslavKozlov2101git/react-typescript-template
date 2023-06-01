import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from '../features/Users/slice/UsersSlice'

export const rootReducer = combineReducers({ usersReducer })

export type RootState = ReturnType<typeof rootReducer>

