/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { authPath, mainPath } from './paths';

import AuthContainer from '@containers/AuthContainer';
import MainContainer from '@containers/MainContainer';

import ErrorPage from '@pages/ErrorPage';
import Examples from '@pages/Examples';

const Recomendations = lazy(() => import('@pages/Recomendations'));
const Users = lazy(() => import('@pages/Users'));
const Dashboard = lazy(() => import('@pages/Dashboard'));

const token = localStorage.getItem('token');

const handleRedirect = () => {
  return token ? (
    <Navigate to={mainPath.dashboard.path} replace />
  ) : (
    <Navigate to={authPath.signIn.path} replace />
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    action: handleRedirect,
    element: <Outlet />,
    children: [
      {
        path: '/auth',
        element: <AuthContainer />,
        children: [
          {
            path: 'sign-in',
            element: <h2>sign-in</h2>,
          },
          {
            path: 'sign-up',
            element: <h2>sign-up</h2>,
          },
        ],
      },
      {
        path: '/main',
        element: <MainContainer />,
        children: [
          {
            path: mainPath.dashboard.path,
            element: <Dashboard />,
          },
          {
            path: mainPath.examples.path,
            element: <Examples />,
          },
          {
            path: mainPath.recomendations.path,
            element: <Recomendations />,
          },
          {
            path: mainPath.users.path,
            element: <Users />,
          },
        ],
      },
    ],
  },
]);
