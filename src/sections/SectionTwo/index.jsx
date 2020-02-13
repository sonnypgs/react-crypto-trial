import React from 'react';
// import styles from './styles.module.scss';
import {
  Section,
} from '../../components';

const SectionTwo = (props) => {
  return (
    <div className={`${props.className}`}>
      <Section>
        SectionTwo
      </Section>
    </div>
  );
};

export default SectionTwo;