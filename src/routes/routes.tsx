import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';

import Cookies from 'js-cookie';

import { authPath, mainPath } from './paths';

import AuthContainer from '@containers/AuthContainer';
import MainContainer from '@containers/MainContainer';

import ErrorPage from '@pages/ErrorPage';

const token = Cookies.get('token');

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Outlet />,
    children: [
      {
        index: true,
        loader: async () => redirect(token ? mainPath.dashboard.path : authPath.signIn.path),
      },
      {
        path: '/auth',
        element: <AuthContainer />,
        caseSensitive: true,
        children: [
          {
            index: true,
            loader: async () => redirect(authPath.signIn.path),
          },
          {
            path: 'sign-in',
            element: <h2>sign-in</h2>,
            caseSensitive: true,
          },
          {
            path: 'sign-up',
            element: <h2>sign-up</h2>,
            caseSensitive: true,
          },
        ],
      },
      {
        path: '/main',
        element: <MainContainer />,
        caseSensitive: true,
        children: [
          {
            index: true,
            loader: async () => redirect(mainPath.dashboard.path),
          },
          ...Object.values(mainPath).map((path) => ({
            path: path.path,
            element: <path.component />,
            caseSensitive: true,
          })),
        ],
      },
    ],
  },
]);
