import toast from 'react-hot-toast';

import { Middleware, configureStore } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { rootReducer } from './rootReducer';

import { authPath } from '../routes/paths';

import { cachedAPI } from '@services/cachedAPI';

const authMiddleware: Middleware = () => (next) => (action) => {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
  return next(action);
};

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        localStorage.clear();
        sessionStorage.clear();
        if (window.location.pathname !== authPath.signIn.path) {
          window.location.replace(authPath.signIn.path);
        }
      }
      if (status === 500 || status === 404) {
        toast.error('Oops! Something went wrong. Please try again or contact support!');
      }
    }
    return Promise.reject(error);
  },
);

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authMiddleware, cachedAPI.middleware as Middleware),
  });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
