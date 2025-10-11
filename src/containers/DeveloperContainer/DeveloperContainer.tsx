import { FC, ReactNode, Suspense, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import styles from './DeveloperContainer.module.scss';

import LoaderComponent from '@shared/LoaderComponent';

interface DeveloperContainerProps {
  className?: string;
  children?: ReactNode;
}

const DeveloperContainer: FC<DeveloperContainerProps> = ({ className = '' }) => {
  const isDeveloper = import.meta.env.VITE_REACT_IS_DEV;
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isDeveloper);
    if (isDeveloper === 'true') {
      return;
    }
    navigate('/');
  }, [isDeveloper]);

  return (
    <main className={clsx(styles.root, className, 'container')}>
      <Suspense fallback={<LoaderComponent />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default DeveloperContainer;
