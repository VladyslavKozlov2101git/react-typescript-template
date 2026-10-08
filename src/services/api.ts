import toast from "react-hot-toast";

import Cookies from "js-cookie";
import ky from "ky";

import { authPath } from "../routes/paths";

const baseURL = `${import.meta.env.VITE_REACT_APP_API_URL}`;

export const api = ky.create({
  prefix: baseURL,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const token = Cookies.get("token");
        if (token) {
          request.headers.set("Authorization", `Token ${token}`);
        }
      },
    ],
    afterResponse: [
      ({ response }) => {
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
  prefix: "https://jsonplaceholder.typicode.com",
});
