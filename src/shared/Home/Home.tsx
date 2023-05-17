import { FC } from 'react';
import styles from './Home.module.scss';

interface HomeProps {
  text?: string;
}

const Home: FC<HomeProps> = (props) => {
  return <div className={styles.root}>HOME</div>;
};

export default Home;
