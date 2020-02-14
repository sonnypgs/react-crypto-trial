import React, { useState } from 'react';
import Draggable from 'react-draggable';
import styles from './styles.module.scss';

const DEFAULT_VALUE = 50;
// const DEFAULT_OFFSET = -DEFAULT_VALUE*3 - 25;

const ValueSlider = () => {

  const [sliderValue, setSliderValue] = useState(DEFAULT_VALUE);

  return (
    <div className={styles.container}>
      <div className={styles.values}>
        <h3 className={styles.maxValue}>100</h3>
        <h3 className={styles.minValue}>0</h3>
      </div>
      <div className={styles.bar}>
        <TopBar height={100 - sliderValue} />
        <BottomBar height={sliderValue} />
        <Draggable
          axis="y"
          defaultPosition={{x: 0, y: (-sliderValue*3 - 25)}}
          bounds={{top: (-100*3 - 25), left: 0, right: 0, bottom: -25}}
          onDrag={(e, ui) => {
            const newValue = (sliderValue - ui.deltaY/3);
            setSliderValue(newValue);
          }}
        >
          <div className={styles.sliderHandle}>
            <span>{Math.max(sliderValue, 0).toFixed(2)}</span>
            <div className={styles.sliderHandleTriangle} />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

const TopBar = ({height}) => {
  return (
    <div
      className={styles.topBar}
      style={{
        height: `${height*3}px`,
      }}
    />
  );
};

const BottomBar = ({height}) => {
  return (
    <div
      className={styles.bottomBar}
      style={{
        height: `${height*3}px`,
      }}
    />
  );
};

const SliderHandle = () => {
  return (
    <div className={styles.sliderHandle}>
      {/* <span>69.24</span> */}
      {/* <div className={styles.sliderHandleTriangle} /> */}
      <div style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'red',
      }}>123</div>
    </div>
  );
};

export default ValueSlider;