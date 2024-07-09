import { FC, Fragment, ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import clsx from 'clsx';

import Footer from '@layouts/Footer';
import Header from '@layouts/Header';

import styles from './MainContainer.module.scss';

interface MainContainerProps {
  className?: string;
  children?: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ className = '' }) => {
  return (
    <Fragment>
      <Header />
      <main className={clsx(styles.root, className, 'container')}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainContainer;
