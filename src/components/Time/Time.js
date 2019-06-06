import React from 'react';

import s from './Time.module.css';

import * as namesOfDayAndMonth from '../../assets/date';

const time = () => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const month = date.getMonth();

  return {
    dayOfWeek: namesOfDayAndMonth.dayOfWeek[dayOfWeek],
    monthName: namesOfDayAndMonth.month[month],
    day: date.getDate() < 9 ? `0${date.getDate()}` : date.getDate(),
    hours: date.getHours() < 9 ? `0${date.getHours()}` : date.getHours(),
    minutes:
      date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes(),
    seconds:
      date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds(),
  };
};

const Time = () => {
  const timeNow = time();
  return (
    <div className={s.time}>
      <p>{timeNow.dayOfWeek}</p>
      <p className={s.date}>{timeNow.day}</p>
      <p>{timeNow.monthName}</p>
      <p>{`${timeNow.hours}:${timeNow.minutes}:${timeNow.seconds}`}</p>
    </div>
  );
};

export default Time;
