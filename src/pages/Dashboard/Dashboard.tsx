import { FC } from "react";
import { Helmet } from "react-helmet-async";

import styles from "./Dashboard.module.scss";

interface DashboardProps {
  className?: string;
}

const Dashboard: FC<DashboardProps> = ({ className = "" }) => {
  return (
    <>
      <Helmet>
        <title>Dashboard | React Template</title>
      </Helmet>
      <div className={`${styles.root} ${className}`} data-testid="dashboard">
        Dashboard
      </div>
    </>
  );
};

export default Dashboard;
