import { configureStore, Middleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import axios from "axios";

const authMiddleware: Middleware = () => (next) => (action) => {
    const token = localStorage.getItem("token");
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }

    return axios.interceptors.response.use(
        () => {
            return next(action);
        },
        (error) => {
            if (error.response && error.response.status === 401) {
                localStorage.clear();
            }
            return Promise.reject(error);
        }
    );
};

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authMiddleware),
    });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];