'use client';

import React from 'react';
import styles from './IconPage.module.scss';

import EyeOff from '@assets/icons/EyeOff';
import EyeOn from '@assets/icons/EyeOn';

const IconPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Icons</h1>
      <div className={styles.iconGrid}>
        
        <div className={styles.iconCard} key="EyeOff">
          <EyeOff />
          <span>EyeOff</span>
        </div>
      

        <div className={styles.iconCard} key="EyeOn">
          <EyeOn />
          <span>EyeOn</span>
        </div>
      
      </div>
    </div>
  );
};

export default IconPage;