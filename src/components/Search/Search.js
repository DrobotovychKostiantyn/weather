import React from 'react';

import s from './Search.module.css';

const Search = ({ value, onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className={s.form}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={s.search}
      placeholder="Enter city"
      name="search"
    />
    <button type="submit" className={s.btn}>
      Search
    </button>
  </form>
);

export default Search;
