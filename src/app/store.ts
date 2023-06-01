import { configureStore, Middleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { MiddlewareAPI, Dispatch, AnyAction } from 'redux';




const axiosInstance: AxiosInstance = axios.create();
const axiosMiddleware: Middleware<any> = (store: MiddlewareAPI) => {
    console.log(store, 78)
    axiosInstance.interceptors.request.use((config: any) => {
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    axiosInstance.interceptors.response.use((response: AxiosResponse) => {

        return response;
    }, (error) => {
        return Promise.reject(error);
    });

    return (next: Dispatch<AnyAction>) => (action: AnyAction) => {
        return next(action);
    };
};

const authMiddleware: Middleware = () => (next) => (action) => {
    const token = localStorage.getItem("token");
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
    return next(action)

};

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authMiddleware, axiosMiddleware),
    });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];