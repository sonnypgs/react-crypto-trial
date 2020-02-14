import React, { useState } from 'react';
import styles from './styles.module.scss';
import { BitcoinIcon } from '../../components';

const BetAmountInput = () => {
  const [amount, setAmount] = useState('0.04885313');
  return (
    <div className={styles.container}>
      <div className={styles.betAmountBox}>
        <span className={styles.betAmountLabel}>Bet Amount</span>

        <div className={styles.betAmountInputBox}>
          <BitcoinIcon />
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
      </div>

      <div className={styles.multiplierHalf}>
        1/2
      </div>

      <div className={styles.multiplierDouble}>
        x2
      </div>
    </div>
  );
};

export default BetAmountInput;