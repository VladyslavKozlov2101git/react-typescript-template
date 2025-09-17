import { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './SkeletonItem.module.scss';

interface SkeletonItemProps {
  className?: string;
  number?: number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
}

const SkeletonItem: FC<SkeletonItemProps> = ({
  className = '',
  number = 1,
  width = 100,
  height,
  borderRadius = 16,
}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <SkeletonTheme baseColor="rgba(0, 0, 0, 0.04)" highlightColor="rgba(0, 0, 0, 0.08)">
        <Skeleton
          width={width}
          height={height}
          borderRadius={borderRadius}
          count={number}
          inline={false}
        />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonItem;
