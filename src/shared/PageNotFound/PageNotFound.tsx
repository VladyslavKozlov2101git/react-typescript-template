import { FC } from 'react';
import styles from './PageNotFound.module.scss';

interface PageNotFoundProps {
  className?: string;
}

const PageNotFound: FC<PageNotFoundProps> = ({ className = '' }) => {
  return <div className={`${styles.root} ${className}`}>404 - PAGE NOT FOUND</div>;
};

export default PageNotFound;
