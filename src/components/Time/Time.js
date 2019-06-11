import React from 'react';

import s from './Time.module.css';

import * as namesOfDayAndMonth from '../../assets/date';

const time = () => {
  const timeNow = new Date();
  const hours =
    timeNow.getHours() < 10 ? `0${timeNow.getHours()}` : timeNow.getHours();
  const minutes =
    timeNow.getMinutes() < 10
      ? `0${timeNow.getMinutes()}`
      : timeNow.getMinutes();
  const dayOfWeek = timeNow.getDay();
  const day = timeNow.getDate();
  const month = timeNow.getMonth();

  return {
    dayOfWeek: namesOfDayAndMonth.dayOfWeek[dayOfWeek],
    monthName: namesOfDayAndMonth.month[month - 1],
    time: `${hours}:${minutes}`,
    day,
  };
};

const Time = () => {
  const timeNow = time();
  return (
    <div className={s.time}>
      <p>{timeNow.dayOfWeek}</p>
      <p className={s.date}>{timeNow.day}</p>
      <p>{timeNow.monthName}</p>
      <p>{`${timeNow.time}`}</p>
    </div>
  );
};

export default Time;
