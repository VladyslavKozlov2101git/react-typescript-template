import { FC } from 'react';

import styles from './Dashboard.module.scss';

import EyeOff from '@assets/icons/EyeOff';

interface DashboardProps {
  className?: string;
}

const Dashboard: FC<DashboardProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.root} ${className}`} data-testid="dashboard">
      Dashboard <EyeOff />
    </div>
  );
};

export default Dashboard;
