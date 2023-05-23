import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/Users/slice/UsersSlice'

const rootReducer = combineReducers({ usersReducer })

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]