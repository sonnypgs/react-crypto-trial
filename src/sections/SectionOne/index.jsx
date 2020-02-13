import React from 'react';
// import styles from './styles.module.scss';
import {
  Section,
  ValueSlider,
  BetAmountInput,
} from '../../components';

const SectionOne = (props) => {
  return (
    <div className={`${props.className}`}>
      <Section>
        <ValueSlider />
        <BetAmountInput />
      </Section>
    </div>
  );
};

export default SectionOne;