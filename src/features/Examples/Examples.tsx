import { FC, useState, useRef } from 'react';
import styles from './Examples.module.scss';
import MainContainer from '../../containers/MainContainer';
import { useOnClickOutside } from '../../helpers/hooks';

interface ExamplesProps {
  className?: string;
}

const Examples: FC<ExamplesProps> = ({ className = '' }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <MainContainer>
      <div className={`${styles.root} ${className} `}>
        <h2>Custom hooks examples</h2>
        <h3>1. useOnClickOutside hook</h3>
        <div className={styles.outside}>
          <button className={styles.button} onClick={() => setModalOpen(true)}>
            Show list
          </button>

          {isModalOpen && (
            <div ref={ref} className={styles.list}>
              <ul>
                <li>Case1</li>
                <li>Case2</li>
                <li>Case3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </MainContainer>
  );
};

export default Examples;
