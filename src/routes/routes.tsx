/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';

import { authPath, mainPath } from './paths';

import AuthContainer from '@containers/AuthContainer';
import MainContainer from '@containers/MainContainer';

import ErrorPage from '@pages/ErrorPage';
import Examples from '@pages/Examples';

const Recomendations = lazy(() => import('@pages/Recomendations'));
const Users = lazy(() => import('@pages/Users'));
const Dashboard = lazy(() => import('@pages/Dashboard'));

const token = localStorage.getItem('token');

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
          {
            path: mainPath.dashboard.path,
            element: <Dashboard />,
            caseSensitive: true,
          },
          {
            path: mainPath.examples.path,
            element: <Examples />,
            caseSensitive: true,
          },
          {
            path: mainPath.recomendations.path,
            element: <Recomendations />,
            caseSensitive: true,
          },
          {
            path: mainPath.users.path,
            element: <Users />,
            caseSensitive: true,
          },
        ],
      },
    ],
  },
]);
