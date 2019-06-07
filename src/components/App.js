import React, { Component } from 'react';

import Search from './Search/Search';
import Time from './Time/Time';
import Therm from './Therm/Therm';
import SetAndRise from './SetAndRise/SetAndRise';
import Condition from './Condition/Condition';
import DayForecast from './DayForecast/DayForecast';

import * as api from '../api';

import s from './App.module.css';

const styleForBackground = largeImageURL => ({
  backgroundImage: `url(${largeImageURL})`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  width: '100%',
  height: '100%',
  paddingBottom: 100,
});

export default class App extends Component {
  state = {
    search: '',
    forecast: null,
    background: null,
    isForecastOpen: false,
  };

  componentDidMount() {
    api.fetchWeatherWithIP().then(forecast => this.setState({ forecast }));

    api
      .fetchPhoto()
      .then(res => this.setState({ background: res.hits[2].largeImageURL }));
  }

  handleChangeSearch = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmitSearchForm = e => {
    e.preventDefault();

    const { search } = this.state;

    api
      .fetchWeatherTodayByCity(search)
      .then(({ data }) => this.setState({ forecast: data }));
  };

  handleClickShowForecast = () => {
    const currentScroll = window.pageYOffset + 150;

    this.setState(
      () => ({ isForecastOpen: true }),
      () =>
        window.scrollTo({
          top: currentScroll,
          left: 0,
          behavior: 'smooth',
        }),
    );
  };

  handleClickHideForecast = () => {
    this.setState(() => ({ isForecastOpen: false }));
  };

  render() {
    const { search, forecast, background, isForecastOpen } = this.state;

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
            {forecast && (
              <p className={s.locationText}>{forecast.location.name}</p>
            )}
          </div>
        </div>

        {forecast && (
          <div className={s.main}>
            <div className={s.info}>
              <Time />
              <Therm
                temp={forecast.current.temp_c}
                min={
                  String(forecast.forecast.forecastday[0].day.mintemp_c)
                    .length > 2
                    ? String(
                        forecast.forecast.forecastday[0].day.mintemp_c,
                      ).slice(0, 2)
                    : forecast.forecast.forecastday[0].day.mintemp_c
                }
                max={
                  String(forecast.forecast.forecastday[0].day.mintemp_c)
                    .length > 2
                    ? String(
                        forecast.forecast.forecastday[0].day.maxtemp_c,
                      ).slice(0, 2)
                    : forecast.forecast.forecastday[0].day.maxtemp_c
                }
              />
              <SetAndRise
                sunriseTime={forecast.forecast.forecastday[0].astro.sunrise.slice(
                  0,
                  5,
                )}
                sunsetTime={forecast.forecast.forecastday[0].astro.sunset.slice(
                  0,
                  5,
                )}
                moonriseTime={forecast.forecast.forecastday[0].astro.moonrise.slice(
                  0,
                  5,
                )}
                moonsetTime={forecast.forecast.forecastday[0].astro.moonset.slice(
                  0,
                  5,
                )}
              />
              <Condition
                img={forecast.forecast.forecastday[0].day.condition.icon}
                text={forecast.forecast.forecastday[0].day.condition.text}
              />
            </div>

            <div className={s.btnBlock}>
              <button
                type="button"
                onClick={
                  isForecastOpen
                    ? this.handleClickHideForecast
                    : this.handleClickShowForecast
                }
                className={s.btn}
              >
                {isForecastOpen ? 'Hide' : 'Show forecast for 5 days'}
              </button>
            </div>

            {isForecastOpen && (
              <div className={s.forecast}>
                <DayForecast style={s.dayForecast} />
                <DayForecast style={s.dayForecast} />
                <DayForecast style={s.dayForecast} />
                <DayForecast style={s.dayForecast} />
                <DayForecast style={s.dayForecast} />
                <DayForecast style={s.dayForecast} />
                <DayForecast />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
