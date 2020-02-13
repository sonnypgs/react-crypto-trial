import React from 'react';
import { ReactSVG } from 'react-svg';
import styles from './styles.module.scss';
import { ReactComponent as ClamTopSVG } from '../../images/clam-top.svg';
import { ReactComponent as ClamBottomSVG } from '../../images/clam-bottom.svg';
import {
  Section,
} from '../../components';

const SectionThree = (props) => {
  return (
    <div className={`${props.className}`}>
      <Section>
        <div className={styles.clamTopContainer}>
          <ClamTopSVG />
        </div>

        <div className={styles.clamBottomContainer}>
          <ClamBottomSVG />
        </div>
      </Section>
    </div>
  );
};

export default SectionThree;