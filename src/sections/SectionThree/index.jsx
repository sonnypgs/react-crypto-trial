import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as ClamTopSVG } from '../../images/clam-top.svg';
import { ReactComponent as ClamBottomSVG } from '../../images/clam-bottom.svg';
import {
  Section,
} from '../../components';

const SectionThree = (props) => {
  const {
    className,
    openConfirmPopover,
  } = props;

  return (
    <div className={`${className}`}>
      <Section>

        <div
          className={styles.clamContainer}
          onClick={openConfirmPopover}
        >
          <div className={styles.clamTopContainer}>
            <ClamTopSVG />
          </div>

          <div className={styles.clamBottomContainer}>
            <ClamBottomSVG />
          </div>
        </div>

      </Section>
    </div>
  );
};

export default SectionThree;