import { FC } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "./store";

import "../assets/styles/main.scss";
import { router } from "../routes/routes";

interface AppProps {
  props?: string;
}

const App: FC<AppProps> = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" />
      </Provider>
    </HelmetProvider>
  );
};

export default App;
