import { FC, useRef, useState } from 'react';

import styles from './UseOnClickOutsideExample.module.scss';

import { useOnClickOutside } from '../../helpers/hooks';

interface useOnClickOutsideExampleProps {
  className?: string;
}

const useOnClickOutsideExample: FC<useOnClickOutsideExampleProps> = ({ className = '' }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => setModalOpen(false));

  return (
    <div className={`${styles.root} ${className}`}>
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
  );
};
export default useOnClickOutsideExample;
