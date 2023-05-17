import { FC } from 'react';
import styles from './AuthContainer.module.scss';
import MainRoutes from '../../routes/MainRoutes';

interface AuthContainerProps {
  className?: string;
}

const AuthContainer: FC<AuthContainerProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.root} ${className} auth`}>
      <MainRoutes />
    </div>
  );
};

export default AuthContainer;
