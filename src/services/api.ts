import toast from "react-hot-toast";

import ky from "ky";
import Cookies from "js-cookie";

import { authPath } from "../routes/paths";

const baseURL = `${import.meta.env.VITE_REACT_APP_API_URL}`;

export const api = ky.create({
  prefixUrl: baseURL,
  hooks: {
    beforeRequest: [
      (request) => {
        const token = Cookies.get("token");
        if (token) {
          request.headers.set("Authorization", `Token ${token}`);
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (!response.ok) {
          const { status } = response;

          if (status === 401) {
            Cookies.remove("token");
            localStorage.clear();
            sessionStorage.clear();
            if (window.location.pathname !== authPath.signIn.path) {
              window.location.replace(authPath.signIn.path);
            }
          }
          if (status === 500 || status === 404) {
            toast.error("Oops! Something went wrong. Please try again or contact support!");
          }
        }
      },
    ],
  },
});

// For external APIs with different baseURL (e.g. JSONPlaceholder)
export const jsonPlaceholderApi = ky.create({
  prefixUrl: "https://jsonplaceholder.typicode.com",
});
