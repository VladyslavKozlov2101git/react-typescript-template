import { FC } from 'react';

import styles from './Recomendations.module.scss';

interface RecomendationsProps {
  className?: string;
}

const Recomendations: FC<RecomendationsProps> = ({ className = '' }) => {
  return <div className={`${styles.root} ${className}`}>Recomendations</div>;
};

export default Recomendations;
