import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../features/Dashboard';
import { authPath, mainPath } from './paths';
import PageNotFound from '../shared/PageNotFound';
import Users from '../features/Users';
import Examples from '../features/Examples';

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

      <Route path={mainPath.dashboard.path} element={<Dashboard />} />
      <Route path={mainPath.examples.path} element={<Examples />} />
      <Route path={mainPath.invoices.path}></Route>

      <Route path={mainPath.users.path} element={<Users />} />

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
