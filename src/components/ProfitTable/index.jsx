import React from 'react';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles.module.scss';
import { BitcoinIcon } from '../../components';

const ProfitTable = (props) => {

  const {
    bets
  } = props;

  return (
    <div className={styles.container}>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th className={styles.timeHeader}>Time</th>
            <th className={styles.betHeader}>Bet</th>
            <th className={styles.multiplierHeader}>Multiplier</th>
            <th className={styles.profitHeader}>Profit</th>
          </tr>
        </thead>

        <ReactCSSTransitionGroup
          component="tbody"
          transitionName="betRow"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {
            bets.map((bet) => {
              const profit = (bet.profit / 1000).toFixed(8);
              return (
                <tr key={bet.id}>
                  <td className={styles.timeCell}>{moment(bet.time).format('DD.MM.YY HH:MM:SS')}</td>
                  <td className={styles.betCell}>
                    <BitcoinIcon />
                    <span>{(bet.bet / 1000).toFixed(8)}</span>
                  </td>
                  <td className={styles.multiplierCell}>x{(bet.payout / 4).toFixed(3)}</td>
                  <td className={styles.profitCell}>
                    <BitcoinIcon />
                    <span
                      style={{
                        color: (profit >= 0) ? '#73FC7F' : '#FD7979',
                      }}
                    >{profit > 0 ? `+${profit}` : profit}</span>
                  </td>
                </tr>
              );
            })
          }
        </ReactCSSTransitionGroup>
      </table>
    </div>
  );
};

export default ProfitTable;