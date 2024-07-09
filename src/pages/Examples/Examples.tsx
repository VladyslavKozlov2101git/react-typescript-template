import { FC } from 'react';

import styles from './Examples.module.scss';

import {
  Skeleton,
  UseDebounceExample,
  UseDeferredValueExample,
  UseOnClickOutsideExample,
} from '../../shared/index';

interface ExamplesProps {
  className?: string;
}

const Examples: FC<ExamplesProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.root} ${className} `}>
      <h2 className="mt16">Custom hooks examples</h2>

      <h3>1. useOnClickOutside hook</h3>

      <UseOnClickOutsideExample />

      <h3 className="mt16">2. useDebounce hook</h3>
      <UseDebounceExample />

      <h3 className="mt16">3. useDeferredValue hook</h3>
      <i>
        Загалом, <b>useDeferredValue</b> корисний, коли вам потрібно забезпечити плавну
        інтерактивність, зменшити зайві рендери та оптимізувати продуктивність в деяких ситуаціях.
      </i>
      <UseDeferredValueExample />

      <h2 className="mt16">Skeleton examples</h2>
      <Skeleton />
    </div>
  );
};

export default Examples;
