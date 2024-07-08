import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

import { mainPath } from '../../routes/paths';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`${styles.root} ${className}`}>
      <div className="container">
        <nav className={styles.navigation}>
          <li>
            <NavLink to={mainPath.users.path}>{mainPath.users.name}</NavLink>
          </li>
          <li>
            <NavLink to={mainPath.dashboard.path}>{mainPath.dashboard.name}</NavLink>
          </li>
          <li>
            <NavLink to={mainPath.examples.path}>{mainPath.examples.name}</NavLink>
          </li>
          <li>
            <NavLink to={mainPath.recomendations.path}>{mainPath.recomendations.name}</NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
