import { FC, Fragment, ReactNode, Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import Cookies from 'js-cookie';

import styles from './MainContainer.module.scss';

import { authPath } from '../../routes/paths';

import LoaderComponent from '@shared/LoaderComponent';

interface MainContainerProps {
  className?: string;
  children?: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ className = '' }) => {
  const token = Cookies.get('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      return;
    }
    navigate(authPath.signIn.path);
  }, []);

  return (
    <Fragment>
      <Header />
      <main className={clsx(styles.root, className, 'container')}>
        <Suspense fallback={<LoaderComponent />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainContainer;
