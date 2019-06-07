import React from 'react';

import s from './DayForecast.module.css';

const DayForecast = ({ style, dayOfWeek, day, month, min, max, img }) => (
  <div className={`${style} ${s.wrap}`}>
    <p>{dayOfWeek}</p>
    <p className={s.date}>{day}</p>
    <p>{month}</p>
    <img src={img} alt="weather" />
    <div className={s.minAndMax}>
      <div className={s.minBlock}>
        <p>min.</p>
        <p className={s.minNum}>{min}</p>
      </div>
      <div className={s.maxBlock}>
        <p>max.</p>
        <p className={s.maxNum}>{max}</p>
      </div>
    </div>
  </div>
);

export default DayForecast;
