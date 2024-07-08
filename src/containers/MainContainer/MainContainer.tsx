import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import Footer from '@layouts/Footer';
import Header from '@layouts/Header';

import styles from './MainContainer.module.scss';

interface MainContainerProps {
  className?: string;
  children?: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ className = '', children }) => {
  return (
    <>
      <Header />
      <main className={clsx(styles.root, className, 'container')}>{children}</main>
      <Footer />
    </>
  );
};

export default MainContainer;
