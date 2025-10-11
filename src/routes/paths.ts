import { lazy } from 'react';

export const rootAuthPath = '/auth';
export const rootMainPath = '/main';
export const rootDevPath = '/developer';
const Recomendations = lazy(() => import('@pages/Recomendations'));
const Users = lazy(() => import('@pages/Users'));
const Dashboard = lazy(() => import('@pages/Dashboard'));
const Examples = lazy(() => import('@pages/Examples'));
const IconPage = lazy(() => import('@pages/IconPage'));

export const mainPath = {
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

export const developerPath = {
  examples: {
    component: Examples,
    path: `${rootDevPath}/examples`,
    slug: '/examples',
    name: 'Examples',
  },
  recomendations: {
    component: Recomendations,
    path: `${rootDevPath}/recomendations`,
    slug: '/recomendations',
    name: 'Recomendations',
  },
  icons: {
    component: IconPage,
    path: `${rootDevPath}/icons`,
    slug: '/icons',
    name: 'Icons',
  },
};
