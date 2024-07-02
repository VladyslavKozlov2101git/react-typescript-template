import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { authPath } from '../../routes/paths';
import styles from './MainContainer.module.scss';

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
      <main className={`${styles.root} ${className} container`}>{children}</main>
      <Footer />
    </>
  );
};

export default MainContainer;
