import { FC, ReactNode, useEffect } from 'react';
import styles from './MainContainer.module.scss';
import { useNavigate } from 'react-router';
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
      <header className={styles.header}>Header</header>
      <main className={`${styles.root} ${className} `}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export default MainContainer;
