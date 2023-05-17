import { FC } from 'react';
import styles from './Contacts.module.scss';

interface ContactsProps {
  className?: string;
}

const Contacts: FC<ContactsProps> = ({className=""}) => {
  return <div className={`${styles.root} ${className}`}>Contacts</div>;
};

export default Contacts;