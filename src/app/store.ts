import { Middleware, configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { cachedAPI } from "@services/cachedAPI";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cachedAPI.middleware as Middleware),
  });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
