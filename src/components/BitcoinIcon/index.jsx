import React from 'react';
import { Icon } from 'react-icons-kit';
import { bitcoin } from 'react-icons-kit/fa/bitcoin';
import styles from './styles.module.scss';

const BitcoinIcon = () => {
  return (
    <span className={styles.container}>
      <Icon icon={bitcoin} size={10} style={{ marginTop: -3}} />
    </span>
  );
};

export default BitcoinIcon;