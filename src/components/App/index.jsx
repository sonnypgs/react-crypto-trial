import React from 'react';
import styles from './styles.module.scss';
import {
  Header,
} from '../../components';
import {
  SectionOne,
  SectionTwo,
  SectionThree,
} from '../../sections';

const App = () => {
  return (
    <div className={styles.container}>

      <Header />

      <div className={styles.sections}>
        <SectionOne className={styles.sectionOne} />
        <SectionTwo className={styles.sectionTwo} />
        <SectionThree className={styles.sectionThree} />
      </div>

    </div>
  );
}

export default App;