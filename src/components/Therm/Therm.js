import React from 'react';

import thermometer from '../../assets/thermometer.png';

import s from './Therm.module.css';

const Therm = ({ temp, min, max }) => (
  <div className={s.wrap}>
    <div className={s.thermometer}>
      <img src={thermometer} alt="thermometer" />
      <div>
        <p className={s.therm}>{temp}</p>

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
    </div>
  </div>
);

export default Therm;
