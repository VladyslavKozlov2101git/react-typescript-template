import { FC } from 'react';
import styles from './MainContainer.module.scss';
import MainRoutes from '../../routes/MainRoutes';

interface MainContainerProps {
  className?: string;
}

const MainContainer: FC<MainContainerProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.root} ${className} auth`}>
      <MainRoutes />
    </div>
  );
};

export default MainContainer;
