import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../shared/Home';

interface AuthRoutes {
  props?: string;
}

const AuthRoutes: FC<AuthRoutes> = () => {
  return (
    <Routes>
      <Route path={'/auth/sign-in'} element={<Home />} />
    </Routes>
  );
};

export default AuthRoutes;
