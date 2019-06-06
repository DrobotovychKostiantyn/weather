import React, { Component } from 'react';

import Search from './Search/Search';
import Time from './Time/Time';
import Therm from './Therm/Therm';
import SetAndRise from './SetAndRise/SetAndRise';
import Condition from './Condition/Condition';

import * as api from '../api';

import s from './App.module.css';

const styleForBackground = largeImageURL => ({
  backgroundImage: `url(${largeImageURL})`,
  backgroundSize: 'cover',
  width: '100vw',
  height: '100vh',
});

export default class App extends Component {
  state = {
    city: null,
    search: '',
    today: null,
    error: null,
    background: null,
    isForecastOpen: false,
  };

  componentDidMount() {
    api.fetchWeatherWithIP().then(res => this.setState({ today: res }));

    api
      .fetchPhoto()
      .then(res => this.setState({ background: res.hits[2].largeImageURL }));
  }

  handleChangeSearch = ({ target: { value } }) => {
    this.setState({
      search: value,
    });
  };

  handleSubmitSearchForm = e => {
    e.preventDefault();

    console.log(this.state);

    this.setState(prev => ({
      city: prev.search,
    }));
  };

  handleClickShowForecast = () => {
    this.setState(state => ({ isForecastOpen: !state.isForecastOpen }));
  };

  render() {
    const { search, today, background, isForecastOpen } = this.state;

    return (
      <div style={styleForBackground(background)}>
        <div className={s.header}>
          <Search
            value={search}
            onSubmit={this.handleSubmitSearchForm}
            onChange={this.handleChangeSearch}
          />

          <div className={s.location}>
            <i className="material-icons">location_on</i>
            {today && <p>{today.location.tz_id}</p>}
          </div>
        </div>

        {/* <h3 className={s.title}>Today</h3> */}

        <div className={s.main}>
          <div className={s.info}>
            <Time />
            <Therm />
            <SetAndRise />
            <Condition />
          </div>

          <div className={s.btnBlock}>
            <button
              type="button"
              onClick={this.handleClickShowForecast}
              className={s.btn}
            >
              {isForecastOpen ? 'Hide' : 'Show forecast for 5 days'}
            </button>
          </div>

          {isForecastOpen && (
            <div>
              <h3>forecast</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
