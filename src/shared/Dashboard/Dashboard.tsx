import { FC } from 'react';
import styles from './Dashboard.module.scss';

interface DashboardProps {
  className?: string;
}

const Dashboard: FC<DashboardProps> = ({className=""}) => {
  return <div className={`${styles.root} ${className}`}>Dashboard</div>;
};

export default Dashboard;