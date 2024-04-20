import { FC } from 'react';
import styles from './Dashboard.module.scss';
import MainContainer from '../../containers/MainContainer';
import { useGetWorkersQuery } from '../../app/cachedAPI';

interface DashboardProps {
  className?: string;
}

const Dashboard: FC<DashboardProps> = ({ className = '' }) => {
  const { data: workers } = useGetWorkersQuery({ free: 'true' });

  return (
    <MainContainer>
      <div className={`${styles.root} ${className}`}>Dashboard</div>
    </MainContainer>
  );
};

export default Dashboard;
