import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

import clsx from 'clsx';

import Footer from '@layouts/Footer';
import Header from '@layouts/Header';

import styles from './MainContainer.module.scss';

import { authPath } from '../../routes/paths';

interface MainContainerProps {
  className?: string;
  children?: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ className = '', children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate(authPath.signIn.path);
    }
  }, []);

  return (
    <>
      <Header />
      <main className={clsx(styles.root, className, 'container')}>{children}</main>
      <Footer />
    </>
  );
};

export default MainContainer;
