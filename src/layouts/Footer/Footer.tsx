import { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`${styles.root} ${className}`}>
      <p className="container">Email: vladislavkozlov2101@gmail.com</p>
    </footer>
  );
};

export default Footer;
