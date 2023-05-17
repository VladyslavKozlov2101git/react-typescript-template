import { FC } from 'react';
import styles from './InvoiceSingle.module.scss';

interface InvoiceSingleProps {
  className?: string;
}

const InvoiceSingle: FC<InvoiceSingleProps> = ({className=""}) => {
  return <div className={`${styles.root} ${className}`}>InvoiceSingle</div>;
};

export default InvoiceSingle;