import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Section,
  ProfitTable,
} from '../../components';

const betsNew = [
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: -195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: 195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: -195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: -195,
  },

  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: -195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: -195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: -195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: 195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: -195,
  },
  {
    id: "23803",
    time: 1581664571337,
    bet: 441,
    payout: 1,
    profit: 195,
  },
];

const SectionTwo = (props) => {
  const [bets, setBets] = useState([]);

  return (
    <div className={`${props.className}`}>
      <Section>
        <Subscription
          subscription={gql`
            subscription {
              betAdded {
                id
                time
                bet
                payout
                profit
              }
            }
          `}
        >
          {
            ({data, error, loading}) => {
              if (loading) return 'Loading...';
              if (error) return 'Error!';

              console.log(data.betAdded);
              const newBet = data.betAdded;
              console.log(newBet);
              if (newBet) {
                if (bets.length >= 10) {
                  bets.pop();
                }
                bets.unshift(data.betAdded);
                setBets(bets);
              }

              return (
                <div className={styles.container}>
                  <ProfitTable
                    bets={bets}
                  />
                </div>
              );
            }
          }
        </Subscription>

                {/* <div className={styles.container}>
                  <ProfitTable
                    bets={betsNew}
                  />
                </div> */}
      </Section>
    </div>
  );
};

export default SectionTwo;