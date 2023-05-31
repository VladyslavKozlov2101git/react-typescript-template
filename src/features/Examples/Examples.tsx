import { FC } from 'react';
import styles from './Examples.module.scss';
import MainContainer from '../../containers/MainContainer';
import {
  UseOnClickOutsideExample,
  UseDebounceExample,
  UseDeferredValueExample,
} from '../../shared/index';

interface ExamplesProps {
  className?: string;
}

const Examples: FC<ExamplesProps> = ({ className = '' }) => {
  return (
    <MainContainer>
      <div className={`${styles.root} ${className} `}>
        <h2 className="mt16">Custom hooks examples</h2>

        <h3>1. useOnClickOutside hook</h3>

        <UseOnClickOutsideExample />

        <h3 className="mt16">2. useDebounce hook</h3>
        <UseDebounceExample />

        <h3 className="mt16">3. useDeferredValue hook</h3>
        <UseDeferredValueExample />
      </div>
    </MainContainer>
  );
};

export default Examples;
