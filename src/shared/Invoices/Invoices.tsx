import { FC } from 'react';
import styles from './Invoices.module.scss';

interface InvoicesProps {
  className?: string;
}

const Invoices: FC<InvoicesProps> = ({className=""}) => {
  return <div className={`${styles.root} ${className}`}>Invoices</div>;
};

export default Invoices;