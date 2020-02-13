import React, { useState } from 'react';
// import styles from './styles.module.scss';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Section,
} from '../../components';

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
                name
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
              if (newBet) {
                bets.push(data.betAdded);
                setBets(bets);
              }

              return (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Bet</th>
                        <th>Multiplier</th>
                        <th>Profit</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        bets.map((bet) => {
                          return (
                            <tr>
                              <td>{bet.time}</td>
                              <td>{bet.bet / 1000}</td>
                              <td>x{bet.payout / 4}</td>
                              <td>{bet.profit / 1000}</td>
                            </tr>
                          );
                        })
                      }

                    </tbody>
                  </table>
                  {/* {JSON.stringify(data)} */}
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