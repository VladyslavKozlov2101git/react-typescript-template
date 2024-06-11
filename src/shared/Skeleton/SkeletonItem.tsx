import { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './SkeletonItem.module.scss';

interface SkeletonItemProps {
  className?: string;
  number?: number;
}

const SkeletonItem: FC<SkeletonItemProps> = ({ className = '', number = 1 }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <SkeletonTheme baseColor="#202020" highlightColor="gray">
        <Skeleton width={100} count={number} />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonItem;
