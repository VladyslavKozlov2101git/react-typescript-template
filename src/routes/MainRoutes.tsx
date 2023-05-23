import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../shared/Dashboard';
import Invoices from '../shared/Invoices';
import InvoiceSingle from '../shared/InvoiceSingle';
import Home from '../shared/Home';
import { authPath, mainPath } from './paths';
import PageNotFound from '../shared/PageNotFound';
import Users from '../features/Users';

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
      <Route path={authPath.signIn.path} element={<Home />} />

      <Route path={mainPath.dashboard.path} element={<Dashboard />} />
      <Route path={mainPath.invoices.path}>
        <Route index element={<Invoices />} />
        <Route path=":id" element={<InvoiceSingle />} />
      </Route>

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
