import { FC } from 'react';

import MainContainer from '../../containers/MainContainer';
import styles from './Recomendations.module.scss';

interface RecomendationsProps {
  className?: string;
}

const Recomendations: FC<RecomendationsProps> = ({ className = '' }) => {
  return (
    <MainContainer>
      <div className={`${styles.root} ${className}`}>Recomendations</div>
    </MainContainer>
  );
};

export default Recomendations;
