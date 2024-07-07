import { FC, lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { authPath, mainPath } from './paths';

import MainContainer from '../containers/MainContainer';

import Examples from '@pages/Examples';

const Dashboard = lazy(() => import('@pages/Dashboard'));

const PageNotFound = lazy(() => import('@shared/PageNotFound'));
const Recomendations = lazy(() => import('@pages/Recomendations'));
const Users = lazy(() => import('@pages/Users'));

interface MainRoutes {
  props?: string;
}

const MainRoutes: FC<MainRoutes> = () => {
  const token = localStorage.getItem('token');
  return (
    <Routes>
      <Route
        path="/"
        element={
          token ? (
            <Navigate to={mainPath.dashboard.path} replace />
          ) : (
            <Navigate to={authPath.signIn.path} replace />
          )
        }
      />

      <Route path={authPath.signIn.path} element={<Dashboard />} />

      <Route element={<MainContainer children={<Outlet />} />}>
        <Route path={mainPath.dashboard.path} element={<Dashboard />} />
        <Route path={mainPath.examples.path} element={<Examples />} />
        <Route path={mainPath.recomendations.path} element={<Recomendations />} />
        <Route path={mainPath.invoices.path}></Route>
        <Route path={mainPath.users.path} element={<Users />} />
      </Route>

      <Route path={'/404'} element={<PageNotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};

//EXPLANATION
//   <Route path="/invoices"> --parent route
//     <Route path=":id" element={<InvoiceSingle />} /> -- children with dynamic route
//     <Route path="create-new" element={<CreateNewIncoice />} />  -- children with static route
//   </Route>

export default MainRoutes;
