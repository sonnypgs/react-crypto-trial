import React, { useState } from 'react';
import styles from './styles.module.scss';
import {
  Header,
  ConfirmPopover,
} from '../../components';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
} from '../../sections';

const App = () => {

  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <div className={styles.container}>

      <Header />
      <ConfirmPopover
        open={popoverOpen}
        closePopover={() => setPopoverOpen(false)}
      />

      <div className={styles.sections}>
        <SectionOne
          className={styles.sectionOne}
        />
        <SectionTwo
          className={styles.sectionTwo}
        />
        <SectionThree
          className={styles.sectionThree}
          openConfirmPopover={() => setPopoverOpen(true)}
        />
      </div>

    </div>
  );
}

export default App;