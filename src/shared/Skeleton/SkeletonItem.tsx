import { FC } from 'react';
import styles from './SkeletonItem.module.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonItemProps {
  className?: string;
  number?: number;
}

const SkeletonItem: FC<SkeletonItemProps> = ({ className = '', number = 1 }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <SkeletonTheme baseColor="#202020" highlightColor="gray">
        <p>
          <Skeleton width={100} count={number} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonItem;
