import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoutes from './MainRoutes';

interface AppRoutes {
  props?: string;
}

const AppRoutes: FC<AppRoutes> = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
