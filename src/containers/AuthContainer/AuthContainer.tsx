import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './AuthContainer.module.scss';

interface AuthContainerProps {
  className?: string;
  children?: ReactNode;
}

const AuthContainer: FC<AuthContainerProps> = ({ className = '', children }) => {
  return (
    <>
      <main className={clsx(styles.container, className)}>
        <aside className={styles.header}>Header</aside>
        {children}
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export default AuthContainer;
