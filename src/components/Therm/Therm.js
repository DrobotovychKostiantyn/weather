import React from 'react';

import thermometer from '../../assets/thermometer.png';

import s from './Therm.module.css';

const Therm = () => (
  <div className={s.wrap}>
    <div className={s.thermometer}>
      <img src={thermometer} alt="thermometer" />
      <div>
        <p className={s.therm}>26</p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 80,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p>min.</p>
            <p className={s.minNum}>10</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p>max.</p>
            <p className={s.maxNum}>10</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Therm;
