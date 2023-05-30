import { FC } from 'react';
import styles from './Recomendations.module.scss';
import MainContainer from '../../containers/MainContainer';

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
