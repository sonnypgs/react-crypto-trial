import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Section,
  ProfitTable,
} from '../../components';

const MAX_BET_COUNT_DISPLAYED = 10;

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

              const newBet = data.betAdded;
              if (newBet) {
                if (bets.length >= MAX_BET_COUNT_DISPLAYED) {
                  bets.pop();
                  setBets(bets);
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
      </Section>
    </div>
  );
};

export default SectionTwo;