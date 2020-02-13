import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <svg height="30" width="30" className={styles.circle}>
        <circle cx="15" cy="15" r="15" stroke="black" stroke-width="0" fill="#fff" />
      </svg>
    </div>
  );
};

export default Header;