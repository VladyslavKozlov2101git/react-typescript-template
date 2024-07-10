import { FC, Fragment, ReactNode, Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import styles from './AuthContainer.module.scss';

import { mainPath } from '../../routes/paths';

interface AuthContainerProps {
  className?: string;
  children?: ReactNode;
}

const AuthContainer: FC<AuthContainerProps> = ({ className = '' }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      return;
    }
    navigate(mainPath.dashboard.path);
  }, []);
  return (
    <Fragment>
      <footer className={styles.header}>Header</footer>
      <main className={clsx(styles.root, className, 'container')}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </Fragment>
  );
};

export default AuthContainer;
