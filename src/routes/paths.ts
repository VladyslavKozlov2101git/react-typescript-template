import { lazy } from 'react';

export const rootAuthPath = '/auth';
export const rootMainPath = '/main';
const Recomendations = lazy(() => import('@pages/Recomendations'));
const Users = lazy(() => import('@pages/Users'));
const Dashboard = lazy(() => import('@pages/Dashboard'));
const Examples = lazy(() => import('@pages/Examples'));

export const mainPath = {
  examples: {
    component: Examples,
    path: `${rootMainPath}/examples`,
    slug: '/examples',
    name: 'Examples',
  },
  recomendations: {
    component: Recomendations,
    path: `${rootMainPath}/recomendations`,
    slug: '/recomendations',
    name: 'Recomendations',
  },
  dashboard: {
    component: Dashboard,
    path: `${rootMainPath}/dashboard`,
    slug: '/dashboard',
    name: 'Dashboard',
  },
  users: { component: Users, path: `${rootMainPath}/users`, slug: '/users', name: 'Users' },
};

export const authPath = {
  signIn: { path: `${rootAuthPath}/sign-in`, slug: '/sign-in', name: 'Sign In' },
};
