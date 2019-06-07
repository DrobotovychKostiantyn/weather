import React from 'react';

import s from './Condition.module.css';

const Condition = ({ img, text }) => (
  <div className={s.condition}>
    <img src={img} alt={text} />
    <p>{text}</p>
  </div>
);

export default Condition;
