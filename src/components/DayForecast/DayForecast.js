import React from 'react';

import * as week from '../../assets/date';

import s from './DayForecast.module.css';

const DayForecast = ({ style, dayOfWeek, day, month, min, max, img }) => (
  <div className={`${style} ${s.wrap}`}>
    <p className={s.dayOfWeek}>{week.dayOfWeek[dayOfWeek]}</p>
    <p className={s.date}>{day}</p>
    <p>{week.month[month]}</p>
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
