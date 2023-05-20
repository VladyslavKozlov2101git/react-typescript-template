import { FC, ReactNode, useEffect } from 'react';
import styles from './AuthContainer.module.scss';
import { useNavigate } from 'react-router';
import { mainPath } from '../../routes/paths';

interface AuthContainerProps {
  className?: string;
  children?: ReactNode;
}

const AuthContainer: FC<AuthContainerProps> = ({ className = '', children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      navigate(mainPath.dashboard.path);
    }
  }, []);

  return (
    <>
      <main className={`${styles.root} ${className} `}>
        <aside className={styles.header}>Header</aside>
        {children}
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export default AuthContainer;
