import MainContainer from '@containers/MainContainer';
import { FC } from 'react';

import styles from './Dashboard.module.scss';

interface DashboardProps {
  className?: string;
}

const Dashboard: FC<DashboardProps> = ({ className = '' }) => {
  return (
    <MainContainer>
      <div className={`${styles.root} ${className}`}>Dashboard</div>
    </MainContainer>
  );
};

export default Dashboard;
