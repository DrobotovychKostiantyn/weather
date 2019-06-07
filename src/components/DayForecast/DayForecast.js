import React from 'react';

import s from './DayForecast.module.css';

const DayForecast = ({ style }) => (
  <div className={`${style} ${s.wrap}`}>
    <p>Friday</p>
    <p className={s.date}>04</p>
    <p>June</p>
    <img src="//cdn.apixu.com/weather/64x64/day/116.png" alt="weather" />
    <div className={s.minAndMax}>
      <div className={s.minBlock}>
        <p>min.</p>
        <p className={s.minNum}>10</p>
      </div>
      <div className={s.maxBlock}>
        <p>max.</p>
        <p className={s.maxNum}>10</p>
      </div>
    </div>
  </div>
);

export default DayForecast;
