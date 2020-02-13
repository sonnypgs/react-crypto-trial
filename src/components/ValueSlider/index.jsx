import React from 'react';
import styles from './styles.module.scss';

const ValueSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.values}>
        <h3 className={styles.maxValue}>100</h3>
        <h3 className={styles.minValue}>0</h3>
      </div>
      <div className={styles.bar}>
        <TopBar />
        <BottomBar />
        <SliderHandle />
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className={styles.topBar}></div>
  );
};

const BottomBar = () => {
  return (
    <div className={styles.bottomBar}></div>
  );
};

const SliderHandle = () => {
  return (
    <div className={styles.sliderHandle}>
      <span>69.24</span>
      <div className={styles.sliderHandleTriangle} />
    </div>
  );
};

export default ValueSlider;