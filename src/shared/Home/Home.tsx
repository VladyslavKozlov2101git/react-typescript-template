import { FC } from 'react';
import styles from './Home.module.scss';
import AuthContainer from '../../containers/AuthContainer';

interface HomeProps {
  text?: string;
}

const Home: FC<HomeProps> = (props) => {
  return (
    <AuthContainer>
      <div className={styles.root}>HOME</div>
    </AuthContainer>
  );
};

export default Home;
