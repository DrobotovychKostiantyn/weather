import React from 'react';

import s from './Time.module.css';

import * as namesOfDayAndMonth from '../../assets/date';

const time = timeData => {
  const timeNow = new Date();
  const hours =
    timeData.slice(timeData.indexOf(' ') + 1).length === 4
      ? `0${timeData.slice(timeData.indexOf(' ') + 1)}`
      : timeData.slice(timeData.indexOf(' '));
  const dayOfWeek = timeNow.getDay();
  const day =
    timeData.slice(9, 11)[0] !== 0
      ? `0${timeData.slice(9, 11)}`
      : timeData.slice(9, 11);
  const month =
    timeData.slice(6, 7)[0] !== 0 ? timeData.slice(6, 7) : timeData.slice(6, 7);

  return {
    dayOfWeek: namesOfDayAndMonth.dayOfWeek[dayOfWeek],
    monthName: namesOfDayAndMonth.month[month - 1],
    hours,
    day,
  };
};

const Time = ({ timeData }) => {
  const timeNow = time(timeData);
  return (
    <div className={s.time}>
      <p>{timeNow.dayOfWeek}</p>
      <p className={s.date}>{timeNow.day}</p>
      <p>{timeNow.monthName}</p>
      <p>{`${timeNow.hours}`}</p>
    </div>
  );
};

export default Time;
