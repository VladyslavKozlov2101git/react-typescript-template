import { FC } from 'react';

import clsx from 'clsx';

import styles from './LoaderComponent.module.scss';

interface LoaderComponentProps {
  className?: string;
  isMain?: boolean;
}

const LoaderComponent: FC<LoaderComponentProps> = ({ className = '', isMain = false }) => {
  return (
    <div className={clsx(styles.root__fixed, className, { [styles.mainLoader]: isMain })}>
      <div className={styles.loader}>
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default LoaderComponent;
